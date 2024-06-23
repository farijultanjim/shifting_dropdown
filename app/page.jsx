'use client'

import React from "react";

import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="flex h-screen w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
};