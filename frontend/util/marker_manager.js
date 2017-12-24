class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromBrench = this.createMarkerFromBrench.bind(this);
  }

  updateMarkers(benches) {
    Object.keys(benches).forEach((benchId) => {
      this.createMarkerFromBrench(benches[benchId]);
    });

    Object.keys(this.markers).forEach((marker) => this.removeMarker(marker));
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker];
  }

  createMarkerFromBrench(bench) {
    if (!this.markers[bench.id]) {
      new google.maps.Marker({
        position: {
          lat: bench.lat,
          lng: bench.lng
        },
        map: this.map
      });
    }
  }
}

export default MarkerManager;
