 
import './App.css'
import LineCharts from './Components/LineCharts/LineCharts'
import NavBar from './Components/NabBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() { 

  return (
    <> 
    <NavBar></NavBar>
      <h1 className='text-3xl font-bold'>Vite + React</h1> 
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
    </>
  )
}

export default App
