import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

const mapOptions = {
  center: {
    // San Fran
    lat: 37.7758,
    lng: -122.435
  },
  zoom: 13,
};

class BenchMap extends Component {
  constructor(props) {
    super(props);
    this.updateMarkers = this.updateMarkers.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateMarkers({ benches }) {
    this.MarkerManager.updateMarkers(benches);
  }

  handleClick(e) {
    const coords = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };

    this.props.history.push({
      pathname: 'benches/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`,
    });
  }

  // "React will call the ref callback with the DOM element when the
  // component mounts, and call it with null when it unmounts.
  // ref callbacks are invoked before componentDidMount
  // or componentDidUpdate lifecycle hooks."
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.updateMarkers(this.props);

    this.map.addListener('idle', () => {
      const { north, east, south, west } =
        this.map.getBounds().toJSON();

      const bounds = {
        northEast: {
          lat: north,
          lng: east
        },
        southWest: {
          lat: south,
          lng: west
        }
      };
      this.props.updateFilter('bounds', bounds);
    });

    this.map.addListener('click', this.handleClick);
  }

  componentWillReceiveProps(nextProps) {
    this.updateMarkers(nextProps);
  }

  render() {
    return (
      <div
        ref={map => this.mapNode = map}
        id="map-container"
      >
      </div>
    );
  }

}

export default withRouter(BenchMap);
