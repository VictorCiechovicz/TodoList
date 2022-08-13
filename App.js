import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native'

import Item from './Componentes/Task/index'

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
    <View style={estilos.container}>
      <View style={estilos.tasksWrapper}>
        <Text style={estilos.title}>Today's tasks!</Text>

        <View style={estilos.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completaTask(index)} key={index}>
                <Item text={item} />
              </TouchableOpacity>
            )
          })}
        </View>

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
                <Text style={estilos.titleButtonAddTask}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
    marginBottom: 30
  },

  addTasksWrapper: {
    position: 'absolute',
    marginTop: 600,
    marginLeft: 20
  },
  containerAddTasksWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxTask: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 246,
    height: 45,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginRight: 20,
    color: '#c0c0c0'
  },

  buttonAddTask: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  titleButtonAddTask: {
    fontSize: 50,
    color: 'rgba(192, 192, 192, 1)'
  }
})
