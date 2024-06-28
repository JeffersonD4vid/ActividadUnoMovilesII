import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Menu(props : any) {

    return(
    <View style={styles.container}>

      <View style={styles.descripContainer}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Descripcion</Text>
        <Text></Text>
        <Text style={styles.descripcion}>{props.data.strCategoryDescription }</Text>
      </View>

      
      <View style={styles.imageContainer}>
        <Text style={styles.title}>{props.data.strCategory}</Text>
        <Image
          style={styles.image}
          source={{ uri: props.data.strCategoryThumb }} 
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
  

 descripContainer: {
    flex: 1,
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent:'center',

  },
  
  descripcion: {
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