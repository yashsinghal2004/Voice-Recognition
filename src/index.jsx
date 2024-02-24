import React from 'react'
import App from './App'
import appStore from './Utils/appStore'
import { Provider } from 'react-redux'

const Index = () => {
  return (
    <div>
        <Provider store={appStore}>
            <App/>
        </Provider>
    </div>
  )
}

export default Index;