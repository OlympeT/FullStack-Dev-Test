Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  namespace :api do
    namespace :v1 do
      resources :system_installations, only: [:index, :create]
      resources :panels, only: [:index]
    end
  end
end
