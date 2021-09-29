import axios from "axios";




export const getPlacesData = async (type, sw, ne)=>{

try {
    //if request is successful
const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
  
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
   
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
  }
});

return data;

}
//if request doesnt work
 catch (error) {
     console.log(error)
    
}

}

// 08f1a65c3bmsh1b982715956619dp163a26jsn13ade802e6e4

// 5cf0c92412msh3a3e13ffbf926c7p18cea9jsn26bfdd41b31b


export const getWeatherData = async (lat, lng)=> {
  
  try {
    
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: {

        lon: lng,
 
        lat: lat,
 
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
      }
    })
return data
  } catch (error) {
    console.log(error)
  }

}
