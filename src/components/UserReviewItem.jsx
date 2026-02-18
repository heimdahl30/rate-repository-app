import { View, Text, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-native";
import useDeleteReview from '../hooks/useDeleteReview';
import { Alert } from 'react-native'

const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "blue",
        padding: 1,
        borderRadius: 20,
        marginRight: 10,
        padding: 2,
        height: 40,
        width: 40,
    },
    text: {
        alignSelf: "center",
        textAlign: "center",
        color: "blue",
        fontWeight: "bold",
        fontSize: 15,
    },
    reviewText: {
        color: "black",
        width: "50%",
    },
});


const UserReviewItem = ({ review, refetch }) => {
    const navigate = useNavigate()
    const [deleteReview] = useDeleteReview();

    const deletion = async () => {
        try {
            const { data } = await deleteReview({ id: `${review.id}` })
            if (data.deleteReview) {
                refetch()
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleDeleteReview = () => {
        Alert.alert(
            "Delete Review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Deletion discarded"),
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => deletion(),
                    style: "destructive"
                }
            ]
        );
    };


    return (
        <View style={theme.container}>
            <View style={theme.flexRow}>
                <View style={styles.box}>
                    <Text style={styles.text}>{review.rating}</Text>
                </View>
                <View style={[theme.flexCol, { flex: 1 }]}>
                    <Text style={{ fontWeight: 500, fontSize: 25 }}>
                        {review.repository.fullName}
                    </Text>
                    <Text style={{ color: "lightgray", fontSize: 20 }}>
                        {format(parseISO(review.createdAt), "dd.MM.yyyy")}
                    </Text>
                    <Text style={styles.reviewText}>{review.text}</Text>
                    <View style={{ display: "flex", flexDirection: "row", flex: 1, marginTop: 7, marginLeft: -30 }}>
                        <Pressable onPress={() => navigate(`/repositories/${encodeURIComponent(review.repository.id)}`)}>
                            <View
                                style={{
                                    display: "flex",
                                    backgroundColor: "rgb(44, 33, 240)",
                                    borderRadius: 4,
                                    height: 50,
                                    marginBottom: 12,
                                    marginHorizontal: 5,
                                    padding: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    elevation: 3,
                                }}
                            >
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
                                    View Repository
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={handleDeleteReview}>
                            <View
                                style={{
                                    display: "flex",
                                    backgroundColor: "rgb(236, 30, 30)",
                                    borderRadius: 4,
                                    height: 50,
                                    marginBottom: 12,
                                    marginHorizontal: 5,
                                    padding: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    elevation: 3,
                                }}
                            >
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
                                    Delete review
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default UserReviewItem;