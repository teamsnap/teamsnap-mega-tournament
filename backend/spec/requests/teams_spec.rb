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

    context 'when searching many records' do
      before(:all) do |example|
        services = []
        100_000.times do |i|
          services << {
            name: Faker::Name.unique.name,
            created_at: Time.now,
            updated_at: Time.now
          }
        end
        Team.insert_all(services)
      end

      it 'searches efficiently' do
        Team.create(name: "Lions")
        expect {
          get "/teams/search?name=lions"
        }.to perform_under(0.15).sec
      end
    end
  end
end
