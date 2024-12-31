
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

Routes
function App() {
  

  return (
    <>
    {/* path for landingpage,home,history */}
    {/* header */}
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/history' element={<History/>} />

    </Routes>
    {/* footter */}
    <Footer/>
    </>
  )
}   

export default App
