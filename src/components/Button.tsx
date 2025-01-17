export default function Button({ buttonType, children }) {
  return (
    <button
      className={`h-[45px] bg-[#473a2b] w-full text-white
      rouded-[5px] cursor-pointer hover:bg-[#322618] 
      ${buttonType === "secondary" ? "opacity-[85%]" : " "}`}
    >
      {children}
    </button>
  );
}
