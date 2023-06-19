class SystemInstallation < ApplicationRecord
  belongs_to :panel

  # Validations
  validates :company_name, presence: true
  validates :company_siren, presence: true
  validates :customer_name, presence: true
  validates :customer_email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :customer_telephone, presence: true
  validates :installation_address, presence: true
  validates :installation_date, presence: true
  validates :number_of_panels, presence: true, numericality: { greater_than: 0 }

end
