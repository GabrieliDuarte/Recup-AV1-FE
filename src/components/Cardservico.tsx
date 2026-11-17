import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Cardservico({ nome, descricao }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className="bg-cream p-4 rounded-2xl border border-sand flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-ink text-lg">{nome}</h3>
        <p className="text-xs text-muted mt-1">{descricao}</p>
      </div>
      <div className="mt-4 flex justify-between items-center pt-2 border-t border-sand">
        <span className="text-sm font-bold text-primary cursor-pointer">Saiba mais</span>
        <button onClick={() => setFavorito(!favorito)} className="cursor-pointer">
          {favorito ? <FaHeart color="#C4532A" size={20} /> : <FaRegHeart color="#C4532A" size={20} />}
        </button>
      </div>
    </article>
  );
}
