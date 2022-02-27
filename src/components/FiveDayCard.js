import * as React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export default function FiveDayCard(props) {
    console.log(props.data[0].Date)
    return (
        <div >
            {props.data[0].Date}
            {/* <Card>
                <CardActions>
                    <Button size="small">Add To Favorites</Button>
                </CardActions>
                <Typography gutterBottom variant="h5" component="h2"> Scatterd Clouds</Typography>
                <CardContent sx={{ flexGrow: 1, flexDirection: 'row' }}>
                    <Card sx={{ height: '100%' }}>
                        sunday
                    </Card>
                    <Card sx={{ height: '100%', }}>
                        monday
                    </Card>
                </CardContent>
            </Card> */}
        </div>
    );
}