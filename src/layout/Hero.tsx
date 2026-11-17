


   export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row bg-primary py-16 px-6 lg:px-20 items-center justify-between gap-10">
      <div className="flex flex-col gap-5 max-w-xl text-white">
        <span className="bg-primary-dark text-white text-xs font-bold uppercase px-3 py-1 rounded-full w-fit">
          Gestão Pet
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Cuidado completo em um só <span className="text-peach">lugar.</span>
        </h1>
        <p className="text-gray-100 text-lg">
          Clientes, pets e serviços organizados para o dia a dia.
        </p>
      </div>
      <div className="bg-sand rounded-full p-8 shadow-lg">
        <img src="/img/hero.svg" alt="Hero" className="w-64 lg:w-96" />
      </div>
    </section>
  );
}


