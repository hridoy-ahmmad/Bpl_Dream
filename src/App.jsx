
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import PlayerPool from './Components/PlayerPool/PlayerPool'
import Players from './Components/Players/Players'
import Loading from './Components/Loading/Loading'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Slide, toast, ToastContainer, Zoom } from 'react-toastify'
import DeleteToast from './Components/DeleteToast'


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
      toast.error('Already Exists!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      return
    }
    setSelectdePlayer([...selectedPlayer, player])
    setCoins(coins - player.price)
    toast.success('Successfuly Selected', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    })
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
    toast.success(<DeleteToast></DeleteToast>, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    })

  }

  return (
    <div>
      <Nav coins={coins}></Nav>
      <Hero></Hero>
      <PlayerPool active={active} handleAvailabe={handleAvailabe} handleSelected={handleSelected} selectedPlayer={selectedPlayer}></PlayerPool>
      {
        active ? <Suspense fallback={<Loading></Loading>}>
          <Players selectedPlayer={selectedPlayer} playerPromise={playerPromise} handleSelect={handleSelect}></Players>
        </Suspense> : <SelectedPlayers handleAvailabe={handleAvailabe} selectedPlayer={selectedPlayer} handleDelete={handleDelete}></SelectedPlayers>
      }
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
