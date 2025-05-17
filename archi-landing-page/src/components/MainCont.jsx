import '../styles/main-cont.css'
import Header from './Header'
import Service from './Service'
import NewForm from './NewForm'


const MainCont = () => {
  return (
    <main className='main-cont'>   
        <Header/>
        <Service/>
        <NewForm/>
    </main>
  )
}

export default MainCont