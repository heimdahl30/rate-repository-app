import { View, Text } from "react-native";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const SingleRepoView = () => {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const { repositories } = useRepositories();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const repository = repositoryNodes.find(
    (node) => node.fullName === decodedId,
  );

  console.log(decodedId);

  if (!repository) {
    return (
      <View>
        <Text>Repository not found!</Text>
      </View>
    );
  }

  return <RepositoryItem item={repository} />;
};

export default SingleRepoView;
