import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Servico from "./layout/Servico";
import Footer from "./layout/Footer";

function App(){

  return(
    <div>
      <Header/>
     <main>
       <Hero/>
       <Servico/>
       <Footer/>
       
     </main>
    </div>
  )
}


export default App()