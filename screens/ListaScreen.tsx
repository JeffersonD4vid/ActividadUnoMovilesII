import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ListaScreen() {

  const API_MOVIES_ANIMATION = 'https://api.sampleapis.com/movies/animation'
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch( API_MOVIES_ANIMATION )
    .then( response => response.json() )
    .then ( datos => setdata(datos) )
    .catch ( error => console.log(error) )

    //console.log(data);
  }, [])
  
  type Movies = {
    title: string,
    posterURL: string
  }

  return (
    <View style={{backgroundColor:'#081036'}}>

      <Text 
            style={{fontSize:40, fontWeight:'bold', textAlign:'center', color:'white'}} >
            List movies
            </Text>

      <FlatList
        data={data}
        renderItem={ ( {item} : { item: Movies } ) => 

          <View style={styles.item}>

            <View>
              <Text 
                  style={styles.text}
                  >{item.title}</Text>
            </View>
              
              <Image 
                src={item.posterURL}
                style={styles.img}
              />

          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({

  item:{
    backgroundColor:'#0005',
    margin:5,
    alignItems:'center',
    padding:10,
    borderRadius:15
  },

  img:{
    height:250,
    width:250,
    resizeMode:'contain',
    
  },

  text:{
    color:'#FBFBFB',
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    padding:15,
    backgroundColor:'#707ED8',
    borderRadius:10,
    marginVertical:15
  }
})