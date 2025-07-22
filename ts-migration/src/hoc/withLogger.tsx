"use client";
import { useEffect, useRef, ComponentType } from "react";

// Generic HOC used 
const withLogger = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const LoggerComponent = (props: P) => {
    const isMounted = useRef(false);


    useEffect(() => {
      console.log("Mounted");
      isMounted.current = true;
      return () => {
        console.log("Unmounted");
      };
    }, []);

    
    useEffect(() => {
      if (isMounted.current) {
        console.log("Updated");
      }
    });

    return <WrappedComponent {...props} />;
  };

  return LoggerComponent;
};

export default withLogger;
