import * as Cellular from "expo-cellular";

import React from "react";

export default function CellularComponent() {
  useEffect(() => {
    Cellular.getCarrierNameAsync().then(console.log);
    Cellular.allowsVoipAsync().then(console.log);
    Cellular.getCellularGenerationAsync().then(console.log);
    Cellular.getIsoCountryCodeAsync().then(console.log);
    Cellular.getMobileCountryCodeAsync().then(console.log);
    Cellular.getMobileNetworkCodeAsync().then(console.log);
  }, []);

  return (
    <>
      <View>
        <Text>Cellular Module Example</Text>
      </View>
    </>
  );
}
