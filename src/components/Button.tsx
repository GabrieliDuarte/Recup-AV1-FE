export default function Button({ text, icon }) {
  return (
    <button className="flex items-center bg-primary text-white font-bold py-2 px-4 rounded-full gap-2 hover:bg-primary-dark cursor-pointer">
      {icon} {text}
    </button>
  );
}
