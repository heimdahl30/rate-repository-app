import { Searchbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const MySearchbar = ({ searchQuery, setSearchQuery }) => {

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                placeholderTextColor="lightgray"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchbar}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    searchbar: {
        backgroundColor: 'white',
        width: 300
    },
});

export default MySearchbar;
