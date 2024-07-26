import { StyleSheet, Text, View, FlatList, ScroolView } from "react-native";
import React from "react";

const Sandbox = () => {
  const dt = [
    { id: 1, name: "rendang" },
    { id: 2, name: "Sayur Asem" },
    { id: 3, name: "Sayur Asem" },
    { id: 4, name: "Sayur Asem" },
    { id: 5, name: "Sayur Asem" },
    { id: 6, name: "Sayur Asem" },
    { id: 7, name: "Sayur Asem" },
    { id: 8, name: "Sayur Asem" },
    { id: 9, name: "Sayur Asem" },
    { id: 10, name: "Sayur Asem" },
    { id: 11, name: "Sayur Asem" },
    { id: 12, name: "Sayur Asem" },
    { id: 13, name: "Sayur Asem" },
    { id: 14, name: "Sayur Asem" },
    { id: 15, name: "Sayur Asem" },
    { id: 16, name: "Sayur Asem" },
    { id: 17, name: "Sayur Asem" },
    { id: 18, name: "Sayur Asem" },
    { id: 19, name: "Sayur Asem" },
    { id: 20, name: "Sayur Asem" },
    { id: 21, name: "Sayur Asem" },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text>Sandbox</Text>
      {/* <View style={{flex: 0, backgroundColor: 'yellow'}}>
        <Text>xxx</Text>
      </View>
      <View style={{backgroundColor: 'red'}}>
        <Text>yyy</Text>
      </View>
      <View style={{backgroundColor: 'red'}}>
        <Text>yyy</Text>
      </View> */}
      {/* <FlatList
        data={dt}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        /> */}
      {/* <ScroolView>
        {dt.map((item) => {
          return (
            <View key={item.id}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScroolView> */}
    </View>
  );
};

export default Sandbox;

const styles = StyleSheet.create({});
