import './App.css'
import Counter from './components/Counter'
import CounterWithZustand from './components/CounterWithZustand'
import Home from './components/Home'
import QueueManagementSystem from './components/QueueSystem'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return <>
    <ThemeProvider >
      <Home />
      <Counter />
      <QueueManagementSystem />
      <CounterWithZustand />
    </ThemeProvider>
  </>

}

export default App
