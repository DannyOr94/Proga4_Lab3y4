import { useRef, useState } from "react";

export  function useUserState() {

    const login = (email, password) => {

        return email === "admin" && password === "1234";{        
            
        return true;
    }
      return false;
    };

    const logout = () => {
      setUser(null)
    }

    return {login};
}