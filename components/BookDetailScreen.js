import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BookDetailScreen extends Component {
  static navigationOptions = {
    title: 'Book Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Book Details</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('BookDetails')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Book')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default BookDetailScreen;