Redux

Actions =  Action global state'e gönderilecek verilerin gövdesidir. Actionlar her zaman obje olmak zorundadır. Actionlar genellikle type ve payload adında iki propertyden oluşur. Type hangi işlemin yapıldığını belirtirken payload ilgili veriyi içerir.

```
  {
    type: "ADD_COMMENT",
    payload: {
      userId: 41251,
      commentBody: "Gayet güzel bir filmdi."
    },
  }
  // veya
  {
    type: "ADD_COMMENT",
    comment: {
      userId: 41251,
      commentBody: "Gayet güzel bir filmdi."
    }
  },

```

Dispatch bir redux methodudur ve redux stateini güncellemek için kullanılır. Dispatch parametre olarak action tipinde bir obje alır.

```
  dispatch({
    type: "GET_POST",
    payload: {
      postId: 23
    }
  })

```


Reducers = Global state'in güncellendiği, kontrol edildiği, güncellenmiş state'i return eden bir fonksiyondur. State ve action olmak üzere iki parametre alır. 

```
  const initialState = {
    comments: [{
      commentId: 1
      commentBody: "İlk film daha aksiyon doluydu."
    }]
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_COMMENT":
        return {
          ...state,
          comments: [...state.comments, action.payload]
        }

      default:
        return state
    }
  }
```

Global state'in redux karşılığı store'dur. Tüm reducerların birleşimiyle oluşur.

```
  import { createStore } from 'redux'
  import commentReducer from './commentReducer'

  const store = createStore(commentReducer)

```

* store.getState(): güncel state objesini verir.
* store.dispatch(): reducer'a state'i güncellemesi için action gönderir.
* store.subscribe(): store'da oluşan değişiklikleri dinler.



