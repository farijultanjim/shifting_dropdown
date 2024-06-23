'use client'

import { useState } from "react"

import Blog from "./Blog";
import Pricing from "./Pricing";
import Products from "./Products";
import Tab from "./Tab";

import { AnimatePresence } from "framer-motion";
import Content from "./Content";


const TABS = [
    {
      title: "Products",
      Component: Products,
    },
    {
      title: "Pricing",
      Component: Pricing,
    },
    {
      title: "Blog",
      Component: Blog,
    },
  ].map((n, idx) => ({ ...n, id: idx + 1 }));

const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);
  
    const handleSetSelected = (val) => {
      if (typeof selected === "number" && typeof val === "number") {
        setDir(selected > val ? "r" : "l");
      } else if (val === null) {
        setDir(null);
      }
  
      setSelected(val);
    };
  
    return (
      <div
        onMouseLeave={() => handleSetSelected(null)}
        className="relative flex h-fit gap-2"
      >
        {TABS.map((t) => {
          return (
            <Tab
              key={t.id}
              selected={selected}
              handleSetSelected={handleSetSelected}
              tab={t.id}
            >
              {t.title}
            </Tab>
          );
        })}
  
        <AnimatePresence>
          {selected && <Content dir={dir} selected={selected} />}
        </AnimatePresence>
      </div>
    );
  };

  export default Tabs