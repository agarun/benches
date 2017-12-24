class Bench < ApplicationRecord
  def self.in_bounds(bounds)
    Bench.all.select do |bench|
      bench.lng < bounds['northEast']['lng'].to_i &&
      bench.lng > bounds['southWest']['lng'].to_i &&
      bench.lat < bounds['northEast']['lat'].to_i &&
      bench.lat > bounds['southWest']['lat'].to_i
    end
  end
end
