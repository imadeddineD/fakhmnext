
const URL = `https://fakhmnextadmin.vercel.app/api/products`;

const getProducts = async (): Promise<any> => {

    const res = await fetch(URL);


    return res.json();
}

export default getProducts;