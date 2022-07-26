import { View, Text } from 'react-native'
import React from 'react'
import * as LocalAuthentication from 'expo-local-authentication';


export default function LocalAuthenticationComponent() {



    useEffect(() => {
        (async () => {


            LocalAuthentication.authenticateAsync({
                reason: 'Authenticate to access your account',
                fallbackLabel: 'Fallback label',
                disableDeviceFallback: true,
                disableUserFallback: true,
                suppressEnterPassword: true,
                suppressBiometry: true,
                suppressBiometryDialog: true,
                suppressTouchID: true,
            })
            .then(console.log)
            .catch(console.log);
        }
        )();
    }, []);
    

  return (
    <View>
      <Text>LocalAuthenticationComponent</Text>
    </View>
  )
}