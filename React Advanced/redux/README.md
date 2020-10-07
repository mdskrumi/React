# Redux

* __Principles of Redux__
    * Represent the whole state of your application as a single JavaScript object.
    * The state tree is read only. Anytime you want to change the state, you need to dispatch an action.
    * State mutations in your app need to be described as a pure function that takes the previous state and the action being dispatched and returns the next state of your application.


## Store
The store binds together the three principles of Redux. It holds the current application's state object. It lets you dispatch actions. When you create it, you need to specify the reducer that tells how state is updated with actions.
* __The Store has three method__
    * The first method of this store is called getstate(). It retrieves the current state of the Redux store. 
    *  The second and the most commonly used store method is called dispatch. It lets you dispatch actions to change the state of your application. If we log this store state (by getState()) after dispatch, we're going to see that it has changed.
    * The third Redux store method, called subscribe. It lets you register a callback that the Redux store will call any time an action has been dispatched, so that you can update the UI of your application. It will reflect the current application state.
