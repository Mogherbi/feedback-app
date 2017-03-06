Rails.application.routes.draw do
  root to: 'feedbacks#index'
  resources :feedbacks
end
