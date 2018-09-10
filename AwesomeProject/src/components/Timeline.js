import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import Tweet from './Tweet';

export default class Timeline extends React.Component {

    constructor(props){
      super(props);
      this.state ={ isLoading: true, error: null }
    }
  
    //TODO Refactoring + handle errors
    componentDidMount(){

        fetch(process.env.SERVER_URL + 'tweets')
        .then((response) => {
          console.log(response)
          if(response.status == 200){
            return response.json()
          } else {
            throw 'Une erreur est survenue';
          }
        })
        .then((response) => {
          this.setState({
            dataSource: [JSON.parse(response)]
          })
        })
        .catch((err) => {
         this.setState({error : <Text>{err}</Text>})
        })
        .finally(() => {
          this.setState({ isLoading: false });
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
        <View style={{flex: 1}}>
        {this.state.error}
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) =>
            <Tweet user={item.user.name}/>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }