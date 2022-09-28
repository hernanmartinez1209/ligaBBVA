import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CartSoccer from './compounst/CartSoccer'
import Longin from './compounst/Longin'

function App() {
const[soccer , setSoccer] = useState ()

useEffect(() => {
  const APIKEY =`df4ce524ad5ee9001a3b4bd3c481383a65ea8fb9b37d0d459c1ed5abcb93ae99`
  const BASEURL =`https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${APIKEY}`
  axios.get(BASEURL)
  .then(res => setSoccer(res.data))
  .catch(err =>console.log(err))

}, [])


  return (
    <div className="App">
        <div className="app__img"> <h1>Liga Española</h1> <img  className='img' src="https://playon99news.com/wp-content/uploads/2021/12/LaLiga.jpg" alt="" />
        <h2>Clubes</h2>
        </div>
      
      {
        soccer?.map(soccers =>(
          soccers?
          <CartSoccer 
          soccers={soccers}
          key={soccers.coaches[0].coach_name}/>
          :<Longin />
          ) )
              
      }
      
      <footer> Desarrollado por HMhernan2022</footer>
    </div>
  )
}

export default App
