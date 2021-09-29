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
    'x-rapidapi-key': '1891345fb3msh7827a85d339a848p1acb03jsnc83de793be1d'
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

