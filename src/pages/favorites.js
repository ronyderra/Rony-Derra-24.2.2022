import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import API from '../Utils/getData'

const Favorites = () => {
  const currentconditionsUrl = 'currentconditions/v1/'
  const locationsUrl = 'locations/v1/'
  const favorites = useSelector(state => state.favorites)
  const [favoritesData, setFavoritesData] = useState([{}])

  const getData = async () => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i]) {
        const KeyResponseData = await API.get(currentconditionsUrl + favorites[i] + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&details=true')
        const temperature = KeyResponseData.data[0].Temperature.Imperial.Value
        const weatherText = KeyResponseData.data[0].WeatherText
        const KeyResCityName = await API.get(locationsUrl + favorites[i] + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f')
        const name = KeyResCityName.data.AdministrativeArea.EnglishName
        let obj = { temperature, weatherText, name }
        setFavoritesData(favoritesData => [...favoritesData, obj])
      }
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <Container>
      <Grid >
        {favoritesData.map((item, i) => {
          return (
            <Grid key={i}>
              <Card sx={{ minWidth: 100 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 20, color: 'black' }} color="text.secondary" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.temperature}
                  </Typography>
                  <Typography variant="body2">
                    {item.weatherText}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        }
        )}
      </Grid>
    </Container>
  );
}
export default Favorites;