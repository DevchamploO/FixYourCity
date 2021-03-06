Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :incidents, only: [:index, :create, :update, :show]

    post '/incidents/:incident_id/comments', to: "comments#create"
    delete '/incidents/:incident_id/comments/:comment_id', to: "comments#destroy"
    get '/incidents/:incident_id/comments', to: "comments#index"
  end

  root to: 'static_pages#root'

end
