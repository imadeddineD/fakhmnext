
const URL = `http://localhost:3001/api/products`;

const getProducts = async (): Promise<any> => {

    const res = await fetch(URL);


    return res.json();
}

export default getProducts;