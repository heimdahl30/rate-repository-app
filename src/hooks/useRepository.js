import { useQuery } from "@apollo/client/react";
import { SINGLE_REPOSITORY } from "../components/graphQL/queries";

const useRepository = (id) => {
  const { loading, error, data } = useQuery(SINGLE_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  return {
    repository: data ? data.repository : null,
    loading,
    error,
  };
};

export default useRepository;
