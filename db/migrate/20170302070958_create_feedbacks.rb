class CreateFeedbacks < ActiveRecord::Migration[5.0]
  def change
    create_table :feedbacks do |t|
      t.string :title
      t.text :description
      t.integer :issue_type
      t.integer :priority

      t.timestamps
    end
  end
end
