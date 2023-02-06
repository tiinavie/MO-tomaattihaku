import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function RecipeFetch() {
  const [repositories, setRepositories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRepos = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.meals);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const listSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "pink" }} />;
  };

  return (
    <View>
      <ActivityIndicator size="small" animating={loading} color="pink" />
      <Text
        style={{
          width: 200,
          color: "lightblue",
          marginBottom: 5,
          fontSize: 18,
        }}
      >
        Search for recipes!
      </Text>
      <TextInput
        style={{
          width: 200,
          borderWidth: 1,
          borderColor: "pink",
          marginBottom: 10,
          paddingHorizontal: 3,
        }}
        value={keyword}
        placeholder="search by ingredient"
        placeholderTextColor="lightgrey"
        onChangeText={(text) => setKeyword(text)}
      />
      <Button title="SEARCH" onPress={fetchRepos} />
      <FlatList
        data={repositories}
        ItemSeparatorComponent={listSeparator}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width: 60, height: 60, marginVertical: 3 }}
              source={{ uri: `${item.strMealThumb}` }}
            />
            <Text>{item.strMeal}</Text>
          </View>
        )}
      />
    </View>
  );
}
