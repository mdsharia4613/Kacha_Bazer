import { useEffect, useState } from "react";

const useCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch("/category_data.json") 
        fetch("https://mocki.io/v1/2084e3df-f98a-48d8-9a2a-fa1d0718cbc6") 
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return data; 
};

export default useCategory;
