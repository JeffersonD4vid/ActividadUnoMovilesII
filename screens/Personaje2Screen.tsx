import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'

export default function Personaje2Screen() {


  const API_PRODUCTOS = 'https://jritsqmet.github.io/web-api/'

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch ( API_PRODUCTOS)
    .then ( response => response.json())
    .then ( datos => setdata(datos))
    .catch ( error => console.log(error))
  }, [])
  
  type Productos = {
    strCategory : string,
    strCategoryThumb: string,
    strCategoryDescription: string
  }


  return (
    <View>
      <Text style={{color:'#000', fontSize:40, fontWeight:'800', textAlign:'center', backgroundColor:'#0008'}}>Menu</Text>
    
      <FlatList 
        data={data}
        renderItem={ ( { item } ) => 
          <Menu data ={item}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})