class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from StandardError, with: :standard_error

    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end

    
    def authorize
        authorize_headers = request.headers['Authorization']
        if !authorize_headers
            app_response(message: 'failed', status: 401, data: { info: 'Your request is not authorized.' }) 
        else
            token = authorize_headers.split(' ')[1]
            save_user_id(token)
        end
    end

    def save_user(id)
        session[:uid] = id
        session[:expiry] = 6.hours.from_now
    end

    def session_expired?
        session[:expiry] ||= Time.now
        time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
        unless time_diff > 0
            app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
        end
    end

    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end
end


