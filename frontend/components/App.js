import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      todos: todos
    }
  }

  addItem = (e, item) => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  clear = (e) => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  toggleItem = (itemId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  render() {
    

    return (
      <div>
        <Form addItem={this.addItem} />
        <TodoList 
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
        <button onClick={this.clear}>Clear</button>
      </div>
    )
  }
}
