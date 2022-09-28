import React from 'react'

const CartSoccer = ({soccers}) => {
 console.log(soccers);
    return (
    <div className='cart'>
        
        <article>
            <h2>{soccers.team_name}</h2>
            <img src={soccers.team_badge} alt="" />
            <ul>
                <li className='entrenador'><samp>Entrenador :</samp>{soccers.coaches[0].coach_name}</li>
                <h3>Jugadores</h3>
                 {
                    soccers.players.map(play =>(
                        <div>
                        <li><samp>Nombre :</samp>{play.player_name}</li>
                        {/* <li><img src={play.player_image} alt="" /></li> */}
                        </div>
                    ))
                }
              
            </ul>
        </article>
    </div>
  )
}

export default CartSoccer