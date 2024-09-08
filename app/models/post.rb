class Post < ApplicationRecord

    validates :title, :description, presence:true
    validates :title, length: {minimum: 5}
    validates :description, length: {minimum: 7}

    before_save do 
        self.title = self.title + "Diego"
  end
end
