import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES_AVG_RATINGS } from "../components/graphQL/queries";

const useRepositoriesByRatings = ({ orderBy, orderDirection, searchKeyword }) => {
    console.log("Variables", { orderBy, orderDirection, searchKeyword })
    const { loading, error, data } = useQuery(GET_REPOSITORIES_AVG_RATINGS, {
        variables: { orderBy, orderDirection, searchKeyword },
        fetchPolicy: "cache-and-network",
    });

    return {
        repositories: data ? data.repositories : null,
        loading,
        error,
    };
};

export default useRepositoriesByRatings;