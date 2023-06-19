class Panel < ApplicationRecord
  has_many :system_installations
  validates :panel_id, :panel_type, :presence => true
  validate :validate_panel_id_length

  private

  def validate_panel_id_length
    errors.add(:panel_code, "must be exactly 6 characters") if panel_id.length != 6
  end

end
