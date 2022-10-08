/* eslint-disable @typescript-eslint/no-empty-function */

import React from "react";

interface SearchContextValue {
    search: boolean;
    currentLayout: string;
    openSearch: (layout: string) => void;
    closeSearch: () => void;
}

export const SearchContext = React.createContext<SearchContextValue>({
    search: false,
    currentLayout: "",
    openSearch: () => {},
    closeSearch: () => {},
});

export default function SearchProvider({ children } : { children: React.ReactNode }) {
    
    const [search, setSearch] = React.useState(false);
    const [currentLayout, setCurrentLayout] = React.useState("");

    const openSearch = (layout: string) => {
        setSearch(true);
        setCurrentLayout(layout);
    };

    const closeSearch = () => {
        setSearch(false);
        setCurrentLayout("");
    };

    return (
        <SearchContext.Provider
            value={{
                search,
                currentLayout,
                openSearch,
                closeSearch,
            }}
        >
            <div className="min-h-screen w-screen fixed z-[100]">
                
            </div>
            {children}
        </SearchContext.Provider>
    );
};