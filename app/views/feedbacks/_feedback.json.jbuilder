json.extract! feedback, :id, :title, :description, :issue_type, :priority, :created_at, :updated_at
json.url feedback_url(feedback, format: :json)
