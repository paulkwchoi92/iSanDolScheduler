import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class EditBookScreen extends Component {
  static navigationOptions = {
    title: 'Edit Book',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Book</Text>
        <Button
          title="Go to Edit Book... again"
          onPress={() => this.props.navigation.push('EditBook')}
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

export default EditBookScreen;