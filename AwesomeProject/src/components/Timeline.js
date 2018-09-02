import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class Timeline extends React.Component {

    constructor(props){
      super(props);
      this.state ={ isLoading: true }
    }
  
    componentDidMount(){
  
        fetch('http://172.20.10.3:5000/tweets')
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          this.setState({
            isLoading: false,
            dataSource: [JSON.parse(response)]
          })
        })
        .catch(function(err) {
         console.log(err);
        })
    }
  
    render(){
  
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

      return(
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => 
            <View>
              <Text>{item.user.name}</Text>
              <Text>{item.text}</Text>
              <Text>{item.retweet_count}</Text>
              <Text>{item.favorite_count}</Text>
            </View>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }