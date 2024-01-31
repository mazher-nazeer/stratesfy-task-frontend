import axios from 'axios';
console.log('ent',  process.env)

const params = {
    headers: {
        Authorization: "bearer" + process.env.STRIPE_API_KEY,
        // "Access-Control-Allow-Origin": "*",
  
    }
};

export const  fetchDataFromApi = async (endpoint) => {
    try {
        const {data} = await axios.get( process.env.REACT_APP_DEV_BASE_URL + endpoint, params);
            return data
    }
    catch (error) {
        console.log(error)
        return error
    }

}