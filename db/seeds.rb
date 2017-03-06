5.times do
  title = Faker::Company.bs
  description = Faker::Lorem.paragraph(2, false, 2)
  issue_type = rand(0..3)
  priority = rand(0..3)

  Feedback.create(title: title, description: description, issue_type: issue_type, priority: priority)
end
