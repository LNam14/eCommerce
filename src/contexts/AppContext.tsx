"use client"
import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    return (
        <AppContext.Provider value={{ loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
};
