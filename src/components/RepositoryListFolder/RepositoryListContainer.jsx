import { FlatList, View, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import RepositoryItem from "../RepositoryItemFolder/RepositoryItem";
import { useState } from 'react'
import useRepositoriesByRatings from "../../hooks/useRepositoriesByRatings";
import { Picker } from '@react-native-picker/picker';
import MySearchbar from "../MySearchbar";
import { useDebounce } from "use-debounce"

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = ({ setSelectedValue, selectedValue, searchQuery, setSearchQuery }) => (
  <View style={styles.header}>
    <View style={{ marginBottom: 7 }}>
      <MySearchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginRight: 5, fontSize: 15 }}>Order By:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 250, fontSize: 18 }}
        onValueChange={(itemValue) =>
          setSelectedValue(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="CREATED_AT" />
        <Picker.Item label="Highest rated repositories" value="DESC" />
        <Picker.Item label="Lowest rated repositories" value="ASC" />
      </Picker>
    </View>
  </View>
);

export const RepositoryListContainer = () => {

  const [selectedValue, setSelectedValue] = useState('CREATED_AT');
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedSearch] = useDebounce(searchQuery, 1000)

  console.log("ds", debouncedSearch)

  const orderBy = selectedValue === 'CREATED_AT' ? 'CREATED_AT' : 'RATING_AVERAGE';
  const orderDirection = selectedValue === 'DESC' ? 'DESC' : (selectedValue === 'ASC' ? 'ASC' : undefined);

  const searchKeyword = debouncedSearch || undefined;

  const { repositories, loading } = useRepositoriesByRatings({ orderBy, orderDirection, searchKeyword })

  if (loading) return <Text>Loading...</Text>;

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <Link
      to={`/repositories/${encodeURIComponent(item.id)}`}
      underlayColor="lightgray"
    >
      <View>
        <RepositoryItem item={item} />
      </View>
    </Link>
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={<ItemSeparator />}
      renderItem={renderItem}
      keyExtractor={(item) => item.fullName}
      ListHeaderComponent={<ListHeader selectedValue={selectedValue} setSelectedValue={setSelectedValue} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      removeClippedSubviews={false}
    />
  );
};
