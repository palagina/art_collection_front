import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import postReducer from "./reducers/postReducer"
import commentsReducer from "./reducers/commentsReducer"
import filterReducer from "./reducers/filterReducer"
import notificationReducer from "./reducers/notificationReducer"
import errorReducer from "./reducers/errorReducer"
import loginReducer from "./reducers/loginReducer"
import usersReducer from "./reducers/usersReducer"

const reducer = combineReducers({
  posts: postReducer,
  filter: filterReducer,
  notification: notificationReducer,
  error: errorReducer,
  login: loginReducer,
  users: usersReducer,
  comments: commentsReducer
})

const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store