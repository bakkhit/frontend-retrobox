import React, { useState } from "react";
import { Slider} from "@mui/material";
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

  // Affiche "1 mois", "X mois" ou "1 an" arrondi
  const getLabel = (val: number) => {
    const rounded = Math.round(val);
    return rounded === 1 ? "1 mois" : rounded === 12 ? "1 an" : `${rounded} mois`;
  };

  return (
    <div
      style={{
        width: "80vw", // largeur responsive
        background: "#181c24",
        borderRadius: 20,
        padding: "5vw",
        margin: "2rem auto",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
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
        <Typographie variant="h1" fontFamily="silkscreen" color="white" isWhiteNeon
        >
          Temps
        </Typographie>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
          <Typographie variant="h5" color="white" fontFamily="Inter"
          >
            {getLabel(duration)}
          </Typographie>
          <Typographie variant="h5" color="white" fontFamily="Inter">
            Faites glisser le curseur pour choisir votre temps
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
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid #181c24",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
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
            backgroundColor: "#fff",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#fff",
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