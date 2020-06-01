import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
 
var that;

export function handleLoc(location){
    var geocoder = new window.google.maps.Geocoder();
    var address = location + ", New Zealand";
    
    geocoder.geocode({'address': address}, function (results, status) {

        if (status === window.google.maps.GeocoderStatus.OK) {

            that.setState({
                center: results[0].geometry.location,
                zoom: 10
            });

        } else {

            alert("Geocode was not successful for the following reason: " + status);
        }
    }); 
}



export class MapContainer extends React.Component {
    constructor(props){
    super(props);
    this.state = {center: {lat: -41.670462, lng: 174.7258999}, zoom: 5.75};
    this.handleLoc = handleLoc.bind(this);
    that = this;
}
  render() {
    return (
    <div className="row mt-4">
        <div className="col-sm-2"></div>
       
        <Map style={{  width: '90%', height: '75%', position: 'absolute', left: '5%' }} google={this.props.google} zoom={this.state.zoom} center={this.state.center} initialCenter={{lat: -41.670462, lng: 174.7258999}}>
      </Map>
        <div className="col-sm-2"></div>
    </div>  
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBWeqceH6ii0cTtLLJXMZCwf321yblgCCo")
})(MapContainer)