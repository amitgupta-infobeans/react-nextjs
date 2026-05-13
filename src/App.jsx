import './App.css'
import Counter from './components/Counter'
import Home from './components/Home'
import QueueManagementSystem from './components/QueueSystem'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return <>
    <ThemeProvider >
      <Home />
      <Counter />
      <QueueManagementSystem />
    </ThemeProvider>
  </>

}

export default App
