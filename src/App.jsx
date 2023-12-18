import Header from "./components/Header"
import SwipeButtons from "./components/SwipeButtons"
import TinderCards from "./components/TinderCards"


function App() {

  return (
    <main className="app">
      {/* Header */}
      <Header />


      {/* Tinder Cards */}
      <TinderCards />


      {/* SwipeButtons */}
      <SwipeButtons />
    </main>
  )
}

export default App
