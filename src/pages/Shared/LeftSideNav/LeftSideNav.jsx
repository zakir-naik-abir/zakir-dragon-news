import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-1">
            <h2 className="text-2xl font-semibold">All Categories</h2>
            <div className="flex lg:inline-block md:inline-block">
                {
                    categories.map(category => 
                    <Link 
                        className="inline-block text-xl font-semibold hover:bg-slate-200 p-2 lg:px-12 md:px-2  w-full  " 
                        key={category.id}
                        to={`/category/${category.id}`}
                        >{category.name}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;