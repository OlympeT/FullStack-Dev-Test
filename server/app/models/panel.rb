class Panel < ApplicationRecord
  has_many :system_installations
  validates :panel_code, :panel_type, :presence => true
  validate :validate_panel_codelength

  private

  def validate_panel_code_length
    errors.add(:panel_code, "must be exactly 6 characters") if panel_code.length != 6
  end

end
