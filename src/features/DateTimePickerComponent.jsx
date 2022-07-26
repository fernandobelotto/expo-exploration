import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTimePickerComponent = (props) => {
  return (
    <View>
      <Text>DateTimePickerComponent</Text>
      <DateTimePicker mode="time" />
    </View>
  );
};

export default DateTimePickerComponent;
