class TeamsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    begin
      render json: { content: Team.fetch_team_names }
    rescue => e
      render json: {error: e}
    end
  end

  def create
    begin
      new_team = Team.new
      new_team.name = params[:team]
      response = {}
      if new_team.valid?
        new_team.save
      else
        response[:error] = new_team.errors.messages
      end
      response[:content] = Team.fetch_team_names
      render json: response
    rescue => e
      render json: { content: Team.fetch_team_names, error: e }
    end
  end
end
