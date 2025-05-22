import { Typographie } from "@/_design/Typography";
import Link from "next/link";
import { Ellipse } from "@/components/pattern/ellipse";

const Success = () => {
    return (
        <section className="h-screen flex flex-col gap-6 items-center justify-center">
            <Ellipse top={15} left={-10} backgroundColor="#45E5C5" width={50} blur={250} className="" />
            <Ellipse top={45} left={20} backgroundColor="#4845E5" width={30} blur={150} className="" />
            <Ellipse top={20} left={80} backgroundColor="#4845E5" width={30} blur={150} className="" />
            <Ellipse top={10} left={80} backgroundColor="#4845E5" width={30} blur={150} className="" />
            <Ellipse top={0} left={70} backgroundColor="#45E5C5" width={25} blur={150} className="" />
            <Typographie variant="h1" fontFamily="silkscreen" color="white">
                Success!
            </Typographie>
            <Typographie variant="h6" fontFamily="Inter" color="white">
                Votre commande arrivera dans moins de 2 semaines
            </Typographie>
            <Link
                href="/"
                className="flex items-center justify-center py-2 px-4 rounded-full border border-white text-white cursor-pointer hover:opacity-80 hover:bg-white/10 transition-all duration-200 ease-in-out"
            >
                <Typographie
                    variant="h6"
                    fontFamily="Inter"
                    color="white"
                    className="text-center"
                >
                    Retour à l'accueil
                </Typographie>
            </Link>
        </section>
    );
};

export default Success
