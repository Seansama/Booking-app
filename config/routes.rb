Rails.application.routes.draw do
  resources :bookings
  resources :reviews, only: [:index, :create, :destroy]
  resources :hotels

  # Sign-up and login routes
  post '/users', to: 'users#register'
  post '/signup', to: 'users#register', as: 'signup'
  post '/login', to: 'users#login', as: 'login'
  delete '/users/logout', to: 'users#logout'
  get '/user/login/check', to: 'users#check_login_status'

  get 'my_hotels' => 'hotels#my_hotels'
  # Verify auth route
  get '/authorize', to: 'application#authorize'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

