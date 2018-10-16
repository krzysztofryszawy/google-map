import React from "react";
import Map from "../map/map";
import styles from './mapContainer.module.css'

class mapContainer extends React.Component {

	render() {
		return (
            <div className={styles['mapContainer']}>
                <Map 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBua14rOsvyVkV5eAYRVK8XUo0AQvP6D5Q&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
		);
	}
}

export default mapContainer