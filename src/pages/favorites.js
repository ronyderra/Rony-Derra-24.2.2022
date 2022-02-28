import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Favorites() {
  const currentconditionsUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const locationsUrl = 'http://dataservice.accuweather.com/locations/v1/'
  const favorites = useSelector(state => state.favorites)
  const [favoritesData, setFavoritesData] = useState([{}])

  const getData = async () => {
    for (let i = 0; i < favorites.length; i++) {
      const KeyResponseData = await axios.get(currentconditionsUrl + favorites[i] + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&details=true')
      const temperature = KeyResponseData.data[0].Temperature.Imperial.Value
      const weatherText = KeyResponseData.data[0].WeatherText
      const KeyResCityName = await axios.get(locationsUrl + favorites[i] + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f')
      const name = KeyResCityName.data.AdministrativeArea.EnglishName
      let obj = { temperature, weatherText, name }
      setFavoritesData(favoritesData => [...favoritesData, obj])
    }
  }

  useEffect(() => {
    getData()
  },[]);

  return (
    <div>
    {favoritesData?.map((item, i) =>
      <div key={i}>{item.name}</div>
    )}
  </div>
  );
}