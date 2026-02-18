import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES_BY_KEYWORD } from "../components/graphQL/queries";

const useRepositoriesByRatings = (searchKeyword) => {
    const { loading, error, data } = useQuery(GET_REPOSITORIES_BY_KEYWORD, {
        variables: { searchKeyword },
        fetchPolicy: "cache-and-network",
    });

    return {
        repositories: data ? data.repositories : null,
        loading,
        error,
    };
};

export default useRepositoriesByRatings;