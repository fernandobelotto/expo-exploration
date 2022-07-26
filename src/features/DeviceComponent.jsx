import { View, Text } from "react-native";
import React from "react";
import * as Device from "expo-device";

export default function DeviceComponent() {
  return (
    <View>
      <Text>DeviceComponent</Text>

      <Text>Device.model: {Device.model}</Text>
      <Text>Device.manufacturer: {Device.manufacturer}</Text>
      <Text>Device.brand: {Device.brand}</Text>
      <Text>Device.systemName: {Device.systemName}</Text>
      <Text>Device.systemVersion: {Device.systemVersion}</Text>
      <Text>Device.isTablet: {Device.isTablet ? "true" : "false"}</Text>
      <Text>Device.is24Hour: {Device.is24Hour ? "true" : "false"}</Text>
      <Text>osName: {Device.osName}</Text>
      <Text>deviceName: {Device.deviceName}</Text>
    </View>
  );
}
