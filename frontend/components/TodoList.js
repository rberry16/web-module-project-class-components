import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  return (
    <div>
      {props.todos.map(item => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
    </div>
  )
}

export default TodoList;