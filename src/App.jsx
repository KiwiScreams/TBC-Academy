import { Routes, Route } from 'react-router-dom'
import Header from './components/shared/header/Header'
import Home from './pages/home/Home'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
