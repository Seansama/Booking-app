Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :destroy]
  resources :hotels

  # Sign-up and login routes
  post '/signup', to: 'users#register'
  post '/login', to: 'users#login'
  

  # Verify auth route
  get '/authorize', to: 'application#authorize'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

