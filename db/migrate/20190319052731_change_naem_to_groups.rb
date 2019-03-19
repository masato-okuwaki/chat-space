class ChangeNaemToGroups < ActiveRecord::Migration[5.0]
  def up
    change_column :groups, :name, :string, null: false, unique: true
  end

  def down
    change_column :groups, :name, :string, null: false
  end
end
