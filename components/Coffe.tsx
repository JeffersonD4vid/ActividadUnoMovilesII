import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Coffe( props : any ) {

  return (
    <View style={styles.container}>

      <View style={styles.ingredientsContainer}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Ingredientes</Text>
        <Text></Text>
        <Text style={styles.ingredients}>{props.data.ingredients }</Text>
      </View>

      
      <View style={styles.imageContainer}>
        <Text style={styles.title}>{props.data.title}</Text>
        <Image
          style={styles.image}
          source={{ uri: props.data.image }} 
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flexDirection:'row-reverse',
    backgroundColor:'#0004',
    padding:20
    
  },
  

  ingredientsContainer: {
    flex: 1,
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent:'center',

  },
  
  ingredients: {
    color: '#000',
    fontSize: 16,
    
  },
  
  imageContainer: {
    position:'relative',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    position: 'absolute',
    color: 'white',
    fontSize: 15,
    fontWeight:'bold',
    zIndex: 100,

  },

  image: {
    width: 100,
    height: 100,
    borderRadius:10,
    opacity:0.8
  },

})