import './App.css'
import Body from './components/Body.jsx'
import  appStore  from './utils/appStore.js'
import { Provider } from 'react-redux'


function App() {
  

  return (
    <Provider store={appStore}>
        <Body/>
    </Provider>
   
    
  )
}

export default App
