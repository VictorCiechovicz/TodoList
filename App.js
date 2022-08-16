import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ImageBackground
} from 'react-native'

import Item from './Componentes/Task/index'
import topo from './assets/Topo.jpg'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function App() {
  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState([])

  const recebeAddtask = () => {
    if (task !== '') {
      setTaskItems([...taskItems, task])
    }
  }
  const completaTask = index => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.tasksWrapper}>
        <ImageBackground source={topo} style={estilos.imagemTopo}>
          <MaterialCommunityIcons
            name="robot-happy-outline"
            size={50}
            color="white"
            style={{ marginTop: 20 }}
          />
          <Text style={estilos.title}>Today's tasks!</Text>
        </ImageBackground>

        <View style={estilos.addTasksWrapper}>
          <View style={estilos.containerAddTasksWrapper}>
            <TextInput
              style={estilos.boxTask}
              placeholder={'Write a task'}
              value={task}
              onChangeText={text => setTask(text)}
            />

            <TouchableOpacity onPress={() => recebeAddtask()}>
              <View>
                <Ionicons name="add-circle-outline" size={50} color="#F806CC" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={estilos.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completaTask(index)} key={index}>
                <Item text={item} />
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E0249'
  },
  imagemTopo: {
    width: '100%',
    height: 150,
    alignItems: 'center'
  },
  tasksWrapper: {
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff'
  },

  addTasksWrapper: {
    marginTop: 20,
    marginLeft: 30
  },
  containerAddTasksWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  boxTask: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 230,
    height: 45,
    borderRadius: 60,
    borderColor: '#F806CC',
    borderWidth: 3,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginRight: 30,
    marginBottom: 30,
    color: '#c0c0c0'
  },

  buttonAddTask: {},
  titleButtonAddTask: {
    fontSize: 50,
    color: 'rgba(192, 192, 192, 1)'
  },
  items: {
    marginHorizontal: 14
  }
})
