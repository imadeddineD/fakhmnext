
const URL = `http://localhost:3001/api/categories`;

const getCategories = async (): Promise<any> => {

    const res = await fetch(URL);

    return res.json();
}

export default getCategories;