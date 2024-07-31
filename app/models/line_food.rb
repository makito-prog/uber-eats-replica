class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true

  validates :count, numericality: { greater_than: 0}
  # `active`スコープを定義します
  scope :active, -> { where(active: true) }

  # 他のレストランのLineFoodを取得するスコープを定義します
  scope :other_restaurant, ->(restaurant_id) { where.not(restaurant_id: restaurant_id).where(active: true) }

  def total_amount
    food.price * count
  end

end