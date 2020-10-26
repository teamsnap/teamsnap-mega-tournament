class TeamInfoController < ApplicationController

  def name
    begin
      render json: { content: Team.find_by(name: params[:team]) }
    rescue => e
      render json: {error: e}
    end
  end

  def id
    begin
      render json: { content: Team.find(params[:id]) }
    rescue => e
      render json: {error: e}
    end
  end
end
