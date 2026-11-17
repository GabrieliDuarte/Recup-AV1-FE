import { FaRegHeart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-cream py-5 px-6 lg:px-20 border-b border-sand">
      <div className="flex items-center gap-3">
        <img src="/img/logo-icone.svg" alt="Logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold text-ink">Pet<span className="text-primary">Care</span></h2>
      </div>
      <button className="flex items-center border-2 border-primary text-primary font-bold py-2 px-5 rounded-full gap-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">
        <FaRegHeart /> Favoritos
      </button>
    </header>
  );
}
