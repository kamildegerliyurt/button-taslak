import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'


import { LinearGradient } from 'expo-linear-gradient';

import AwesomeButton from "react-native-really-awesome-button";
import { ThemedButton } from 'react-native-really-awesome-button';
import { FontAwesome } from '@expo/vector-icons';


const App = () => {


  return (
    <SafeAreaView style={styles.container}>


      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{alignItems:"center", justifyContent:"center"}}>

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
      </View>




        <View style={{marginVertical:20,}}>
          <ThemedButton name="rick" type="primary">Press2</ThemedButton>
          <ThemedButton name="rick" type="secondary">Press2</ThemedButton>
          <ThemedButton name="rick" type="anchor">Press2</ThemedButton>
          <ThemedButton name="rick" type="danger">Press2</ThemedButton>
          <ThemedButton name="rick" type="disabled">Press2</ThemedButton>
        </View>

        <View style={{marginVertical:20,}}>
          <ThemedButton name="bruce" type="primary">Press3</ThemedButton>
          <ThemedButton name="bruce" type="secondary">Press3</ThemedButton>
          <ThemedButton name="bruce" type="anchor">Press3</ThemedButton>
          <ThemedButton name="bruce" type="danger">Press3</ThemedButton>
          <ThemedButton name="bruce" type="disabled">Press3</ThemedButton>
          <ThemedButton name="bruce" type="primary" before={<FontAwesome name="trash-o" 
                                                                        size={24} 
                                                                        color="red" />}> Press3
          </ThemedButton>



          <ThemedButton name="bruce" type="primary" after={<FontAwesome name="trash-o" 
                                                                        size={24} 
                                                                        color="red" />}> Press3
          </ThemedButton>
        </View>
      



      </ScrollView>




    </SafeAreaView>
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
  },
})
