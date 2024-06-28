import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function WelcomeScreems() {

const API_PELICULAS = 'https://jritsqmet.github.io/web-api/peliculas.json'

const [data, setdata] = useState([])

useEffect(() => {
    fetch( API_PELICULAS )
    .then( reponse => reponse.json() )
    .then( datos => setdata(datos) )
    .catch ( error => console.log(error))
}, [])


type Peliculas = {
    titulo: string,
    anio: number,
    imagen: string
}


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
        
        renderItem={({ item }: {item: Peliculas} ) =>
          
          <View style={styles.container}>

            <View style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',
                padding:10,
                flex:1, borderRadius:10
            }}>
                
                    <Text style={styles.text}>{item.titulo}</Text>
                    <Text style={styles.text}>{item.anio}</Text>
                
            </View>

            <Image style={{width:100, height:100, margin:10, borderRadius:10}}
                src={item.imagen}
            />


          </View>

          
          
        }
      />

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'green',
    padding:20,
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'space-between'
  },

  text:{
    fontSize:25,
    fontWeight:'800',
    color:'#000',
    

  }

})