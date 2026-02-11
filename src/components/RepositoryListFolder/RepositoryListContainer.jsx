import { FlatList, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import RepositoryItem from "../RepositoryItemFolder/RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 20,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <Link
      to={`/repositories/${encodeURIComponent(item.id)}`}
      underlayColor="lightgray"
    >
      <View>
        <RepositoryItem item={item} />
      </View>
    </Link>
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.fullName}
    />
  );
};
