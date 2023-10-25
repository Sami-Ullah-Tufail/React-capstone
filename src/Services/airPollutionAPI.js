import FetchRequest from '../Helpers/FetchRequest';

const API_KEY = '&appid=bb05f364ddebe7aa23d9788a1411ada5';
const URL = 'https://api.openweathermap.org/data/2.5/';
const AIR_POLLUTION_ENDPOINT = 'air_pollution?';

const finalUrl = (lat, lon) => `${URL + AIR_POLLUTION_ENDPOINT}lat=${lat}&lon=${lon}${API_KEY}`;

const getAirPollutionDataForCountry = async (lat, lon) => {
  try {
    const fetchRequest = new FetchRequest({
      url: finalUrl(lat, lon),
    });
    const data = await fetchRequest.call();

    return data;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export default getAirPollutionDataForCountry;
