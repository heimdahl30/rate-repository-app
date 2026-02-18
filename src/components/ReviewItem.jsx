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
    width: "100%"
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={theme.container}>
      <View style={theme.flexRow}>
        <View style={styles.box}>
          <Text style={styles.text}>{review.rating}</Text>
        </View>
        <View style={[theme.flexCol, { flex: 1 }]}>
          <Text style={{ fontWeight: 500, fontSize: 25 }}>
            {review.user.username}
          </Text>
          <Text style={{ color: "lightgray", fontSize: 20 }}>
            {format(parseISO(review.createdAt), "dd.MM.yyyy")}
          </Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
