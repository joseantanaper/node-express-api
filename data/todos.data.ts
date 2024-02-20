import { Todo } from '../types/Todo'
const data: Todo[] = [
  {
    id: '1',
    todo: 'Todo 1',
    creationDate: new Date(),
  },
  {
    id: '2',
    todo: 'Todo 2',
    creationDate: new Date(),
  },
]

const todoEntries: Todo[] = data.map((obj) => {
  const object = obj as Todo
  object.id = obj.id
  return object
})

export default todoEntries
