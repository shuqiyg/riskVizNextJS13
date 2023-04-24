"use client"
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

function Map({ data }) {
    const [map, setMap] = useState(null);
  
    useEffect(() => {
      setMap(
        <MapContainer center={[data[0]["Lat"], data[0]["Long"]]} zoom={6}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.map((row, index) => (
            <Marker key={index} position={[parseFloat(row["Lat"]), parseFloat(row["Long"])]}>
              <Popup>{row["Asset Name"]}</Popup>
            </Marker>
          ))}
        </MapContainer>
      );
    }, [data]);
  
    return <div style={{ height: '100vh', width: '100%' }}>{map}</div>;
  }
  
  export default Map;