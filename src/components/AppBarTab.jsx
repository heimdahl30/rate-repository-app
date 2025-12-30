import { Text, View } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";

const AppBarTab = () => {
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
};
export default AppBarTab;
