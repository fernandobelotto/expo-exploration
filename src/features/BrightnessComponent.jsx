import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Brightness from "expo-brightness";

export default function BrightnessComponent() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === "granted") {
        Brightness.setSystemBrightnessAsync(1);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Brightness Module Example</Text>
    </View>
  );
}
