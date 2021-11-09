import React, { useEffect, useState } from "react";
import PageTitle from "../shared_ui/PageTitle";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";

export default function CalendarPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-offWhite relative ">
      <div className="relative z-10">
        <PageTitleWithBorder title={"Gimbalabs Calendar"} />
      </div>
      {loading && (
        <div className="absolute inset-0 bg-offWhite flex justify-center items-center">
          ...loading
        </div>
      )}
      <div className="max-w-18 mx-auto spacing-x">
        <section className="realtive">
          <iframe
            src="https://teamup.com/ks359aocim5rmjch1o?title=Gimbalabs%20Calendar&showLogo=0&showSearch=0&showProfileAndInfo=0&showSidepanel=1&disableSidepanel=1&showTitle=0&showViewSelector=1&showMenu=0&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1"
            width="100%"
            height="800px"
            frameBorder="0"
          ></iframe>
        </section>
        <p className="p-3 bg-offWhite text-black2-900 ">
          <a href="https://ics.teamup.com/feed/ksyq4sfs7367by71im/9336592.ics">
            Click here to subscribe to this Calendar via ics feed.
          </a>
        </p>
      </div>
    </div>
  );
}
