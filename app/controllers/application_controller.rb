class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from StandardError, with: :standard_error

    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
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


