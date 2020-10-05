class TeamsController < ApplicationController
  skip_before_action :verify_authenticity_token

  @@teams = []
  def index
    render json: { content: @@teams }
  end

  def create
    @@teams << params[:team]
    render json: { content: @@teams }
  end
end
