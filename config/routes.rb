Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :destroy]
  resources :hotels

  # Sign-up and login routes
  post '/signup', to: 'users#register'
  post '/login', to: 'users#login'
  post '/check_login_status', to: 'users#check_login_status'

  # Verify auth route
  get '/authorize', to: 'application#authorize'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

