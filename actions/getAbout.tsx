
const URL = `http://localhost:3001/api/about`;

const getAbout = async (): Promise<any> => {

    const res = await fetch(`http://localhost:3001/api/about`, {
        method : "GET"
    });


    return res.json();
}
 
export default getAbout;