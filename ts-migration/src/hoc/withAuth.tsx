"use client";

import { useAuth } from "@/context";
import { redirect } from "next/navigation";
import { ComponentType } from "react";

const withAuth = (WrappedComponent: ComponentType<any>) => {
  const AuthenticatedComponent = (props: any) => {
    const { loggedIn } = useAuth();

    if (!loggedIn) {
      redirect("/login");
      return null; 
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
