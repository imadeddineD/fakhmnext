
const URL = `${process.env.NEXT_PUBLIC_API_URL}/home`;

const getHome = async (): Promise<any> => {

    const res = await fetch(URL , {
        method : "GET"
    });


    return res.json();
}

export default getHome;

