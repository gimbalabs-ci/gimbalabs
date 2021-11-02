import React from "react";
import CalendarSvg from "../../../lib/icons/CalendarSvg";
import WithTransfer from "../WithTransfer";

export default function GBCalendar(props) {
  return (
    <WithTransfer {...props}>
      <div className="w-full h-full grid bg-offWhite text-black2-900 p-5">
        <div className="h-full w-full flex flex-col justify-between items-center">
          <CalendarSvg className="w-7" />
          <div className="mt-auto">Calendar</div>
        </div>
      </div>
    </WithTransfer>
  );
}
