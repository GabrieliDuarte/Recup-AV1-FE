import Button from "../components/Button";
import Cardservico from "../components/Cardservico";
import { IoGridOutline } from "react-icons/io5";

const servicos = [
  { nome: "Banho e tosa", descricao: "Seg a Sáb • 1h30" },
  { nome: "Consulta veterinária", descricao: "Agendamento • 40 min" },
  { nome: "Vacinação", descricao: "V10, antirrábica" },
  { nome: "Hospedagem", descricao: "Diária com recreação" },
  { nome: "Adestramento", descricao: "Pacote de 8 aulas" }
];

export default function Servico() {
  return (
    <section className="py-12 px-6 lg:px-20 bg-cream border-t border-b border-sand">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-ink">Serviços</h2>
        <Button icon={<IoGridOutline />} text="Ver todos" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {servicos.map((item, index) => (
          <Cardservico key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
