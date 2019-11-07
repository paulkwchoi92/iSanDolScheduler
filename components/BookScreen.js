import React from "react";
import { 
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Text
} from 'react-native'
import { ListItem, Button } from react - native - elements 
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const GET_BOOKS = gql`
 {
  books {
   _id
   title
   author
  }
 }
` // gql tags for querries, should be grouped later
class BookScreen extends React.Component {
  //--- option1
  // static NavigationOptions = {
  //   title: "Books List"
  // };
   //--- second course
  static nagivationOptions = ({ navigation }) => {
    return {
      title: 'LIST OF BOOKS',
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
          onPress={() => { navigation.push('AddBok') }}
          />
      )
    }
  }
 // todo: check above for what it does
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