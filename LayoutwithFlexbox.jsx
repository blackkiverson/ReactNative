//Layout with Flexbox

// A component can specify the layout of its children using the Flexbox 
// algorithm. Flexbox is designed to provide a consistent layout on 
// different screen sizes.

// You will normally use a combination of flexDirection, alignItems, and 
// justifyContent to achieve the right layout.

// Flexbox works the same way in React Native as it does in CSS on the 
// web, with a few exceptions. The defaults are different, with 
// flexDirection defaulting to column instead of row, alignContent 
// defaulting to flex-start instead of stretch, flexShrink defaulting 
// to 0 instead of 1, the flex parameter only supporting a single number.

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "orange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
