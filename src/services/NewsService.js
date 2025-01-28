import axios from "./axios";

const apiService = {
    async getNews()
    {
        return await axios.get('news');
    },

    async GetByShortName(shortName,date)
    {
        return await axios.get('news/shortName?shortname='+shortName+'&date='+date);
    }
}



export default apiService
