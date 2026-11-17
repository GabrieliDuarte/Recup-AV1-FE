import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Pet from "./layout/Pet";
import Servico from "./layout/Servico";
import Tutor from "./layout/Tutor";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <Pet />
        <Servico />
        <Tutor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
