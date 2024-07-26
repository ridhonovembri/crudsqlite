import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Button,
  Alert,
} from "react-native";
import React from "react";
import { useSQLiteContext } from "expo-sqlite";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");
  const [id, setId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const db = useSQLiteContext();

  getData = async () => {
    const result = await db.getAllAsync("SELECT * FROM todo");
    //   console.log("result", result);
    setTodos(result);
  };

  useEffect(() => {
    db.withTransactionAsync(async () => {
      getData();
    });
  }, []);

  handleAdd = async () => {
    // setIsEdit(false);
    // console.log("isEdit", isEdit);
    setModalVisible(true);
  };

  handleEdit = async (item) => {
    setIsEdit(true);
    // console.log("isEdit", isEdit);
    setUpdateTodo(item.todo);
    setId(item.id);
    setModalVisible(true);
  };

  handleAddModal = async () => {
    // console.log("add in modal");

    if (!isEdit) {
      // console.log("newTodo", newTodo);
      db.withTransactionAsync(async () => {
        await db.runAsync(`INSERT INTO todo (todo) VALUES(?)`, newTodo);
        await getData();
      });
    } else {
      // console.log("updateTodo", updateTodo);
      // console.log('id', id)
      db.withTransactionAsync(async () => {
        await db.runAsync(`UPDATE todo SET todo=? WHERE id=?`, updateTodo, id);
        await getData();
      });
    }
    setNewTodo("");
    setUpdateTodo("");
    setIsEdit(false);
    setModalVisible(!modalVisible);
  };

  handleDelete = async (item) => {
    // console.log("delete", item.id);

    db.withTransactionAsync(async () => {
      await db.runAsync(`DELETE FROM todo WHERE id=?`, item.id);
      await getData();
    });
  };

  handleCloseModal = () => {
    setNewTodo("");
    setUpdateTodo("");
    setModalVisible(!modalVisible);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              // width: "80%",
              // height: '50%',
              // marginVertical: 20,
              // marginHorizontal: 40,
              // marginVertical: 50,
              // backgroundColor: "white",
              // borderRadius: 20,
              // padding: 35,
              // alignItems: "center",
              // elevation: 5,
              // backgroundColor: "white",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "pink",
                width: "80%",
                height: "15%",
                padding: 10,
                elevation: 5,
                borderRadius: 20,
              }}
            >
              <TextInput
                placeholder="Entry Todo"
                style={{
                  borderWidth: 1,
                  width: "100%",
                  borderRadius: 5,
                  height: 40,
                  paddingLeft: 5,
                }}
                onChangeText={(text) =>
                  !isEdit ? setNewTodo(text) : setUpdateTodo(text)
                }
                value={!isEdit ? newTodo : updateTodo}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  justifyContent: "space-around",
                }}
              >
                <Button title="Add" onPress={() => handleAddModal()} />
                <Button title="Cancel" onPress={() => handleCloseModal()} />
              </View>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              flex: 1,
              textAlign: "left",
              marginLeft: 5,
              fontSize: 24,
              fontWeight: "500",
            }}
          >
            Todo List
          </Text>
          <Pressable onPress={() => handleAdd()}>
            <Text style={{ fontSize: 18, marginRight: 5, color: "blue" }}>
              Add New
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "black",
                marginHorizontal: 5,
                backgroundColor: "coral",
                height: 36,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 3,
                paddingHorizontal: 5,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text>{item.id}-</Text>
                <Text>{item.todo}</Text>
              </View>
              <Pressable onPress={() => handleEdit(item)}>
                <FontAwesome
                  name="edit"
                  size={24}
                  color="white"
                  style={{ marginHorizontal: 5 }}
                />
              </Pressable>
              <Pressable onPress={() => handleDelete(item)}>
                <FontAwesome name="trash-o" size={24} color="white" />
              </Pressable>
            </View>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
