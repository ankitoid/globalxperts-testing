import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

const offices = [
  { name: "Noida", country: "India", coordinates: [77.391, 28.5355] },
  { name: "Chennai", country: "India", coordinates: [80.2707, 13.0827] },
  { name: "Gurugram", country: "India", coordinates: [77.0266, 28.4595] },
  { name: "New Delhi", country: "India", coordinates: [77.209, 28.6139] },
  { name: "Raleigh", country: "USA", coordinates: [-78.6382, 35.7796] },
  { name: "Dallas", country: "USA", coordinates: [-96.797, 32.7767] },
  { name: "San Jose", country: "USA", coordinates: [-121.8863, 37.3382] },
];

const officePoints = offices.map(o => ({
  ...o,
  lat: o.coordinates[1],
  lng: o.coordinates[0],
}));

/* 🌎 Region labels — hand placed */
const regionLabels = [
  { name: "India", lat: 22, lng: 78 },
  { name: "North America", lat: 40, lng: -100 },
  { name: "South America", lat: -15, lng: -60 },
  { name: "EMEA", lat: 50, lng: 15 }
];

export default function RegionGlobe() {
  const globeRef = useRef();
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.minDistance = 140;
    controls.maxDistance = 500;

    globeRef.current.pointOfView({ lat: 20, lng: 60, altitude: 2.2 }, 0);
  }, []);

  return (
    <div className="w-full h-[640px]">
      <Globe
        ref={globeRef}
        width={580}
        height={660}

        /* 🌍 Earth */
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

        /* keep your gradient page bg visible */
        backgroundColor="rgba(0,0,0,0)"

        /* subtle glow */
        atmosphereColor="#60a5fa"
        atmosphereAltitude={0.15}

        /* 📍 Office markers */
        pointsData={officePoints}
        pointLat="lat"
        pointLng="lng"
        pointRadius={0.7}
        pointAltitude={0.02}
        pointColor={() => "#2563EB"}
        onPointHover={setHovered}
        onPointClick={(p) =>
          globeRef.current.pointOfView(
            { lat: p.lat, lng: p.lng, altitude: 1.4 },
            900
          )
        }

        /* 🔵 Pulse rings */
        ringsData={officePoints}
        ringLat="lat"
        ringLng="lng"
        ringColor={() => t => `rgba(37,99,235,${1-t})`}
        ringMaxRadius={3}
        ringPropagationSpeed={1}
        ringRepeatPeriod={1500}

        /* 🏷 REGION LABELS (white) */
        labelsData={regionLabels}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={1.6}
        labelDotRadius={0}
        labelColor={() => "#ffffff"}
        labelResolution={2}
      />

      {/* Hover card */}
      {hovered && (
        <div className="absolute items-center justify-center  bg-white/95 px-4 py-2 shadow-lg border text-sm">
          <div className="font-semibold">{hovered.name}</div>
          <div className="text-gray-600">{hovered.country}</div>
        </div>
      )}
    </div>
  );
}
