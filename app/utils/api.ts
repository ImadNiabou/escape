// slider1 data: explore
const getExplore = async () => {
  try {
    const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.log(error);
  }
};
export default getExplore;



// slider2 data
export const getLive = async () => {
  try {
    const res = await fetch("https://www.jsonkeeper.com/b/MQCT");
    const liveData = await res.json();
    return liveData;
  } catch (error) {
    console.log(error);
  }
};

// search data
export const getSearchResult = async () => {
  try {
    const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
    const searchResultData = await res.json();
    return searchResultData;
  } catch (error) {
    console.log(error);
  }
};
