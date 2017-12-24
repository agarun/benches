class Bench < ApplicationRecord
  def self.in_bounds(bounds)
    Bench.all.select do |bench|
      bench.lng < bounds['northEast']['lng'].to_f &&
      bench.lng > bounds['southWest']['lng'].to_f &&
      bench.lat < bounds['northEast']['lat'].to_f &&
      bench.lat > bounds['southWest']['lat'].to_f
    end
  end
end
