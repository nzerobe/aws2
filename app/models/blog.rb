class Blog < ApplicationRecord
   validates :content, length: { in: 1..140 }
    validates :title, presence: true
end
