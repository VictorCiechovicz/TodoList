import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native'

import Item from './Componentes/Task/index'
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const recebeAddtask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  }
  const completaTask = index => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.tasksWrapper}>
        <Text style={estilos.title}>Today's tasks!</Text>

        <View style={estilos.addTasksWrapper}>
          <View style={estilos.containerAddTasksWrapper}>
            <TextInput
              style={estilos.boxTask}
              placeholder={'Write a task'}
              value={task}
              onChangeText={text => setTask(text)}
            />

            <TouchableOpacity onPress={() => recebeAddtask()}>
              <View style={estilos.buttonAddTask}>
                <Text style={estilos.titleButtonAddTask}>
                  <Ionicons
                    name="add-circle-outline"
                    size={50}
                    color="purple"
                  />
                </Text>
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
    backgroundColor: 'rgba(232, 234, 237, 1)'
  },
  tasksWrapper: {
    marginTop: 94,
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },

  addTasksWrapper: {
    marginTop: 5,
    marginLeft: 5
  },
  containerAddTasksWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  boxTask: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 270,
    height: 45,
    borderRadius: 60,
    borderColor: 'purple',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginRight: 30,
    marginBottom: 15,
    color: '#c0c0c0'
  },

  buttonAddTask: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleButtonAddTask: {
    fontSize: 50,
    color: 'rgba(192, 192, 192, 1)'
  }
})
