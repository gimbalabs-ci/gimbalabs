import Link from "next/link";
import React from "react";
import PageTitle from "/components/shared_ui/PageTitle";
import PageTitleWithBorder from "/components/shared_ui/PageTitleWithBorder";
import Layout from "/components/Layouts/Layout";
import PlutusSvg from "/lib/icons/PlutusSvg";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";
import { workshopList } from "./data/workshopList";
import ContributeToThis from "./ContributeToThis";

const tableCellStyle = "p-4 border-blue-900 border-2 border-solid";

export default function ParticipatePage({ allProjectsData }) {
  return (
    <div className="relative  bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          className="text-black"
          borderColor="bg-offWhite"
          title={"Join a CIP 1694 Workshop"}
          subtitle={"You've been waiting for this. Participate."}
        />
      </div>
      <div className="bg-offWhite py-7 mt-1 border-t-2 border-black">
        <div className="w-full md:w-5/6 lg:w-2/3 mx-auto">
          <h1 className="text-4xl">We are all invited to get involved.</h1>
          <p className="text-xl">
            In the next few weeks, CIP-1694 Governance workshops will be run around the world. Do not miss the
            opportunity to get involved.
          </p>
        </div>
        <div class="w-full md:w-5/6 lg:w-2/3 mx-auto text-xl">
          <table class="border border-gray-300 mt-5">
            <thead>
              <tr class="bg-gray-100">
                <th class={tableCellStyle}>Date</th>
                <th class={tableCellStyle}>Location</th>
                <th class={tableCellStyle}>Register</th>
              </tr>
            </thead>
            <tbody>
              {workshopList.map((workshop, index) => (
                <tr>
                  <td className={tableCellStyle}>{workshop.date}</td>
                  <td className={tableCellStyle}>{workshop.location}</td>
                  {workshop.link ? (
                    <td className={tableCellStyle}>
                      <a className="text-blue-900 font-bold hover:text-orange-800" href={workshop.link} target="_blank">
                        Registration Link
                      </a>
                    </td>
                  ) : (
                    <td className={tableCellStyle}></td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ContributeToThis />
    </div>
  );
}
