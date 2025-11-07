import { useEffect, useState } from "react";

const useCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/category_data.json") 
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return data; 
};

export default useCategory;
