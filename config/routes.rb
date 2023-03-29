Rails.application.routes.draw do
  resources :hotels
  post '/users', to: 'users#register'
  post '/users/login', to: 'users#login'
  post '/users/login/check', to: 'users#check_login_status'

  # verify auth
  get '/authorize', to: 'application#authorize'

 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
