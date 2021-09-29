import axios from "axios";


const URL = ("https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary")

export const getPlacesData = async (sw, ne)=>{

try {
    //if request is successful
const {data: {data}} = await axios.get(URL, {
  
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
   
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '5cf0c92412msh3a3e13ffbf926c7p18cea9jsn26bfdd41b31b'
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