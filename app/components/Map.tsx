"use client";
import { useState } from "react";
import MapGl, { Marker, Popup } from "react-map-gl";
import { SearchResultData, ListingCardItem } from "./types/app";
import { getCenter } from "geolib";
// map styles
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const [selectedLocation, setSelectedLocation] = useState<ListingCardItem | null >(null)
  const coordinates = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    longitude: center.longitude,
    latitude: center.latitude,
  });

  return (
    <MapGl
      {...viewport}
      mapStyle="mapbox://styles/imad-10/clu1rzi98003201piceui92jy"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      onMove={(nextViewport) =>
        setViewPort((prev) => {
          return {
            ...prev,
            longitude: nextViewport.viewState.longitude,
            latitude: nextViewport.viewState.latitude,
          };
        })
      }
    >
      {searchResultData.map((listing) => (
        <div key={listing.long}>
            <Marker longitude={listing.long} latitude={listing.lat}>
              <div onClick={() => setSelectedLocation(listing)}>
              <FaMapMarkerAlt 
               className="w-[24px] h-[24px] text-[#f91943] animate-bounce" />
              </div>
            </Marker>
            {/* show popUp */}
            {selectedLocation?.long === listing.long? ( <Popup closeOnClick={false} onClose={()=> setSelectedLocation (null)}
            longitude={listing.long}
            latitude={listing.lat}
            >
              {listing.title} 
              </Popup>
              ): null}   
        </div>
      ))}
    </MapGl>
  );
};

export default Map;
