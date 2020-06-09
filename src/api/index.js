import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    //Try is going to be executed if the fetch is successful
    try {
        const {data: { confirmed, recovered,deaths,lastUpdate }} = await axios.get(url);

        return { confirmed, recovered, deaths,lastUpdate };
        //I have no clue what this does
        //response.data 
        //return response;
    } catch (error) {

    }
}

export const fetchDailyDate = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
    } catch (error) {

    }
}