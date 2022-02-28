import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Favorites() {
  const currentconditionsUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const locationsUrl = 'http://dataservice.accuweather.com/locations/v1/'
  const favorites = useSelector(state => state.favorites)
  const [favoritesData, setFavoritesData] = useState([{}])

  const getData = async () => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i]) {
        const KeyResponseData = await axios.get(currentconditionsUrl + favorites[i] + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&details=true')
        const temperature = KeyResponseData.data[0].Temperature.Imperial.Value
        const weatherText = KeyResponseData.data[0].WeatherText
        const KeyResCityName = await axios.get(locationsUrl + favorites[i] + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f')
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