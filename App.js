import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import AwesomeButton from "react-native-really-awesome-button";
import { ThemedButton } from 'react-native-really-awesome-button';
import { FontAwesome } from '@expo/vector-icons';


const App = () => {


  return (
    <View style={styles.container}>

      {/* <AwesomeButton>Press</AwesomeButton>
      <AwesomeButton type="primary">Press</AwesomeButton>
      <AwesomeButton type="secondary">Secondary</AwesomeButton>
      <AwesomeButton type="anchor">Anchor</AwesomeButton> */}
      {/* <AwesomeButton type="danger">Danger</AwesomeButton> */}


      <AwesomeButton 
          extra={
                 <LinearGradient  colors={["#4C63D2", 
                                           "#BC3081", 
                                           "#F47133", 
                                           "#FED576"]}
                                  style={{ ...StyleSheet.absoluteFillObject }}
                 />
                }>

                  <Text>Press1</Text> 
      </AwesomeButton>





      <ThemedButton name="rick" type="primary">Press2</ThemedButton>



      <ThemedButton name="bruce" type="primary">Press3</ThemedButton>



      <ThemedButton name="bruce"
                    type="primary"
                    before={<FontAwesome name="trash-o" 
                                         size={24} 
                                         color="red" />}> Press4
      </ThemedButton>



      <ThemedButton name="bruce"
                    type="primary"
                    after={<FontAwesome name="trash-o" 
                                         size={24} 
                                         color="red" />}> Press5
      </ThemedButton>





    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  buttonContainer: {
    borderWidth:2,
    width:"20%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    padding:5,
    borderRadius:10,
  }
})