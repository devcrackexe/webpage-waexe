"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://t.me/devcrackpy" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={16}
          height={16}
          className="w-5 h-5"
          alt="Dev Crack"
          src="/public/image/telegram.png"
        />{" "}
        Developed by DevCrack
      </Button>
    </a>
  );
}
