import Image from "next/image";
const Footer = () => {
    return(
        <footer className="h-[336px] bg-[#328796]">
                    <Image src="/images/retrobox.png" alt="Image Console" width={75} height={75} className="ml-[11%] m-5"/>
                    <div className="grid grid-cols-3 ml-[11%] w-fit gap-[70px]">
                      <div className="text-white font-thin">
                        <p className="font-medium mb-[1%]">Infos</p>
                        <a href="#" className="block">Mentions juridique</a>
                        <a href="#" className="block">Politique de confidentialité</a>
                        <a href="#" className="block">Conditions d'utilisation du site web</a>
                        <a href="#" className="block">Plan du site</a>
                      </div>
                      <div className="text-white font-thin">
                        <p className="font-medium mb-[1%]">Valeurs</p>
                        <a href="#" className="block">Environnement</a>
                        <a href="#" className="block">Accessibilité</a>
                        <a href="#" className="block">Confidentialité en ligne</a>
                      </div>
                      <div className="text-white font-thin">
                        <p className="font-medium mb-[1%]">Connexion</p>
                        <a href="#" className="block">Application iOS</a>
                        <a href="#" className="block">Application Android</a>
                        <div className="flex gap-2 mt-2 l-0">
                          <a href="#"><Image src="/images/Instagram.png" alt="Image Console" width={30} height={30} /></a>
                          <a href="#"><Image src="/images/Facebook.png" alt="Image Console" width={30} height={30} /></a>
                          <a href="#"><Image src="/images/Youtube.png" alt="Image Console" width={30} height={30} /></a>
                        </div>
                      </div>
                    </div>
                  </footer>
    );
}
export default Footer;