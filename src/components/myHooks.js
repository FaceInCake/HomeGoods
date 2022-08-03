import { useEffect, useState } from "react";

function useLocalStorage (key, defaultValue) {
    const [value, setValue] = useState(
        localStorage.getItem(key) ?? defaultValue
    );
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);
    return [value, setValue];
}

function useSessionStorage (key, defaultValue) {
    const [value, setValue] = useState(
        sessionStorage.getItem(key) ?? defaultValue
    );
    useEffect(() => {
        sessionStorage.setItem(key, value);
    }, [value, key]);
    return [value, setValue];
}
