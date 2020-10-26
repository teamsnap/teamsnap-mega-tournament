require 'rails_helper'

RSpec.describe Team, '.fetch_team_names' do
  it 'returns all team names' do
    # Setup
    Team.create(name: 'Snap')
    Team.create(name: 'Test')

    # Get team names
    team_names = Team.fetch_team_names

    # Verify
    expect(team_names).to eq ['Snap', 'Test']
  end
end
