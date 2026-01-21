import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../components/graphQL/queries";

const useRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return {
    repositories: data ? data.repositories : null,
    loading,
    error,
  };
};

export default useRepositories;
