import { View, Text } from "react-native";
import React from "react";
import * as Application from "expo-application";

export default function ApplicationComponent() {
  return (
    <View>
      <Text>{Application.androidId}</Text>
      <Text>{Application.applicationId}</Text>
      <Text>{Application.applicationName}</Text>
      <Text>{Application.nativeApplicationVersion}</Text>
      <Text>{Application.nativeBuildVersion}</Text>
    </View>
  );
}
