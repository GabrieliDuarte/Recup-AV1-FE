import Button from "../components/Button";
import CardTutor from "../components/CardTutor";
import { IoGridOutline } from "react-icons/io5";

const tutores = [
  { nome: "Ana Souza", numPets: 2, img: "/img/tutores/ana-souza.png" },
  { nome: "Carlos Lima", numPets: 1, img: "/img/tutores/carlos-lima.png" },
  { nome: "Juliana Reis", numPets: 3, img: "/img/tutores/juliana-reis.png" }
];

export default function Tutor() {
  return (
    <section className="py-12 px-6 lg:px-20 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-ink">Tutores</h2>
        <Button icon={<IoGridOutline />} text="Ver todos" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tutores.map((item, index) => (
          <CardTutor key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
