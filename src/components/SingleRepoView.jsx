import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import ReviewItem from "./ReviewItem";
import RepositoryInfo from "./RepositoryInfo";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 20,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepoView = () => {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const { loading, repository } = useRepository(decodedId);

  console.log(decodedId);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!repository) {
    return (
      <View>
        <Text>Repository not found!</Text>
      </View>
    );
  }

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <ScrollView>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </ScrollView>
  );
};

export default SingleRepoView;
