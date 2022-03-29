todo and counter functionality with react and redux

make two folder in src : Folder(components, redux)

component = Folder(Todo, Counter)
component > Todo > 2 file
1. TodoInput.jsx => useDispatch()
2. TodoList.jsx => useSelector()

component > Counter > 2 file
1. CounterInput.jsx => useDispatch()
2. CounterList.jsx => useSelector()


redux = Folder(Todo, Counter)

redux > Todo > 3 file
1. TodoAction.js => export function addTodo(payload){ type : ADD_TODO, payload}
2. TodoActionType.js => export ADD_TODO = "ADD_TODO"
3. TodoReducer.js=> 

redux > Counter > 3 file
1. CounterAcion.js
2. CounterActionType.js
3. CounterReducer.js