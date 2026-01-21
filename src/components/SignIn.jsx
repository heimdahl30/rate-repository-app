import Text from "./Text";
import { TextInput, StyleSheet, Pressable, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";
import { useNavigate } from "react-router-native";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
    height: 50,
    marginBottom: 12,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
  },
  errorBorder: {
    borderColor: "#d73a4a",
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Name should be of 2 letters at least")
    .required("Username is required"),
  password: yup
    .string()
    .min(4, "Should be at least 4 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      console.log("u", username);
      console.log("p", password);

      try {
        const { data } = await signIn({
          username: username,
          password: password,
        });
        if (data) {
          console.log(data.authenticate.accessToken);
          navigate("/");
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          formik.touched.username &&
            formik.errors.username &&
            styles.errorBorder,
        ]}
        placeholder="Username"
        placeholderTextColor="lightgray"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />

      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "#d73a4a", marginTop: -10, marginBottom: 10 }}>
          {formik.errors.username}
        </Text>
      )}

      <TextInput
        style={[
          styles.input,
          formik.touched.password &&
            formik.errors.password &&
            styles.errorBorder,
        ]}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="lightgray"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />

      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "#d73a4a", marginTop: -10, marginBottom: 10 }}>
          {formik.errors.password}
        </Text>
      )}

      <Pressable onPress={formik.handleSubmit}>
        <View
          style={{
            display: "flex",
            backgroundColor: "#2dabd4ff",
            borderRadius: 4,
            height: 50,
            marginBottom: 12,
            marginLeft: 5,
            marginRight: 5,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            elevation: 3,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Sign In
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SignIn;
