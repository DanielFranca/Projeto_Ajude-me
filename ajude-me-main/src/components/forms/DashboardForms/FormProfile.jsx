import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
export default function FormProfile({
  tipo,
  nome,
  stats,
  moreInformation,
  input1,
  input2,
  input3,
}) {
  return (
    <form
    // style="font-family: Montserrat"
    >
      <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">{tipo}</span>
          <span className="text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
          <img
            src="/no-photo.jpg"
            className="rounded-full w-28 "
            alt="profile picture"
            srcSet=""
          ></img>
        </div>

        <div className="mt-8 ">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {nome}
          </h2>
          {moreInformation && (
            <div className="mt-2">
              <p className="text-white font-semibold tracking-wide">{input1}</p>
              <p className="text-white font-semibold tracking-wide">{input2}</p>
              <p className="text-white font-semibold tracking-wide">{input3}</p>
            </div>
          )}
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5">{stats}</p>
      </section>
    </form>
  );
}
