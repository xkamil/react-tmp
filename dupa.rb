class Product < ApplicationRecord
  before_update :do_some_job

  @dupa = "hoho"


  private

  def do_some_job

    # Pobierz produkt z bazy dla porównania: product = Product.find(self.id)

    # Sprawdż czy jest sens tworzyć nowy produkt porównując aktualny z tym co jest w abzie:
    # if(self.price == product.price) - nie ma sensu tworzyć nowego produktu bo nic się nei zmieniło

    # else - stwórz nowy produk i zapisz
    # Stwórz nowy produkt np product = Product.create(name: self.name, price: self.price, parent_id: self.id)

    # Do rozkminy: Czy należy aktualny obiekt zmodyfikować na wzór nowego zapisanego? Tzn np tak:
    # self.id = product.id itd..

    # zwróc false żeby się nie zrobił update:



  end

end