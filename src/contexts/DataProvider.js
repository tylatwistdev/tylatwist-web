import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext({
    services: [],
    blogs: [],
    theme: "light",
    setServices: () => { },
    setBlogs: () => { },
});
const DataProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [blogs, setBlogs] = useState([]);

    // Load theme from localStorage or default to 'light'
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Whenever the theme changes, save it to localStorage
    useEffect(() => {
        localStorage.setItem('theme', theme);

        // Apply the theme to the body class for global effect
        document.body.className = theme;
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <DataContext.Provider value={{ services, setServices, blogs, setBlogs, theme, toggleTheme }}>
            {children}
        </DataContext.Provider>
    );
};
export { DataContext, DataProvider };
