"use client" //to say client side rendering

import React from "react";
import { GoogleMap,LoadScript,Marker  }  from "@react-google-maps/api";

const containerStyle = {
    width :"100%",
    height :"100vh",
};

const center = {
    lat :12.976,
    lng :77.5946,
};

const markers = [
    { id:1, position: {lat :12.976 , lng :77.5946},label:"Bangalore"},
    { id:2, position: {lat :13.0827 , lng :80.2707},label:"Chennai"},

];

export default function GoogleMapComponent(){
    const apikey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

return (
    <LoadScript googleMapsApiKey={apikey}>
    <GoogleMap mapContainerStyle={containerStyle} center= {center} zoom ={6}>
    {markers.map((marker) => (
        <Marker
        key ={marker.id}
        position = {marker.position}
        label={marker.label}/>
    ))}
    </GoogleMap>
    </LoadScript>
)
}