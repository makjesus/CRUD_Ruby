Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get 'home/index'
  root 'home#index'
  resources :posts
  #redirect_to post_path(@post)


  
end
