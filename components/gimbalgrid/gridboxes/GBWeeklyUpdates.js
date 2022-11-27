import React from "react";
import CalendarSvg from "../../../lib/icons/CalendarSvg";
import WeeklyUpdatesSvg from "../../../lib/icons/WeeklyUpdatesSvg";
import WithTransfer from "../WithTransfer";

export default function GBWeeklyUpdates(props) {
  return (
    <WithTransfer {...props}>
      <div className="w-full h-full grid bg-offWhite text-black2-900 p-5">
        <div className="text-center h-full w-full flex flex-col justify-between items-center">
          <WeeklyUpdatesSvg className="w-7" />
          <div className="mt-auto">Videos</div>
        </div>
      </div>
    </WithTransfer>
  );
}
