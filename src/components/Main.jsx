import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import SingleRepoView from "./SingleRepoView";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  console.log(window.location.pathname);
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route
          path="/signIn"
          element={<SignIn onSubmit={(values) => console.log(values)} />}
        />
        <Route path="/repositories/:id" element={<SingleRepoView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
