import './App.css'
import Counter from './components/Counter'
// import Card from './components/Card'
import Home from './components/Home'

function App() {

  return <>
    <Home />
    {/* <div className='flex gap-4 item-center flex-wrap justify-center mb-2 '> */}
      {/* <Card tle="Card Title" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, consectetur? Mollitia eaque, nostrum natus ex est ratione nesciunt quisquam assumenda impedit optio quo reiciendis sit enim, necessitatibus vel minima molestias!" cardImg="./card.avif" /> */}
      <Counter />

    {/* </div> */}
  </>

}

export default App
