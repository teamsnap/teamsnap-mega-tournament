class Team < ApplicationRecord
  validates_presence_of :name
  validates_uniqueness_of :name

  def self.fetch_team_names
    Team.all.select(:name).map(&:name)
  end
end
