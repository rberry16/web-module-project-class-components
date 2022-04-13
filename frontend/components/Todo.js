import React from 'react'

const Todo = (props) => {
  return (
    <div onClick={() => props.toggleItem(props.item.id)}>
      <p>{props.item.name} {props.item.completed}</p>
    </div>
    
  )
}
console.log(Todo)
export default Todo;