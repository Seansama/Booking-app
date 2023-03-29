class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from StandardError, with: :standard_error

    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end

    # Hash the  data into the web token
    def encode(uid, email)
        payload = {
            data: {
                uid: uid,
                email: email,
                role: 'admin'
            },
            exp: Time.now.to_i + (6 * 3600)
        }
        begin
            JWT.encode(payload, ENV['task_train_key'], 'HS256')
        rescue JWT::EncodeError => e
            app_response(message: 'failed', status: 400, data: { info: 'Something went wrong. Please try again' })
        end
    end

    # Unhash the token
    def decode(token)
        begin
            JWT.decode(token, ENV['task_train_key'], true, { algorithm: 'HS256' })
        rescue JWT::DecodeError => e
            app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' }) 
        end
    end

    # Verify the authorization headers
    def authorize
        authorize_headers = request.headers['Authorization']
        if !authorize_headers
            app_response(message: 'failed', status: 401, data: { info: 'Your request is not authorized.' }) 
        else
            token = authorize_headers.split(' ')[1]
            save_user_id(token)
        end
    end

    # Store the  user id in session
    def save_user(id)
        session[:uid] = id
        session[:expiry] = 6.hours.from_now
    end

    # Delete the user id in session
    def remove_user
        session.delete(:uid)
        session[:expiry] = Time.now
    end

    # Check for the session expiry
    def session_expired?
        session[:expiry] ||= Time.now
        time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
        unless time_diff > 0
            app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
        end
    end

    # Get the user logged in
    def user
        User.find(@uid) 
    end

    # Save the user's id
    def save_user_id(token)
        @uid = decode(token)[0]["data"]["uid"].to_i
    end

    # Get the user logged in (session)
    def user_session
        User.find(session[:uid].to_i) 
    end

    # Rescue from all common errors
    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end

end
