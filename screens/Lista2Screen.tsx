import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Lista2Screen() {

    const API_PRODUCTS='https://fakestoreapi.com/products'

    const [data, setdata] = useState([])

    useEffect(() => {
        fetch(API_PRODUCTS)
        .then( response => response.json())
        .then( datos => setdata(datos))
        
       // console.log(data)
    }, [])
    
    type Products = {
        title: string,
        image: string,
        price: number,
        description: string
    }

    function informacion( products :Products){
        
        //Alert.alert('DETALLER', 'Descripcion: '+ products.description)
        Alert.alert('DETALLER', `'Descripcion ${products.description}` )
    }
    

  return (
    <View style={styles.container}>

      <Text style={{fontSize:40, fontWeight:'bold' }}>List clothes</Text>

      <FlatList 
        data = {data}
        horizontal ={true}
        renderItem = { ( { item } : { item:Products}) => 

            <TouchableOpacity style={styles.item} onPress={() => informacion(item)}>

              <View 
                  style={{flexDirection:'column', 
                  alignItems:'center',  
                  padding:10}}
                  
                  >
                <Text
                    style={{color:'#000', fontSize:16}}
                    >{item.title}</Text>

                <Text
                    style={{color:'#000', fontSize:16}}
                    > $ {item.price}</Text>

              </View>
          
              <Image 
                        style={styles.img}
                        source={{uri:item.image}}
              />
                
            </TouchableOpacity>

        }

       
      />


    </View>

 )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },

    item:{
        margin:20,
        flexDirection:'row-reverse',
        justifyContent:'center',
        alignItems:'center',    
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        
    },

    img:{
        height:100,
        width:100,
        resizeMode:'contain',
        margin:10,

    }
  });