require "rails_helper"
require "faker"

RSpec.describe "/teams", type: :request do
  describe "GET /index" do
    it 'renders a successful response' do
      get "/teams"
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    it 'renders a successful response' do
      post "/teams", params: {team: {}}
      expect(response).to be_successful
    end
  end

  describe "GET /search" do
    it 'renders a successful response' do
      get "/teams/search"

      expect(response).to be_successful
    end

    it 'searches by team name' do
      Team.create(name: "Lions")
      get "/teams/search?name=lions"

      expect(JSON.parse(response.body).count).to eq(1)
    end

    it 'searches efficiently' do
      100_000.times do |i|
        Team.create(name: Faker::Name.unique.name)
      end
      Team.create(name: "Lions")

      get "/teams/search?name=lions"

      # expect
    end
  end
end
