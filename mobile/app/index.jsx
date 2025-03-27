import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/.</Text>
      <Link href="/(auth)/signup" style={{ padding: "30" }}>
        Signup{" "}
      </Link>
      <Link href="/(auth)">Login </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
