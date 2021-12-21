import { useState, useEffect } from "react";
const useClickBody = (ref) => {
  const [isClickInElement, setIsClickInElement] = useState(false);
  const body = document.getElementById("body");
  useEffect(() => {
    body.addEventListener("click", (e) => {
      if (ref.current?.contains(e.target)) {
        setIsClickInElement(true);
      } else {
        setIsClickInElement(false);
      }
    });
  }, [ref]);
  return { isClickInElement,setIsClickInElement };
};

export default useClickBody;
