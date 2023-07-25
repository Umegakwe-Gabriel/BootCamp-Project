import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { MainRoute } from './Router/MainRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import { Provider } from 'react-redux'
import {store} from './Global/store'

let persistor = persistStore(store)

let client = new QueryClient()


const App = () => {
  return (
    <div>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={client}>
      <RouterProvider router={MainRoute}/>
      </QueryClientProvider>
      </PersistGate>
      </Provider>
    </div>
  )
}

export default App