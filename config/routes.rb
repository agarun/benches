Rails.application.routes.draw do
  get 'benches/index'

  get 'benches/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :benches, only: [:index, :create]
  end
end
