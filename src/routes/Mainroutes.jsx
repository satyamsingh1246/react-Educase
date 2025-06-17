
import { Routes ,Route} from 'react-router-dom'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Content from '../components/Content'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
        <Route path='/content' element={<Content />} />
    </Routes>
  )
}

export default Mainroutes