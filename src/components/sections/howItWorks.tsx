import { use, useEffect, useRef, useState } from "react";
import { Typographie } from "@/_design/Typography";
import Image from "next/image";
import { Container } from "../container/Container";
import { animate, onScroll } from "animejs";
import { consoles } from "@/utils/consoles_data";

export const HowItWorks = () => {
  const [index, setIndex] = useState(0);
  const prevScrollY = useRef(0);
  const debugIndicator = false;

  useEffect(() => {
    const updateIndex = (direction: "up" | "down") => {
      setIndex((prevIndex) => {
        if (direction === "down") {
          return (prevIndex + 1) % consoles.length;
        } else {
          // Permet de revenir en arrière
          return (prevIndex - 1 + consoles.length) % consoles.length;
        }
      });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > prevScrollY.current ? "down" : "up";
      prevScrollY.current = currentScrollY;
      updateIndex(direction);
    };

    animate(".img-principal", {
      x: 300,
      y: 250,
      filter: "blur(10px)",
      ease: "linear",
      autoplay: onScroll({
        container: "scroll-container",
        enter: "top-=50 top",
        leave: "top+=60 bottom",
        sync: true,
        onLeave: () => {
          animate(".img-secondary", {
            y: -400,
            opacity: 1,
            autoplay: onScroll({
              container: "scroll-container",
              enter: "top-=50 top",
              leave: "top+=30 bottom",
              sync: true,
              debug: debugIndicator,
              onLeave: () => handleScroll,
            }),
          });
          // Mise à jour du contenu
          handleScroll();
        },
      }),
    });
  }, []);

  // Contenu actuel
  const currentConsole = consoles[index];

  return (
    <Container
      paddingX={270}
      paddingY={350}
      className="scroll-container relative bg-blue-900 h-[400vh]"
    >
      <div className="sticky top-[30vh] flex flex-col items-start justify-between w-full">
        <div className="flex flex-col items-start justify-start gap-24">
          <Typographie variant="h1" fontFamily="silkscreen" color="white">
            {currentConsole.id}.
          </Typographie>
          <div className="flex flex-col items-start justify-center gap-10 w-[450px]">
            <Typographie variant="h2" fontFamily="silkscreen" color="white">
              {currentConsole.name}
            </Typographie>
            <Typographie variant="h5" fontFamily="Inter" color="white">
              {currentConsole.description}
            </Typographie>
          </div>
        </div>

        <div className="absolute -right-3">
          {/* Image principale */}
          <Image
            src={consoles[0].src}
            alt={consoles[0].name}
            className="img-principal"
            width={450}
            height={450}
          />
          {/* Image secondaire */}
          <Image
            src={consoles[1].src}
            alt={consoles[1].name}
            className="img-secondary opacity-0"
            width={450}
            height={450}
          />
        </div>
      </div>
    </Container>
  );
};
