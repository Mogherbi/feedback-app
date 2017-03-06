class Feedback < ApplicationRecord
  enum issue_type: [:others, :bug, :improvement, :compliment]
  enum priority: [:na, :low, :medium, :high]
end
