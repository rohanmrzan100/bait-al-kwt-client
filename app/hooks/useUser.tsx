"use client";
import { BASE_URL } from "@/Constants";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  name: string;
  email: string;
  avatar: string | null;
  role: string;
}
export const UserContext = createContext<UserContextType | null>(null);

interface Props {
  [propName: string]: any;
}



export const UserContextProvider = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [avatar, setAvatar] = useState<string | null>("");

  useEffect(() => {
    async function GetUser() {
      try {
        const response = await axios.get(`${BASE_URL}/api/auth/success`, {
          withCredentials: true,
        });
  
        if (response.status === 200) {
          setName(response.data.user.name);
          setEmail(response.data.user.email);
          setRole(response.data.user.role);
          setAvatar(response.data.user.avatar);
         
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    GetUser();
  }, []);


  const value = {
    name,
    email,
    role,
    avatar,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within UserContextProvider");
  }
  return context;
};
