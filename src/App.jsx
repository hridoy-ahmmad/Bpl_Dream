
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import PlayerPool from './Components/PlayerPool/PlayerPool'
import Players from './Components/Players/Players'
import Loading from './Components/Loading/Loading'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'


const playersData = async () => {
  const res = await fetch('/players.json')
  return res.json()
}
// console.log(playersData())
const playerPromise = playersData()
function App() {

  const [selectedPlayer, setSelectdePlayer] = useState([])
  const [active, setActive] = useState(true)
  const [coins, setCoins] = useState(200000)

  const handleSelect = (player) => {
    const isExist = selectedPlayer.find(item => item.id === player.id)
    if (isExist) {
      alert('Already axist')
      return
    }
    setSelectdePlayer([...selectedPlayer, player])
    setCoins(coins - player.price)
  }
  console.log(selectedPlayer);

  const handleAvailabe = () => {
    setActive(true)
  }
  const handleSelected = () => {
    setActive(false)
  }
  const handleDelete = (player) => {
    const filteredItem = selectedPlayer.filter(item => item.id !== player.id)
    setSelectdePlayer(filteredItem)

  }

  return (
    <div>
      <Nav coins={coins}></Nav>
      <Hero></Hero>
      <PlayerPool active={active} handleAvailabe={handleAvailabe} handleSelected={handleSelected} selectedPlayer={selectedPlayer}></PlayerPool>

      {
        active ? <Suspense fallback={<Loading></Loading>}>
          <Players selectedPlayer={selectedPlayer} playerPromise={playerPromise} handleSelect={handleSelect}></Players>
        </Suspense> : <SelectedPlayers selectedPlayer={selectedPlayer} handleDelete={handleDelete}></SelectedPlayers>
      }



    </div>
  )
}

export default App
