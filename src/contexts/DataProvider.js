import React, { createContext, useState } from 'react';

const DataContext = createContext({
    services: [],
    blogs: [],
    setServices: () => {},
    setBlogs: () => {},
});
const DataProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [blogs, setBlogs] = useState([]);
    return (
        <DataContext.Provider value={{ services, setServices, blogs, setBlogs }}>
            {children}
        </DataContext.Provider>
    );
};
export { DataContext, DataProvider };
