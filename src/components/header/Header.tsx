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
      <section className="flex flex-col md:flex-row justify-center items-center md:justify-between h-fit">
        <div className="flex flex-col items-start justify- gap-8 w-full h-max">
          <h1 className="text-blue-700 text-5xl font-bold">{data?.title}</h1>
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
        <div className="w-full md:w-auto">
          <Image
            src="/images/consoleImage1.png"
            alt="Image Console"
            width={900}
            height={300}
          />
        </div>
      </section>
    </Container>
  );
};
