import { useState, useRef } from 'react'

export default function Player() {
  const player = useRef()
  const [playerName, setPlayerName] = useState(null)
  // // const [buttonClicked, setButtonClicked] = useState(false)
  // function handlePlayerName(event) {
  //   setPlayerName(event.target.value)
  // }

  function handleClick() {
    setPlayerName(player.current.value)
  }

  return (
    <section id="player">
      {/* <h2>Welcome {buttonClicked ? playerName : 'unknown entity'}</h2> */}
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      {/* we will check if playerName truthy to display the name. */}
      <p>
        <input
          ref={player}
          type="text"
          // onChange={handlePlayerName}
          // value={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}
