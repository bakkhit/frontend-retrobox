import { CTA } from "@/_design/CTA";

export const Navigation_Bar = () => {
  return (
    <section className="sticky top-0 w-full h-20 z-10 flex justify-between items-center bg-blue-500 px-4">
      <p className="text-white font-bold">RetroBox</p>
      <nav className="flex gap-4 ml-4">
        <CTA variant="primary" href="/">
          Accueil
        </CTA>
        <CTA variant="primary" href="../routes/jeux">
          Retrobox
        </CTA>
      </nav>
      <CTA variant="primary" href="../routes/LogIn" className="ml-auto">
        Connexion
      </CTA>
    </section>
  );
};
