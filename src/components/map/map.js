import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

    const map = withScriptjs(withGoogleMap((props) =>{


    
        let handleClick = (e) => {
            let lat = e.latLng.lat(), lng = e.latLng.lng()
            console.log(lat,lng,e)
        }

        return (
          <GoogleMap
            defaultZoom={8}
            center={ { lat:  42.3601, lng: -71.0589 } }
            onClick={(e) => handleClick(e)}
            >

          </GoogleMap>
        );
    }
    ))

export default map;