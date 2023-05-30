import api from './api';


const  searchCity = async (searchValue)  => {
    try {
      const response = await api.get(`/search-weather/${searchValue}`);
      const { original: { data } } = response.data;
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  const  getHistorica = async (searchValue)  => {
    try {
      const response = await api.get(`/search-historic/${searchValue}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  export { searchCity,getHistorica };
  
  
  
  
  
  