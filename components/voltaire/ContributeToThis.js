export default function ContributeToThis({ colors }) {
  return (
    <div className="w-2/3 mx-auto bg-green-600 text-offWhite my-3 p-5 text-lg">
      <div className="">
        <h1 className="text-6xl pb-5">Add to this documentation</h1>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-offWhite p-3 text-black text-left">
          <h1 className="text-2xl">Do you want to add...</h1>
          <ul className="ml-5 list-disc">
            <li>...a sign up link to your CIP-1694 Workshop?</li>
            <li>...links to additional documentation?</li>
            <li>...anything else to this page?</li>
          </ul>
        </div>
        <div className="bg-offWhite p-3 text-black text-left">
          <h1 className="text-2xl text-yellow-900">Here is how:</h1>
          <ul className="ml-5 list-disc">
            <li>
              Submit a merge request to{" "}
              <a className="text-blue-900 font-bold hover:text-orange-600" href="https://gitlab.com/gimbalabs/gimbalabs" target="_blank">
                this project repo
              </a>
            </li>
            <li>
              Say hello on the{" "}
              <a className="text-blue-900 font-bold hover:text-orange-600" href="https://discord.gg/xMsE68vG" target="_blank">
                Gimbalabs Discord server, on the #discuss-cip-1694-workshops channel
              </a>
              , and let us know what you want to add to this page.
            </li>
            <li>
              If you are facilitating a CIP-1694 workshop, drop a line on the{" "}
              <a
                className="text-blue-900 font-bold hover:text-orange-600"
                href="https://discord.com/channels/826816523368005654/1105135190898114702"
                target="_blank"
              >
                #cip-1694-cmty-workshops channel in IOG Discord
              </a>
            </li>
            <li>
              Here is a{" "}
              <a className="text-blue-900 font-bold hover:text-orange-600" href="https://gitlab.com/gimbalabs/gimbalabs/-/tree/main/components/voltaire/data" target="_blank">
                direct link to the data
              </a>{" "}
              that we are presenting in these &quot;Voltaire is Here&quot; pages. Feel free to use this data in any of your own projects. If you have updates (for example, a registration link to a workshop in workshopList.js), submit a merge request to one of these files.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
