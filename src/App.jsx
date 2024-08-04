import Header from "../components/Header"
import PositionDemo from "../components/PositionDemo"
import SectionSeparate from "../components/SectionSeparate"

function App() {

  return (
    <div /* className="App" */>
     <Header />
     <div>

     <SectionSeparate />
     </div>
     <main className="h-screen bg-white flex items-center justify-center">
        <p>contenido</p>
     </main>
     <div className="mt-10">
     <PositionDemo />
     </div>
     <div>
        <img src="./images/1.jpg" alt="" />
     </div>
    </div>
  )
}

export default App
