import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hey there!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              // dispatching adn setting the destination ie storing to store
              //   dispatch(
              //     setDestination({
              //       location: details.geometry.location,
              //       description: data.description,
              //     })
              //   );
              //   navigation.navigate("RideOptionsCard"); //this is to tell where to navigate as soon as the destination is entered
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
          />
        </View>

        {/* temporary    */}
        <View>
          <Button
            onPress={() => navigation.navigate("RideOptionsCard")}
            title={"temp"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    borderColor: "white",
    paddingTop: 20,
    flex: 0,
  },

  textInput: {
    borderColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },

  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
