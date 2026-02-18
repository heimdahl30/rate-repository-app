import { useQuery } from "@apollo/client/react";
import { SINGLE_REPOSITORY } from "../components/graphQL/queries";

const useRepository = (id) => {
  const { loading, error, data, fetchMore } = useQuery(SINGLE_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id
      },
    });
  };

  return {
    repository: data ? data.repository : null,
    fetchMore: handleFetchMore,
    hasNextPage: data?.repository.reviews.pageInfo.hasNextPage,
    loading,
    error,
  };
};

export default useRepository;
