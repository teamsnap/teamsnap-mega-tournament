Rails.application.routes.draw do
  get 'greetings/hello'
  get '/teams', to: 'teams#index'
  post '/teams', to: 'teams#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
