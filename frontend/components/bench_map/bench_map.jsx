import React, { Component } from 'react';

class BenchMap extends Component {
  // "React will call the ref callback with the DOM element when the
  // component mounts, and call it with null when it unmounts.
  // ref callbacks are invoked before componentDidMount
  // or componentDidUpdate lifecycle hooks."
  componentDidMount() {
    const mapOptions = {
      center: {
        // San Fran
        lat: 37.7758,
        lng: -122.435
      },
      zoom: 13,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
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

export default BenchMap;
