"use client";
import React, { useState } from "react";
import custom from "./custom.module.scss";
import clsx from "clsx";

export default function Card() {
  const [expanding, setExpending] = useState(false);
  return (
    <div
      className={clsx("card", {
        [custom.card]: expanding,
      })}
    >
      Card
    </div>
  );
}
