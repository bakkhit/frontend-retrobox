"use client";

import { Typographie } from "@/_design/Typography";
import { String } from "@/_types/string_type";
import { useEffect, useState } from "react";
import { fetchFilterData } from "../../logique/fetch/data";
import useBoutiqueStore from "@/context/Boutique.filter";

interface Game {
  src: String;
}

interface FilterItem {
  name: String;
  game: Game[];
}

type FilterCategory = "gender" | "PEGI" | "console";

type FilterData = Record<FilterCategory, FilterItem[]>;

export const Filter = () => {
  const {
    togglePEGI,
    toggleConsole,
    toggleGender,
    PEGI,
    Console: consoles,
    Gender,
  } = useBoutiqueStore();

  const [filters, setFilters] = useState<FilterData>({
    gender: [],
    PEGI: [],
    console: [],
  });

  useEffect(() => {
    const loadFilters = async () => {
      const genderData = await fetchFilterData({ src: "genders" });
      const PEGIData = await fetchFilterData({ src: "PEGIS" });
      const consoleData = await fetchFilterData({ src: "consoles" });

      setFilters({
        gender: genderData,
        PEGI: PEGIData,
        console: consoleData,
      });
    };

    loadFilters();
  }, []);

  const renderCheckboxGroup = (
    title: string,
    items: FilterItem[],
    selected: string[],
    toggleFn: (val: string) => void
  ) => (
    <div className="flex flex-col gap-6 items-start w-max justify-center text-white">
      <Typographie variant="h4" fontFamily="Inter" color="white" isBold>
        {title}
      </Typographie>
      <div className="flex items-start justify-start flex-col gap-2">
        {items.map((item) => (
          <label
            key={item.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              name={item.name}
              className="cursor-pointer"
              checked={selected.includes(item.name)}
              onChange={() => toggleFn(item.name)}
            />
            <Typographie
              variant="h5"
              fontFamily="Inter"
              color="white"
              className="capitalize cursor-pointer"
            >
              {item.name}
            </Typographie>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col pr-28 gap-11 items-start justify-start w-max h-max">
      {renderCheckboxGroup("Gender", filters.gender, Gender, toggleGender)}
      {renderCheckboxGroup("PEGI", filters.PEGI, PEGI, togglePEGI)}
      {renderCheckboxGroup(
        "Consoles",
        filters.console,
        consoles,
        toggleConsole
      )}
    </section>
  );
};
