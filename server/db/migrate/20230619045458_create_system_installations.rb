class CreateSystemInstallations < ActiveRecord::Migration[6.1]
  def change
    create_table :system_installations do |t|
      t.string :company_name
      t.string :company_siren
      t.string :customer_name
      t.string :customer_email
      t.string :customer_telephone
      t.string :installation_address
      t.date :installation_date
      t.integer :number_of_panels
      t.references :panel, null: false, foreign_key: true

      t.timestamps
    end
  end
end
