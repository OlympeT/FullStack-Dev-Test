class Api::V1::SystemInstallationsController < ApplicationController
  def index
    @installations =  SystemInstallation.all
    render json: @installations
  end

  def create
    system_installation = SystemInstallation.new(system_installation_params)

    if system_installation.save
      render json: system_installation, status: :created
    else
      render json: system_installation.errors, status: :unprocessable_entity
    end
  end

  private

  def system_installation_params
    params.require(:system_installation).permit(:company_name, :company_siren, :customer_name, :customer_email, :customer_telephone, :installation_address, :installation_date, :number_of_panels, :panel_id, :panel_type)
  end


end
