import { CTA } from "@/_design/CTA";

export const Navigation_Bar = () => {
  return (
    <section className="sticky top-0 w-full h-20 flex justify-between items-center bg-blue-500 px-4">
      <p className="text-white font-bold">RetroBox</p>
      <nav className="flex gap-4 ml-4">
        <CTA variant="primary">Retrobox</CTA>
        <CTA variant="primary" href="../routes/jeux">
          Jeux
        </CTA>
        <CTA variant="primary" href="../routes/console">
          Console
        </CTA>
        <CTA variant="primary" href="../routes/actualite">
          Actualités
        </CTA>
        <CTA variant="primary" href="../routes/shop">
          Boutique
        </CTA>
      </nav>
      <CTA variant="primary" href="../routes/LogIn" className="ml-auto">
        Connexion
      </CTA>
    </section>
  );
};
