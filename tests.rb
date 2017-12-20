class Product < ApplicationRecord

  before_update :create_new_if_modified

  validates :name,
            presence: true,
            length: {minimum: 3}
  validates :price,
            presence: true,
            numericality: {only_integer: true, greater_than: 0}

  #  belongs_to :category
  #
  #   nie można utworzyc orderu  kiedy jest.. ##TODO


  has_many :product_order, inverse_of: :product, class_name: "ProductOrder"
  has_many :order, through: :product_order, inverse_of: :product

  accepts_nested_attributes_for :product_order

  private

  def create_new_if_modified
    currentProduct = find_product self.id

    if self.price != currentProduct.price
      oldProduct = Product.create(name: currentProduct.name, price: currentProduct.price, deleted: true)
      self.parent_id = oldProduct.id
    end
  end

  def find_product id
    product = Product.find_by(parent_id: id)

    if !product
      Product.find(id)
    elsif product.deleted
      find_product product.id
    else
      puts 'Nieoczekiwany blad! '
    end
  end

end