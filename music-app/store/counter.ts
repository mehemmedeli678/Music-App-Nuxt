import {defineStore} from 'pinia'


export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 10,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  getters:{
    _counter(state){
     return state.counter
    }
  }
})
// export default defineStore({
//     state: () => ({
//         /** @type {{ text: string, id: number, isFinished: boolean }[]} */
//         todos: [],
//         /** @type {'all' | 'finished' | 'unfinished'} */
//         filter: 'all',
//         // type will be automatically inferred to number
//         nextId: 0,
//       }),
//       getters: {
//         finishedTodos(state) {
//           // autocompletion! ✨
//           return state.todos.filter((todo) => todo.isFinished)
//         },
//         unfinishedTodos(state) {
//           return state.todos.filter((todo) => !todo.isFinished)
//         },
//         /**
//          * @returns {{ text: string, id: number, isFinished: boolean }[]}
//          */
//         filteredTodos(state) {
//           if (this.filter === 'finished') {
//             // call other getters with autocompletion ✨
//             return this.finishedTodos
//           } else if (this.filter === 'unfinished') {
//             return this.unfinishedTodos
//           }
//           return this.todos
//         },
//       },
// })