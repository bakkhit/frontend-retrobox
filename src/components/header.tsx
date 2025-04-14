import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return(
    <header className="flex sticky !top-0 w-full h-20 justify-between items-center bg-gradient-to-b from-[#171C5C] to-[#2F3075] px-4 z-20 border-b-2 border-[#171C5C]">
        <Image src="/images/retrobox.png" alt="Logo" width={100} height={100} className="w-16" />
        <nav className="flex gap-4 ml-24">
          <Link href="/" className="text-white border border-white px-4 py-1 rounded-full">Accueil</Link>  
          <Link href="../page/retrobox" className="text-white border border-white px-4 py-1 rounded-full">Retrobox</Link>
        </nav>
        <Link href="../page/LogIn" className="text-white border border-white px-4 py-1 rounded-full ml-auto">Connexion</Link>
        <Link href="../page/cart"><img src="../images/wCart.png" alt="cart" /></Link>
        <button><img src="../images/wSearch.png" alt="cart" /></button>
    </header>
    );
};

export default Header;