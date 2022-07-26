import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { Button, View } from 'react-native';

export default function KeepAwakeComponent() {

    const activate = () => {
        activateKeepAwake(); 
        alert('Activated!');
      };
    
      const deactivate = () => {
        deactivateKeepAwake(); 
        alert('Deactivated!');
      };
      
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button onPress={activate} title="Activate" />
    <Button onPress={deactivate} title="Deactivate" />
  </View>
  )
}