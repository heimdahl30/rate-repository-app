import { AUTHENTICATE_MUTATION } from "../components/graphQL/mutations";
import { useMutation } from "@apollo/client/react";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient, useQuery } from "@apollo/client/react";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_MUTATION);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const credentials = {
      username,
      password,
    };

    const response = await mutate({ variables: { credentials: credentials } });

    if (response.data) {
      await authStorage.setAccessToken(response.data.authenticate.accessToken);
      const token = await authStorage.getAccessToken();
      console.log("token", token);
      await apolloClient.resetStore();
    }
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
