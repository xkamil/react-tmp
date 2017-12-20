class Test
  def func1
    func2
  end

  private

  def func2
    puts "dupa"
  end
end


Test.new.func1