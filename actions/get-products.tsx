import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// Interface for all the filters
// Note: all of them will be options=al '?'
interface Query {
    categoryId?: string;  
    colorId?: string;  
    sizeId?: string;  
    isFeatured?: boolean;  
};

const getProducts = async (query: Query): Promise<Product[]> => {
    // we use this qs.stringifyURL as we need some filters in our url
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });

    const res = await fetch(url);

    return res.json();
};

export default getProducts;