import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin); //gets whatever the value is in the store is pulled

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {/* {origin?.location && ( */}
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
          // latitude: origin.location.lat,
          // longitude: origin.location.lng,
        }}
        title="origin"
        description="desc"
        // description={origin.description}
        identifier="origin"
      />
      {/* )} */}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
