require 'net/http'
require 'yaml'

class GiphyController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    begin
      giphy_config = YAML.load(File.read(Rails.root.join('config', 'giphy.yml')))
      giphy_url = giphy_config['api_url']
      giphy_auth = giphy_config['auth_key']
      uri = URI.parse(giphy_url)
      urlParams = {rating: 'pg', limit: 1, api_key: giphy_auth, q: params[:team]}
      uri.query = URI.encode_www_form(urlParams)
      # response = Net::HTTP.get(uri)
      # render json: { link: response }
      # This currently isn't working due to error:
      # Failed to open TCP connection to :80 (Cannot assign requested address - connect(2) for nil port 80)
      # TODO: Resolve TCP connection error
      # Return set gif until fixed
      render json: { link: 'https://media.giphy.com/media/jPAdK8Nfzzwt2/giphy.gif' }
    rescue => e
      render json: { error: e }
    end
  end
end
