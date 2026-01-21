import { useQuery } from "@apollo/client/react";
import { GET_USER } from "../components/graphQL/queries";

const useUser = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network"
  });

    return { 
    user: data ? data.me : null, 
    loading, 
    error 
  };
  }

export default useUser;
