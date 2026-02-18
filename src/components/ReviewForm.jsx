import { useFormik } from "formik";
import useCreateReview from "../hooks/useCreateReview"
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import { TextInput, StyleSheet, Pressable, View, Text } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
    minHeight: 50,
    marginBottom: 12,
    marginHorizontal: 5,
    paddingLeft: 7
  },
  errorBorder: {
    borderColor: "#d73a4a",
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(2, "Name should be of 2 letters at least")
    .required("Owner's username is required"),
  repositoryName: yup
    .string()
    .min(3, "Should be at least 3 characters")
    .required("Repository's name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .test("is-num-0-100", "Rating must be a number 0-100", (val) => {
      return val != null && parseInt(val) >= 0 && parseInt(val) < 101;
    }),
  text: yup.string(),
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const ReviewForm = () => {

  const [createReview] = useCreateReview()
  const navigate = useNavigate()


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { ownerName, repositoryName, rating, text } = values;
      try {
        const { data } = await createReview({
          ownerName,
          repositoryName,
          rating: parseInt(rating, 10),
          text
        });
        if (data) {
          console.log(data.createReview.repositoryId);
          navigate(`/repositories/${encodeURIComponent(data.createReview.repositoryId)}`);
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
          formik.touched.ownerName &&
          formik.errors.ownerName &&
          styles.errorBorder,
        ]}
        placeholder="Owner's Username"
        placeholderTextColor="lightgray"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
      />

      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ color: "#d73a4a", marginTop: -10, marginBottom: 10 }}>
          {formik.errors.ownerName}
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
        style={styles.input}
        multiline
        placeholder="Write a review.."
        placeholderTextColor="lightgray"
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
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
