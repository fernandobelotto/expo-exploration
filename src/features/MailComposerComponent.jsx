import { View, Text } from 'react-native'
import React from 'react'
import * as MailComposer from 'expo-mail-composer';

export default function MailComposerComponent() {

    const openEmail = () => {

        if(MailComposer.isAvailableAsync()) {
            MailComposer.composeAsync()
        }
    }


  return (
    <View>
      <Text>MailComposerComponent</Text>

        <TouchableOpacity onPress={openEmail}>
            <Text>Open Email Composer</Text>
        </TouchableOpacity>

    </View>
  )
}