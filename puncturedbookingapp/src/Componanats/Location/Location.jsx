import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
class MapContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <Map
            google={this.props.google}
            style={{ width: "100%", height: "100%" }}
            zoom={10}
            initialCenter={{
              lat: 18.52043,
              lng: 73.856743,
            }}
          >
            <Marker
              position={{
                lat: 18.52043,
                lng: 73.856743,
              }}
            />
          </Map>
        </div>
       
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBIZFQsSD8lvHgB39M9gu5xWekPGwt9HKY",
})(MapContainer);
// AIzaSyBIZFQsSD8lvHgB39M9gu5xWekPGwt9HKY
