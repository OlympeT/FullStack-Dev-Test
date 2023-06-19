# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_06_19_045458) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "panels", force: :cascade do |t|
    t.string "panel_id"
    t.string "panel_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "system_installations", force: :cascade do |t|
    t.string "company_name"
    t.string "company_siren"
    t.string "customer_name"
    t.string "customer_email"
    t.string "customer_telephone"
    t.string "installation_address"
    t.date "installation_date"
    t.integer "number_of_panels"
    t.bigint "panel_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["panel_id"], name: "index_system_installations_on_panel_id"
  end

  add_foreign_key "system_installations", "panels"
end
