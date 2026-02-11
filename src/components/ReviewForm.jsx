import { useFormik } from "formik";
import * as yup from "yup";
import { TextInput, StyleSheet, Pressable, View } from "react-native";

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
  ownerUsername: yup
    .string()
    .min(2, "Name should be of 2 letters at least")
    .required("Owner's username is required"),
  repositoryName: yup
    .string()
    .min(4, "Should be at least 4 characters")
    .required("Repository's name is required"),
  rating: yup
    .string()
    .required("Rating is required")
    .test("is-num-0-100", "Rating must be a number 0-100", (val) => {
      return val != null && parseInt(val) >= 0 && parseInt(val) < 101;
    }),
  review: yup.string(),
});

const initialValues = {
  ownerUsername: "",
  repositoryName: "",
  rating: "",
  review: "",
};

const ReviewForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          formik.touched.ownerUsername &&
            formik.errors.ownerUsername &&
            styles.errorBorder,
        ]}
        placeholder="Owner's Username"
        placeholderTextColor="lightgray"
        value={formik.values.ownerUsername}
        onChangeText={formik.handleChange("ownerUsername")}
      />

      {formik.touched.ownerUsername && formik.errors.ownerUsername && (
        <Text style={{ color: "#d73a4a", marginTop: -10, marginBottom: 10 }}>
          {formik.errors.ownerUsername}
        </Text>
      )}

      <TextInput
        style={[
          styles.input,
          formik.touched.repositoryName &&
            formik.errors.repositoryName &&
            styles.errorBorder,
        ]}
        placeholder="Repository's Name"
        placeholderTextColor="lightgray"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
      />

      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: "#d73a4a", marginTop: -10, marginBottom: 10 }}>
          {formik.errors.repositoryName}
        </Text>
      )}

      <TextInput
        style={[
          styles.input,
          formik.touched.rating && formik.errors.rating && styles.errorBorder,
        ]}
        placeholder="Rating between 0 and 100"
        placeholderTextColor="lightgray"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
      />

      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: "#d73a4a", marginTop: -10, marginBottom: 10 }}>
          {formik.errors.rating}
        </Text>
      )}

      <TextInput
        style={[styles.input]}
        multiline
        placeholder="Write a review.."
        placeholderTextColor="lightgray"
        value={formik.values.review}
        onChangeText={formik.handleChange("review")}
      />

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
            Create a review
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
