import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { SignIn } from "@/components/auth/credentials/sign_in/Sign_in";
import { SignUp } from "@/components/auth/credentials/sign_up/Sign_up";
import Image from "next/image";

const LogIn = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container className="bg-[#0A1834] flex items-center justify-between h-[92vh]">
      <div className="grid place-content-center w-full h-full">
        <Image
          src="/images/Box-mockups.png"
          alt="box mockups"
          width={500}
          height={500}
        />
      </div>
      {!toggle ? (
        <SignIn onClick={handleToggle} />
      ) : (
        <SignUp onClick={handleToggle} />
      )}
    </Container>
  );
};

export default LogIn;
