import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreems() {

  const data = [
    { id: '1', title: 'Base de datos' },
    { id: '2', title: 'Aplicaciones moviles' },
    { id: '3', title: 'Programacion' },
    { id: '3', title: 'Redes' },

  ];

  return (
    <View style={{backgroundColor:'skyblue',  }}>

      <Text 
                style={{
                  color:'#000', 
                  fontSize:40, 
                  fontWeight:'800', 
                  textAlign:'center', }}>JeffersonD4vid</Text>
      
      <Text 
        style={{
          fontSize:15, 
          textAlign:'center', 
          padding:10 }} 
        >
        Bienvenidos a esta pequeña app movil sencilla, con esfuerzo y dedicacion lograremos crear una mucho mejor. Nunca se rindan
      </Text>
      
      <Text style={{
                  color:'#000', 
                  fontSize:30, 
                  fontWeight:'800', 
                  textAlign:'center', 
                  backgroundColor:'orange', 
                  padding:10}}>Materia de la asiganatura</Text>

      

      <FlatList 
        data={data}
        horizontal={true}
        renderItem={({item}) =>
          
          <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
          
        }
      />

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'green',
    
  },

  text:{
    fontSize:20,
    fontWeight:'800',
    color:'#000',
    padding:10,
    margin:20,
    backgroundColor:'cyan',
    borderRadius:10
  }

})