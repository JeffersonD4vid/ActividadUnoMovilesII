import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Coffe from '../components/Coffe'

export default function PersonajesScreen() {

  const API_COFFE = 'https://api.sampleapis.com/coffee/iced'

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch ( API_COFFE )
    .then ( response => response.json ())
    .then ( datos =>  setdata(datos))
    .catch ( error => console.log(error))

    //console.log(data)
  }, [])
  
  type Coffe= {
    title: string,
    imagen: string,
    ingredients: string,
    description: string
  }

  function descriptionCoffe (coffe: Coffe) {
    Alert.alert('DESCRIPCION', `'Descripcion ${coffe.description}` )
  }

  return (
    <View >
      <Text style={{color:'#000', fontSize:40, fontWeight:'800', textAlign:'center', backgroundColor:'#0008'}}>Coffe</Text>

      <FlatList
        data={data}
        renderItem={ ( { item } ) => 
          <Coffe data = {item}/>

        }
      />
    </View>
  )

}

const styles = StyleSheet.create({

})