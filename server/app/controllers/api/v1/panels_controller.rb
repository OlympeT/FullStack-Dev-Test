class Api::V1::PanelsController < ApplicationController
  def index
    @panel = Panel.all
    render json: @panel
  end
end
