import Button from "../components/Button";
import CardPet from "../components/CardPet";
import { IoGridOutline } from "react-icons/io5";

const animais = [
  { nome: "Thor", animal: "Cachorro", raca: "Golden Retriever", tutor: "Ana Souza", img: "/img/pets/thor.png" },
  { nome: "Paçoca", animal: "Cachorro", raca: "Vira-lata caramelo", tutor: "Marina Costa", img: "/img/pets/bidu.png" },
  { nome: "Mia", animal: "Gato", raca: "Siamês", tutor: "Carlos Lima", img: "/img/pets/mia.png" },
  { nome: "Frajola", animal: "Gato", raca: "SRD", tutor: "Rafael Dias", img: "/img/pets/frajola.png" }
];

export default function Pet() {
  return (
    <section className="py-12 px-6 lg:px-20 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-ink">Pets</h2>
        <Button icon={<IoGridOutline />} text="Ver todos" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {animais.map((item, index) => (
          <CardPet key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
