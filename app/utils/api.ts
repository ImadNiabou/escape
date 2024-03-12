
const getExplore = async () => {
try{
    const res = await fetch("https://www.jsonkeeper.com/b/4G1G")
    const exploreData = await res.json();
    return exploreData;
}catch(error){
    console.log(error)
}
}
 export default getExplore



export const getLive = async () => {
    try{
        const res = await fetch("https://www.jsonkeeper.com/b/MQCT")
        const liveData = await res.json();
        return liveData;
    }catch(error){
        console.log(error)
    }
    }

    

