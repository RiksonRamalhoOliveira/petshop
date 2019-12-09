import React, { Component } from 'react';
import { View,Text,FlatList,TouchableOpacity} from  'react-native';
import api from '../services/api';

export default class Main extends Component{
    static navigationOptions = {
        title: "PetShop"
    };

    state = {
        docs : [],
    };



    componentDidMount(){
       this.loadPet();  
    };

    loadPet = async () =>{
        const response = await api.get('/pets');

        const { docs } = response.data;

        this.setState({docs}); 
    };


    renderItem = ({item}) => (
       <View>
            <Text>{item.name}</Text> 
            <Text>{item.raca}</Text>
            <TouchableOpacity onPress={() =>{}}>
                <Text>Acessar</Text>
            </TouchableOpacity>
       </View> 
    )
    render(){
        return(
            <View>
                <FlatList 
                data={this.state.docs}
                keyExtractor={item =>item._id}
                renderItem = {this.renderItem}
                />
            </View>
        )
    }
} 