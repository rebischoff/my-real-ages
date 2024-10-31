"use client";

import { useState } from "react";
import { formatISO } from "date-fns";
import Form from "./form";
import { EarthAge, HeavenAge } from "./age";

export default function Dates() {
  const today = formatISO(new Date(), { representation: "date" });
  const [birth, setBirth] = useState<string>(today);
  const [death, setDeath] = useState<string>(today);

  return (
    <>
      <Form
        birth={birth}
        setBirth={setBirth}
        death={death}
        setDeath={setDeath}
      />

      <div className="p-4">
        <h2 className="text-2xl text-center">My Real Ages Are</h2>
        <EarthAge birth={birth} death={death} />
        <HeavenAge birth={birth} death={death} />
      </div>
    </>
  );
}
