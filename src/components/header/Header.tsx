import { Typographie } from "@/_design/Typography";
import Image from "next/image";
import { Container } from "../container/Container";
import { CTA } from "@/_design/CTA";
import { useEffect, useState } from "react";
import { String } from "@/_types/string_type";
import { Header_Data } from "@/utils/Header_Data";

type Data = {
  title: String;
  subtitle: string[];
  img: String;
  button: String;
};

export const Header = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    setData(Header_Data);
  });
  return (
    <Container paddingX={270} paddingY={100}>
      <section className="flex flex-col lg:flex-row justify-center items-center md:justify-between h-fit">
        <div className="flex flex-col items-start justify- gap-8 w-max h-max">
          <Typographie variant="h2" fontFamily="silkscreen" color="neon" isBold>
            {data?.title}
          </Typographie>
          <div className="flex flex-col items-start justify-start gap-4 max-w-[465px] w-full">
            {data?.subtitle.map((subtitle) => (
              <Typographie variant="h5" color="white" fontFamily="Inter">
                {subtitle}
              </Typographie>
            ))}
          </div>
          <CTA variant="primary" href="../routes/jeux">
            {data?.button}
          </CTA>
        </div>
        <div
          className="relative lg:-right-68"
          style={{
            width: "clamp(300px, 72.917vw, 1400px)",
            height: "clamp(300px, 26.042vw, 500px)",
          }}
        >
          <Image
            src="/images/Box-mockups.png"
            alt="Image Console"
            className="relative lg:absolute top-0 object-cover"
            fill
          />
        </div>
      </section>
    </Container>
  );
};
