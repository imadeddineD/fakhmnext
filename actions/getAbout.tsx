
const URL = `https://fakhmnextadmin-qey8.vercel.app/api/about`;

const getAbout = async (): Promise<any> => {

    const res = await fetch(URL);


    return res.json();
}

export default getAbout;