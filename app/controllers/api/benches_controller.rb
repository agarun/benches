class Api::BenchesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @benches = bounds? ? Bench.in_bounds(params[:bounds]) : Bench.all
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render 'api/benches/show'
    else
      render json: @bench.errors.full_messages
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end

  def bounds?
    !!params[:bounds]
  end
end
