import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import type { Payload } from "../types/payload";

export const useAuth = () => {
  const [ authInfo, setAuthInfo ] = useState<{
    checked: boolean,
    isAuthenticated: boolean
  }>({checked: false, isAuthenticated: false});

  useEffect(() => {
    const token = localStorage.getItem('token');
    try {
      if (token) {
        const decodeToken = jwtDecode<Payload>(token);
        if (decodeToken.exp * 1000 < Date.now()) {
          localStorage.removeItem('token');
          setAuthInfo({checked: true, isAuthenticated: false});
        } else {
          setAuthInfo({checked: true, isAuthenticated: true});
        }
      } else {
        setAuthInfo({checked: true, isAuthenticated: false});
      }
    } catch (error) {
      console.log(error)
      setAuthInfo({checked: false, isAuthenticated: false});
    }
  }, []);

  return authInfo;
};
