import { useEffect } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const portal = document.getElementById("portal");
  const element = document.createElement("div");
  useEffect(() => {
    portal.appendChild(element);
    return () => portal.removeChild(element);
  }, [portal, element]);

  return createPortal(children, element);
};

export default Portal;
