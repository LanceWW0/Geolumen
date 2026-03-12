import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { bngToLatLng } from "./utils/coords";

function App() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch(
      "/api/ea/water-quality/sampling-point?skip=0&limit=100&latitude=52.5&longitude=-0.1&radius=40",
      {
        headers: {
          accept: "application/ld+json",
          "API-Version": "1",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Sample point:", data.member?.[0]);
        console.log("WKT:", data.member?.[0]?.geometry?.asWKT);
        setPoints(data.member || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <MapContainer
      center={[52.5, -0.1]}
      zoom={9}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      {points.map((point, i) => {
        const coords = bngToLatLng(point.geometry?.asWKT);
        if (!coords) return null;
        return (
          <CircleMarker
            key={i}
            center={coords}
            radius={6}
            color="#2563eb"
            fillColor="#3b82f6"
            fillOpacity={0.7}
          >
            <Popup>{point.prefLabel || point.altLabel || point.notation}</Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}

export default App;
