class Api::BenchesController < ApplicationController
  def index
    @benches = bounds? ? Bench.in_bounds(params[:bounds]) : Bench.all
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def create
  end

  private

  def bounds?
    !!params[:bounds]
  end
end
