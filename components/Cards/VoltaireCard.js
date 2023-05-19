function VoltaireCard({ children, number, topic }) {
  let dM = "ml-0"
  let numBg = "bg-blue-800"
  if (number % 2 === 0){
    dM = "ml-0"
    numBg = "bg-red-800"
  }

  return (
    <div className={`flex flex-row box-border shadow-xl my-4 border-4 bg-offWhite`}>
      <div className={`flex ${numBg} w-10 text-4xl justify-center items-center`}>
        <p className="text-center font-bold text-offWhite">{number}</p>
      </div>
      <div className="w-3/4 p-4">
        <h1 className="text-4xl">Agenda Topic: {topic}</h1>
        {children}
      </div>
    </div>
  );
}

export default VoltaireCard;
