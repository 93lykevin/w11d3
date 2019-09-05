class ApplicationController < ActionController::Base
  #CRLLL LLCR


  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    return nil unless session[:session_token]

    # Return the user associated with the session_token (if token is valid)
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

  def logged_in?
    !!current_user
  end

end
