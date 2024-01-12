import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { TextInput, View, Text } from "react-native";

const PinInput = () => {
  let p1 = "0";
  let p2 = "0";
  let p3 = "0";
  let p4 = "0";
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [error, setError] = useState(false);
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const handleChange = (text, ref, setPin) => {
    setPin(text);
    if (text.length === 1 && ref.current) {
      ref.current.focus();
    }
  };
  const navigation = useNavigation();
  useEffect(() => {
    if (p1 === pin1 && p2 === pin2 && p3 === pin3 && p4 === pin4) {
      setError(false);
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
    } else {
      pin1 != "" && setError(true);
      setPin1("");
      setPin2("");
      setPin3("");
      setPin4("");
      pin1Ref.current.focus();
    }
  }, [pin4]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {error ? (
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "robotobold",
              color: "red",
            }}
          >
            Incorrect PIN.
          </Text>
          <Text
            style={{ alignSelf: "center", fontFamily: "roboto", color: "red" }}
          >
            Please try again.
          </Text>
        </View>
      ) : null}
      <View style={styles.container}>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, pin2Ref, setPin1)}
            value={pin1 ? "•" : null}
            ref={pin1Ref}
          />
        </View>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, pin3Ref, setPin2)}
            value={pin2 ? "•" : null}
            ref={pin2Ref}
          />
        </View>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, pin4Ref, setPin3)}
            value={pin3 ? "•" : null}
            ref={pin3Ref}
          />
        </View>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, pin4Ref, setPin4)}
            value={pin4 != "" ? "•" : null}
            ref={pin4Ref}
            // secureTextEntry={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pinContainer: {
    marginHorizontal: 5,
  },
  pinInput: {
    height: 55,
    width: 50,
    fontFamily: "robotobold",
    fontSize: 30,
    color: "#111111",
    textAlign: "center",
    backgroundColor: "#FCFCFB",
    borderRadius: 5,
    alignSelf: "center",
  },
  pinDot: {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: 20,
    marginTop: -10,
    marginLeft: -5,
  },
};

export default PinInput;
