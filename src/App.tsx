import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarList from './components/carList/CarList'
import CarDetails from './components/carDetails/CarDetails'
import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App