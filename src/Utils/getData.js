import axios from 'axios';

const API_KEY = 'apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f'
const URL = 'https://dataservice.accuweather.com/'

const autocomplete = async (chosenCity) => {
  const autocompleteRes = await axios.get(URL + 'locations/v1/cities/autocomplete?' + API_KEY + '&q=' + chosenCity)
  return autocompleteRes.data
}
  
const locations = async () => {
  const topcitiesRes = await axios.get(URL + 'locations/v1/topcities/150?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f')
  return topcitiesRes.data;
}

const forecasts = async (key) => {
  const forecastsRes = await axios.get(URL + `forecasts/v1/daily/5day/` + key + `?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&details=true&metric=true`)
  return forecastsRes.data
}

const currentConditions = async (key) => {
  const conditionsRes = await axios.get(URL + 'currentconditions/v1/' + key + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&details=true')
  return conditionsRes.data
}

const cityName = async (key) => {
  const cityNameRes = await axios.get(URL + 'locations/v1/' + key + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f')
  return cityNameRes.data
}

export default { cityName, currentConditions, locations, autocomplete, forecasts, API_KEY, URL }