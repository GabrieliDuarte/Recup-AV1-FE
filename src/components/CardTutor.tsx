import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function CardTutor({ img, nome, numPets }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className="bg-cream p-4 rounded-2xl border border-sand flex flex-col items-center text-center">
      <img src={img} alt={nome} className="w-16 h-16 rounded-full object-cover border-2 border-sand" />
      <h3 className="font-bold text-ink mt-2">{nome}</h3>
      <p className="text-xs text-muted">{numPets} pets</p>
      <div className="w-full mt-4 flex justify-between items-center pt-2 border-t border-sand">
        <span className="text-sm font-bold text-primary cursor-pointer">Saiba mais</span>
        <button onClick={() => setFavorito(!favorito)} className="cursor-pointer">
          {favorito ? <FaHeart color="#C4532A" size={20} /> : <FaRegHeart color="#C4532A" size={20} />}
        </button>
      </div>
    </article>
  );
}
