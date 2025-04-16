import { Typographie } from "@/_design/Typography";
import { String } from "@/_types/string_type";
import { useEffect, useState } from "react";
import { fetchFilterData } from "../../logique/fetch/data";

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

      setFilters((prev) => ({ ...prev, gender: genderData }));
      setFilters((prev) => ({ ...prev, PEGI: PEGIData }));
      setFilters((prev) => ({ ...prev, console: consoleData }));
    };

    loadFilters();
  }, []);

  return (
    <section className="flex flex-col pr-28 gap-11 items-start justify-start w-max h-max">
      <div className="flex flex-col gap-6 items-start w-max justify-center text-white">
        <Typographie variant="h3" fontFamily="Inter" color="white" isBold>
          Gender
        </Typographie>
        <div className="flex flex-col gap-2">
          {filters.gender.map((gender) => (
            <label
              key={gender.name}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                name={gender.name}
                className="cursor-pointer"
              />
              <Typographie
                variant="h5"
                fontFamily="Inter"
                color="white"
                className="capitalize cursor-pointer"
              >
                {gender.name}
              </Typographie>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start w-max justify-center text-white">
        <Typographie variant="h3" fontFamily="Inter" color="white" isBold>
          PEGI
        </Typographie>
        <div className="flex flex-col gap-2">
          {filters.PEGI.map((PEGI) => (
            <label
              key={PEGI.name}
              onChange={() => console.log(PEGI.name)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                name={PEGI.name}
                className="cursor-pointer"
              />
              <Typographie
                variant="h5"
                fontFamily="Inter"
                color="white"
                className="capitalize cursor-pointer"
              >
                {PEGI.name}
              </Typographie>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start w-max justify-center text-white">
        <Typographie variant="h3" fontFamily="Inter" color="white" isBold>
          Consoles
        </Typographie>
        <div className="flex flex-col gap-2">
          {filters.console.map((console) => (
            <label
              key={console.name}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                name={console.name}
                className="cursor-pointer"
              />
              <Typographie
                variant="h5"
                fontFamily="Inter"
                color="white"
                className="capitalize cursor-pointer"
              >
                {console.name}
              </Typographie>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};
