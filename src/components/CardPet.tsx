import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function CardPet({ nome, animal, raca, tutor, img }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className="bg-cream p-4 rounded-2xl border border-sand">
      <img src={img} alt={nome} className="rounded-xl w-full h-48 object-cover bg-sand p-2" />
      <div className="mt-3 flex justify-between items-start">
        <div>
          <span className="text-xs font-bold uppercase px-2 py-0.5 bg-sand text-primary rounded">
            {animal}
          </span>
          <h3 className="text-xl font-bold text-ink mt-1">{nome}</h3>
          <p className="text-sm text-muted">{raca}</p>
          <p className="text-sm text-muted font-medium mt-1">Tutor: {tutor}</p>
        </div>
        <button onClick={() => setFavorito(!favorito)} className="cursor-pointer">
          {favorito ? <FaHeart color="#C4532A" size={24} /> : <FaRegHeart color="#C4532A" size={24} />}
        </button>
      </div>
    </article>
  );
}
