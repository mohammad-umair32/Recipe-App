import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize: 20,
        color: "black",
      }}>Edit my name app/index.tsx to edit this screen.</Text>
    </View>
  );
}
