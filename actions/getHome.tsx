
const URL = `https://fakhmnextadmin.vercel.app/api/home`;

const getHome = async (): Promise<any> => {

    const res = await fetch(URL);


    return res.json();
}

export default getHome;