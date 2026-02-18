import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryListFolder/RepositoryList";
import SingleRepoView from "./SingleRepoView";
import SignIn from "./SignInFolder/SignIn";
import AppBar from "./AppBar";
import ReviewForm from "./ReviewForm";
import UserSignUpForm from "./UserSignUpForm"
import UserReviewsList from './UserReviewsList'
import { Route, Routes, Navigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/reviewForm" element={<ReviewForm />} />
        <Route path="/reviewList" element={<UserReviewsList />} />
        <Route path="/signUpForm" element={<UserSignUpForm />} />
        <Route path="/repositories/:id" element={<SingleRepoView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
