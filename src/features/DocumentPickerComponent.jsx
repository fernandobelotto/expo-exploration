import { View, Text } from "react-native";
import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { Button } from "react-native-web";

export default function DocumentPickerComponent() {
  const onDocumentPicker = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      allowsMultipleSelection: true,
    });
    console.log(result);
  };

  return (
    <View>
      <Text>document picker</Text>
      <Button title="Pick a file" onPress={onDocumentPicker} />
    </View>
  );
}
