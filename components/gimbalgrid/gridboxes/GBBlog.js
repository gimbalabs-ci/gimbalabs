import React from "react";
import CalendarSvg from "../../../lib/icons/CalendarSvg";
import WithTransfer from "../WithTransfer";
import BlogSvg from "../../../lib/icons/BlogSVG";
import Link from "next/link";

export default function GBBlog(props) {
  return (
    <WithTransfer {...props}>
      <Link href="/blog">
        <div className="w-full h-full grid bg-offWhite text-black2-900 p-5">
          <div className="h-full w-full flex flex-col justify-between items-center">
            <BlogSvg className="w-7" />
            <div className="mt-auto">Blog</div>
          </div>
        </div>
      </Link>
    </WithTransfer>
  );
}
