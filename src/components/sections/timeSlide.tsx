import React, { useState } from "react";
import { Slider } from "@mui/material";
import { Typographie } from "@/_design/Typography";

const marks = [
  { value: 1, label: "1 mois" },
  { value: 12, label: "12 mois" },
];

export default function TimeSlide() {
  const [duration, setDuration] = useState<number>(1);

  const handleChange = (_: Event, newValue: number | number[]) => {
    const val = Array.isArray(newValue) ? newValue[0] : newValue;
    setDuration(val);
  };

  if (typeof window !== "undefined") {
    localStorage.setItem("duration", String(Math.round(duration)));
  }

  // Affiche "1 mois", "X mois" ou "1 an" arrondi
  const getLabel = (val: number) => {
    const rounded = Math.round(val);
    return rounded === 1
      ? "1 mois"
      : rounded === 12
      ? "12 mois"
      : `${rounded} mois`;
  };

  return (
    <div
      style={{
        width: "100%", // largeur responsive
        background: "rgba(69, 229, 197, 0.5)",
        borderRadius: 20,
        padding: "5vw",
        margin: "2rem auto",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "2rem",
        }}
      >
        <div className="flex w-full items-center justify-between gap-10">
          <div className="flex w-max items-center justify-start gap-10">
            <Typographie variant="h2" fontFamily="silkscreen" color="white">
              Temps
            </Typographie>
            <Typographie variant="h4" fontFamily="Inter" color="white">
              Faites glisser le curseur pour choisir votre temps
            </Typographie>
          </div>
          <Typographie
            variant="h5"
            color="white"
            fontFamily="Inter"
            isBold
            className="w-max"
          >
            {getLabel(duration)}
          </Typographie>
        </div>
      </div>
      <Slider
        value={duration}
        min={1}
        max={12}
        step={0.1}
        marks={marks}
        onChange={handleChange}
        valueLabelDisplay="off"
        sx={{
          color: "#fff",
          height: 8,
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          "& .MuiSlider-thumb": {
            height: 25,
            width: 25,
            backgroundColor: "#4642ED",
            border: "none",
            transition: "box-shadow 0.3s",
            "&:hover": {
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            },
            "&.Mui-active": {
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.4,
            backgroundColor: "#0A1834",
          },
          "& .MuiSlider-track": {
            backgroundColor: "rgba(70, 66, 237, 0.5)",
            border: "none",
          },
          "& .MuiSlider-markLabel": {
            color: "#fff",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
}
