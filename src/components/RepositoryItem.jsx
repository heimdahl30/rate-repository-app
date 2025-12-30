import { View, Text, Image } from "react-native";
import theme from "../theme";

const RepositoryItem = (prop) => {
  return (
    <View style={theme.container}>
      <View style={theme.flexCol}>
        <View style={theme.flexRow}>
          <Image
            style={theme.imgSize}
            source={{ uri: prop.item.ownerAvatarUrl }}  
          />
          <View style={theme.flexCol}>
            <Text style={{ marginBottom: 5, fontWeight: "bold", fontSize: 20 }}>
              {prop.item.fullName}
            </Text>
            <Text style={{ fontSize: 15, color: "gray", fontWeight: "medium" }}>
              {prop.item.description}
            </Text>
            <View style={theme.box}>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                }}
              >
                {prop.item.language}
              </Text>
            </View>
          </View>
        </View>
        <View style={theme.ratingsBox}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {Number((prop.item.stargazersCount / 1000).toFixed(1))}k
            </Text>
            <Text style={{ color: "gray" }}>Stars</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {Number((prop.item.forksCount / 1000).toFixed(1))}k
            </Text>
            <Text style={{ color: "gray" }}>Forks</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {prop.item.reviewCount}
            </Text>
            <Text style={{ color: "gray" }}>Reviews</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {prop.item.ratingAverage}
            </Text>
            <Text style={{ color: "gray" }}>Ratings</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 10,
          marginTop: 20,
          marginBotton: 20,
          backgroundColor: "lightgray",
          width: 365,
        }}
      ></View>
    </View>
  );
};

export default RepositoryItem;
