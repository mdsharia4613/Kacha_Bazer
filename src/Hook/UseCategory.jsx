import { useEffect, useState } from "react";

const useCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/category_data.json") // public ফোল্ডারে থাকলে / দিতে হবে
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return data; // এখানে শুধুমাত্র data return করবে
};

export default useCategory;
