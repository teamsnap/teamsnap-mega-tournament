Rails.application.routes.draw do
  get 'greetings/hello'
  get '/teams', to: 'teams#index'
  post '/teams', to: 'teams#create'
  get '/team/name/:team', to: 'team_info#name'
  get '/team/id/:id', to: 'team_info#id'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
