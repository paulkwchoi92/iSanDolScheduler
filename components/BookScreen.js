import React from "react";
import { Button, View, Text } from "react-native";

class BookScreen extends React.Component {
  static NavigationOptions = {
    title: "Books List"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Books List</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("BookDetails")}
        />

        <Button
          title="Go To Add Book"
          onPress={() => this.props.navigation.navigate("AddBook")}
        />
        <Button
          title="Go to Edit Book"
          onPress={() => this.props.navigation.navigate("EditBook")}
        />
      </View>
    );
  }
}

export default BookScreen