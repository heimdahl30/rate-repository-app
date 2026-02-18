import UserReviewItem from "./UserReviewItem";
import { GET_USER } from './graphQL/queries'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from "react-native";
import { useQuery } from "@apollo/client/react";

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: "black",
        marginTop: 20,
        marginBottom: 20,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsList = () => {

    const { data, loading, refetch } = useQuery(GET_USER, {
        variables: { includeReviews: true },
        fetchPolicy: 'cache-and-network',
    });

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const reviews = data.me.reviews
        ? data.me.reviews.edges.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <UserReviewItem review={item} refetch={refetch} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={<ItemSeparator />}
        />
    )
}

export default UserReviewsList