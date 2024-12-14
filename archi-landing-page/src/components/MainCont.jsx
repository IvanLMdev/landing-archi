import '../styles/main-cont.css'
import Header from './Header'
import CardService from './CardService'
import Form from './Form'
import FormDos from './FormDos'

const MainCont = () => {
  return (
    <main className='main-cont'>   
        <Header/>
        <CardService/> 
        <Form/>   
    </main>
  )
}

export default MainCont