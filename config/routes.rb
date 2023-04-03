Rails.application.routes.draw do
  resources :bookings
  resources :reviews, only: [:index, :create, :destroy]
  resources :hotels
  # Sign-up and login routes
  post '/signup' => 'users#register'
  post '/login' => 'sessions#create'
  #match '/login', to: 'sessions#create', via: [:options]
  #custom admin hotel route
  get '/my_hotels' => 'hotels#my_hotels'

  # Verify auth route
  #get '/authorize', to: 'application#authorize'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

