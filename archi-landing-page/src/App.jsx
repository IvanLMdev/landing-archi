import MainCont  from './components/MainCont'
import Footer from './components/Footer'
import Wsp2 from './components/other-comp/Wsp-icon-fixed'
import NavBar from './components/NavBar'
import './styles/app-styles.css'
// && echo archigrowth.lat > ./build/CNAME
const App = () => {
  return (
    <div className='app'>
        <MainCont/>
        <Footer/>
        <Wsp2/>
        <NavBar/>
    </div>
  )
}

export default App