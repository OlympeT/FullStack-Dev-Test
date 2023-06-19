require 'rails_helper'

RSpec.describe Api::V1::SystemInstallationsController, type: :controller do
  describe 'POST #create' do
    context 'with valid parameters' do
      let(:valid_params) do
        {
          system_installation: {
            company_name: 'Carrefour',
            company_siren: '123456789',
            customer_name: 'Vincent Dale',
            customer_email: 'Vincent@carrefour.fr',
            customer_telephone: '0695655816',
            installation_address: '17 Allee du moulin',
            installation_date: '2023-06-19',
            number_of_panels: 10,
            panel_id: 'ASDVE4'
          }
        }
      end

      it 'creates a new system installation' do
        expect do
          post :create, params: valid_params
        end.to change(SystemInstallation, :count).by(1)
      end

      it 'returns the created system installation' do
        post :create, params: valid_params
        expect(response).to have_http_status(:created)
        expect(response_body['company_name']).to eq('Carrefour')
        expect(response_body['customer_name']).to eq('Vincent Dale')
        # Assert other attributes as needed
      end
    end

    context 'with invalid parameters' do
      let(:invalid_params) do
        {
          system_installation: {
            company_name: '',
            company_siren: '123456789',
            customer_name: 'Vincent DAle',
            customer_email: 'Vincent@carrefour.fr',
            customer_telephone: '1234567890',
            installation_address: '17 Allee du moulin',
            installation_date: '2023-06-19',
            number_of_panels: 10,
            panel_id: 'ASDFREH'
          }
        }
      end

      it 'does not create a new system installation' do
        expect do
          post :create, params: invalid_params
        end.not_to change(SystemInstallation, :count)
      end

      it 'returns the validation errors' do
        post :create, params: invalid_params
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response_body['company_name']).to include("can't be blank")
        # Assert other validation errors as needed
      end
    end
  end

  private

  def response_body
    JSON.parse(response.body)
  end
end
