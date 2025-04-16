import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { authClient } from "@/utils/auth-client";
import { SignIn } from "@/components/auth/credentials/sign_in/Sign_in";
import { SignUp } from "@/components/auth/credentials/sign_up/Sign_up";

const LogIn = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container className="bg-[#0A1834] flex items-center justify-between h-[92vh]">
      <div className="w-full h-full"></div>
      {!toggle ? (
        <SignIn onClick={handleToggle} />
      ) : (
        <SignUp onClick={handleToggle} />
      )}
    </Container>
      );
};

export default LogIn;
