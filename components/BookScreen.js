import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  // ListItem,
  // Button,
  Text
} from "react-native";
import { ListItem, Button } from "react-native-elements";
//ListItems are used to display rows of information, such as a contact list, playlist,
//or menu.They are very customizeable and can contain switches, avatars, badges, icons, and more.
import gql from "graphql-tag";
import { Query } from "react-apollo";
const GET_BOOKS = gql`
  {
    books {
      _id
      title
      author
    }
  }
`; // gql tags for querries, should be grouped later
class BookScreen extends React.Component {
  //--- option1
  // static NavigationOptions = {
  //   title: "Books List"
  // };
  //--- second course
  static nagivationOptions = ({ navigation }) => {
    return {
      title: "LIST OF BOOKS",
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: "transparent" }}
          icon={{ name: "add-circle", style: { marginRight: 0, fontSize: 28 } }}
          onPress={() => {
            navigation.push("AddBok");
          }}
        />
      )
    };
  };
  // todo: check above for what it does

  //function under isto ListItems are used to display rows of information, such
  // as a contact list, playlist, or menu.They are very customizeable and can
  //contain switches, avatars, badges, icons, and more.

  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      onPress={() => {
        this.props.navigation.navigate("BookDetails", {
          id: `${item._id}`
        });
      }}
    />
  );
  render() {
    return (
      <Query pollInterval={500} query={GET_BOOKS}>
        {/* apollo pollInterval allows  near-real-time synchronization with your server by causing a query to execute periodically at a specified interval*/}
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={styles.activity}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            );
          if (error)
            return (
              <View style={styles.activity}>
                <Text>`Error! ${error.message}`</Text>
              </View>
            );
          return (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={data.books}
              renderItem={this.renderItem}
            />
          );
        }}
      </Query>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  activity: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default BookScreen;
