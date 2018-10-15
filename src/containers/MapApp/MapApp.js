import React, { Component } from 'react';
import styles from './MapApp.module.css';

import MapContainer from '../../components/mapContainer/mapContainer'
import MapInterface from '../../components/UI/mapInterface/mapInterface'

class MapApp extends Component {

    render () {
        
        
        return (
            <div className={styles['MapApp']}>
               <MapInterface/>
               <MapContainer/>
            </div>
        );
    }
}

export default MapApp