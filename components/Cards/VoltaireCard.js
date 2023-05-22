function VoltaireCard({ children, number, topic }) {

  return (
    <div className={`flex flex-row box-border shadow-xl border-4 bg-offWhite`}>
      <div className={`flex bg-red-800 w-10 text-2xl justify-center items-center`}>
        <p className="text-center font-bold text-offWhite">Topic #{number}</p>
      </div>
      <div className="w-5/6 p-4">
        <h1 className="text-2xl md:text-4xl pb-3">{topic}</h1>
        {children}
      </div>
    </div>
  );
}

export default VoltaireCard;
