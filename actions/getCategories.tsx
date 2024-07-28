
const URL = `https://fakhmnextadmin-qey8.vercel.app/api/categories`;

const getCategories = async (): Promise<any> => {

    const res = await fetch(URL);

    return res.json();
}

export default getCategories;