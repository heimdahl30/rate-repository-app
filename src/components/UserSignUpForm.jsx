import { useFormik } from 'formik'
import { useNavigate } from "react-router-native";
import useCreateUser from "../hooks/useCreateUser"
import useSignIn from "../hooks/useSignIn"
import * as yup from "yup";
import { TextInput, StyleSheet, Pressable, View, Text } from "react-native";

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
        .min(5, "Name should be of 5 characters at least")
        .max(30, "Maximum 30 characters allowed")
        .required("Username is required"),
    password: yup
        .string()
        .min(5, "Should be at least 5 characters")
        .max(50, "Maximum 50 characters allowed")
        .required("Password is required"),
    passwordConfirmation: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
});

const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: ""
};

const UserSignUpForm = () => {

    const [signUp] = useCreateUser()
    const [signIn] = useSignIn()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            const { username, password } = values;
            try {
                const { data } = await signUp({
                    username,
                    password
                });
                if (data) {
                    console.log("user created", data.createUser.id);
                    try {
                        const { data } = await signIn({
                            username,
                            password
                        });
                        if (data) {
                            console.log("access token inside sign up", data.authenticate.accessToken);
                            navigate("/");
                        }
                    } catch (e) {
                        console.log(e);
                    }

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
                placeholder="password"
                placeholderTextColor="lightgray"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
            />

            {formik.touched.password && formik.errors.password && (
                <Text style={{ color: "#d73a4a", marginTop: -10, marginBottom: 10 }}>
                    {formik.errors.password}
                </Text>
            )}

            <TextInput
                style={[
                    styles.input,
                    formik.touched.passwordConfirmation &&
                    formik.errors.passwordConfirmation &&
                    styles.errorBorder,
                ]}
                placeholder="confirm password"
                placeholderTextColor="lightgray"
                value={formik.values.passwordConfirmation}
                onChangeText={formik.handleChange("passwordConfirmation")}
            />

            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
                <Text style={{ color: "#d73a4a", marginTop: -10, marginBottom: 10 }}>
                    {formik.errors.passwordConfirmation}
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
                        Sign up
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default UserSignUpForm;
