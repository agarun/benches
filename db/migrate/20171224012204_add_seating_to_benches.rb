class AddSeatingToBenches < ActiveRecord::Migration[5.1]
  def change
    add_column :benches, :seating, :integer
  end
end
