class MarkerManager {
  constructor(map, showOnClick) {
    this.map = map;
    this.showOnClick = showOnClick;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromBranch = this.createMarkerFromBranch.bind(this);
  }

  updateMarkers(benches) {
    const allBenchIds = Object.keys(benches);

    allBenchIds.forEach((benchId) => {
      if (!this.markers[benchId]) {
        this.createMarkerFromBranch(benches[benchId], this.showOnClick);
      }
    });

    Object.keys(this.markers).forEach((benchId) => {
      if (!benches[benchId]) {
        this.removeMarker(benchId);
      }
    })
  }

  removeMarker(benchId) {
    this.markers[benchId].setMap(null);
    delete this.markers[benchId];
  }

  createMarkerFromBranch(bench) {
    this.markers[bench.id] =
      new google.maps.Marker({
        position: {
          lat: bench.lat,
          lng: bench.lng
        },
        map: this.map
      });
    this.markers[bench.id].addListener('click', () => this.showOnClick(bench));
  }
}

export default MarkerManager;
