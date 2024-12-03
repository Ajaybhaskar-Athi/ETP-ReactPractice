import { createContext, useContext, useState } from "react";

const arr = [
    { id: 1, name: "Ajay", dept: "Full Stack" },
    { id: 2, name: "Kushi", dept: "marketing" },
    { id: 3, name: "Pranav", dept: "sales" }
];

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const ContextProvider = (props) => {
    const [data, setData] = useState(arr);

    return (
        <AppContext.Provider value={{ data, setData }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
