import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SQLiteProvider } from 'expo-sqlite'
import { Asset } from 'expo-asset'
import * as FileSystem from 'expo-file-system'

const SandboxScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <Text>SandboxScreen</Text>
      <View style={{flex: 1, backgroundColor: 'coral'}}>


      </View>
    </View>
  )
}

export default SandboxScreen

const styles = StyleSheet.create({})