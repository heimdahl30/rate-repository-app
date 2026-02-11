import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { format, parseISO } from "date-fns";

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "blue",
    padding: 1,
    borderRadius: "20px",
    marginRight: "10px",
    padding: "2px",
    height: "40px",
    width: "40px",
  },
  text: {
    alignSelf: "center",
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: "15px",
  },
  reviewText: {
    color: "black",
    width: "40%",
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={theme.container}>
      <View style={theme.flexRow}>
        <View style={styles.box}>
          <Text style={styles.text}>{review.rating}</Text>
        </View>
        <View style={theme.flexCol}>
          <Text style={{ fontWeight: "500", fontSize: "25px" }}>
            {review.user.username}
          </Text>
          <Text style={{ color: "lightgray", fontSize: "20px" }}>
            {format(parseISO(review.createdAt), "dd.MM.yyyy")}
          </Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
