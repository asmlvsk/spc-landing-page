class Api::RequestsController < ApiController

  def create
    request = Request.new(requests_params)

    if request.save
      render json: request, status: :created
    else
      head :unprocessable_entity
    end
  end

  private

  def requests_params
    params.require(:request).permit(:email, :name)
  end
end
