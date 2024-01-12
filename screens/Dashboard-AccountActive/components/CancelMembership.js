import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
export default function CancelMembership(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onclick}>
      <View style={styles.Layer}>
        <Text style={styles.font}>Cancel Membership</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("95%"),
    height: hp("6%"),
    borderRadius: 10,
    backgroundColor: "#C4C4C4",
    marginTop: hp("1%"),
    borderRadius:15
  },
  Layer: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    backgroundColor: "#1A1A1A",
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily:'roboto',
    fontWeight:'400'
  },
});
