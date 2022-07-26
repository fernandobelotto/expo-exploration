import * as React from 'react';
import { View, Text, Button } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function HapticsComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Haptics.selectionAsync</Text>
      <View style={styles.buttonContainer}>
        <Button title='Selection' onPress={() => Haptics.selectionAsync() } />
      </View>
      <Text style={styles.text}>Haptics.notificationAsync</Text>
      <View style={styles.buttonContainer}>
        <Button title='Success' onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) } />
        <Button title='Error' onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error) } />
        <Button title='Warning' onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning) } />
      </View>
      <Text style={styles.text}>Haptics.impactAsync</Text>
      <View style={styles.buttonContainer}>
        <Button title='Light' onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) } />
        <Button title='Medium' onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) } />
        <Button title='Heavy' onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) } />
      </View>
    </View>
  );
}
