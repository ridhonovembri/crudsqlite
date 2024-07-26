import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SQLiteProvider } from "expo-sqlite";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

const loadDatabase = async () => {
  const dbName = "mySQLiteDB.db";
  const dbAsset = require("../assets/mySQLiteDB.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);

  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};

const TodoScreen = () => {
  const [dbLoaded, setDbLoaded] = useState(false);

  useEffect(() => {
    loadDatabase()
      .then(() => setDbLoaded(true))
      .catch((e) => console.log(e));
  }, []);

  if (!dbLoaded)
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading Database...</Text>
      </View>
    );

  return (
    <SQLiteProvider databaseName="mySQLiteDB.db">
      <TodoList />
    </SQLiteProvider>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
