import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from './components/CustomHeader'
import WABG from './assets/w_bg.png'

const MetAI = () => {
  return (
   <ImageBackground source={WABG} style={styles.container} resizeMode='cover'>
    <CustomHeader/>
   </ImageBackground>
  )
}

export default MetAI

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})