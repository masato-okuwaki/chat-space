class Message < ApplicationRecord
  validates :body, presence: true, unless: :image?
  mount_uploader :image, ImageUploader

  belongs_to :user
  belongs_to :group
end
