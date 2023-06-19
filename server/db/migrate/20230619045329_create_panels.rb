class CreatePanels < ActiveRecord::Migration[6.1]
  def change
    create_table :panels do |t|
      t.string :panel_code
      t.string :panel_type

      t.timestamps
    end
  end
end
