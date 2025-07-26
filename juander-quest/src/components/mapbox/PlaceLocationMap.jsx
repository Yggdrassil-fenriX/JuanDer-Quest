import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

// console.log(mapboxgl.accessToken)

const PlaceLocationMap = (props) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (!mapContainer.current || map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/standard",
            center: [123.6856, 13.2574],
            zoom: 10,
        });

        new mapboxgl.Marker()
            .setLngLat([123.6856, 13.2574])
            .setPopup(new mapboxgl.Popup().setText("Mayon Volcano"))
            .addTo(map.current);

    }, []);

    return (
        <div className={props.className}>
            <div ref={mapContainer} className={"h-full w-full"} />
        </div>
    );
};

export default PlaceLocationMap;
