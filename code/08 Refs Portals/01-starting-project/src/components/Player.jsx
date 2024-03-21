import { useState } from 'react'

export default function Player() {
  const [playerName, setPlayerName] = useState('')
  const [buttonClicked, setButtonClicked] = useState(false)
  function handlePlayerName(event) {
    setPlayerName(event.target.value)
  }

  function handleClick() {
    setButtonClicked(true)
  }

  return (
    <section id="player">
      <h2>Welcome {buttonClicked ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handlePlayerName} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}
