import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Platform } from "react-native";
import { Barometer } from "expo-sensors";

export default function BarometerComponent() {
  const [data, setData] = useState({});

  useEffect(() => {
    _toggle();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    this._subscription = Barometer.addListener((barometerData) => {
      setData(barometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  const { pressure = 0, relativeAltitude = 0 } = data;

  return (
    <View style={styles.sensor}>
      <Text>Barometer:</Text>
      <Text>Pressure: {pressure * 100} Pa</Text>
      <Text>
        Relative Altitude:{" "}
        {Platform.OS === "ios"
          ? `${relativeAltitude} m`
          : `Only available on iOS`}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_toggle} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
