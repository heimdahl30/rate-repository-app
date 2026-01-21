import { Text, View, Pressable } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";
import useUser from "../hooks/useUser";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client/react";
import { useNavigate } from "react-router-native";

const AppBarTab = () => {
  const { user } = useUser();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  console.log("user", user);

  const pressed = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/signIn");
  };

  if (user) {
    return (
      <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
        <Link to="/">
          <Text style={theme.appBarTitle}>Repositories</Text>
        </Link>
        <Pressable onPress={pressed}>
          <Text style={theme.appBarTitle}>Sign Out</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
        <Link to="/">
          <Text style={theme.appBarTitle}>Repositories</Text>
        </Link>
        <Link to="/signIn">
          <Text style={theme.appBarTitle}>Sign In</Text>
        </Link>
      </View>
    );
  }
};
export default AppBarTab;
