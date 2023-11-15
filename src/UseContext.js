import { createContext, useState,useContext } from "react";

const UserContext = createContext(undefined);
export const UserProvider = ({ children }) => {
    const [user] = useState({
        name:"Rekha",
        phone:"138756"
    });
    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
};

export const useUser = () => useContext(UserContext);
