/*action creators*/

export const ADD_TODO = 'ADD_TODO'
export const MOVE_TO_TODO = 'MOVE_TO_TODO'
export const MOVE_TO_IN_PROGRESS = 'MOVE_IN_PROGRESS'
export const MOVE_TO_DONE = 'MOVE_TO_DONE'

export const addTodo = (text, type) => {
  return {
    type,
    id: Date.now(),
    text
  }
}


export const moveItem = (type, id) => {
  return {
    type,
    id
  }
}
