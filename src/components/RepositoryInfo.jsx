import RepositoryItem from "./RepositoryItemFolder/RepositoryItem";
import { View, Linking, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
});

const RepositoryInfo = ({ repository }) => {
  const openLink = async () => {
    const url = repository.url;

    await Linking.openURL(url);
  };

  return (
    <View style={{ marginBottom: "10px", paddingBottom: "5px" }}>
      <RepositoryItem item={repository} />
      <Button title="Open in GitHub" onPress={openLink} />
      <View style={styles.separator} />
    </View>
  );
};

export default RepositoryInfo;
