class CreatePanels < ActiveRecord::Migration[6.1]
  def change
    create_table :panels do |t|
      t.string :panel_id
      t.string :panel_type

      t.timestamps
    end
  end
end
