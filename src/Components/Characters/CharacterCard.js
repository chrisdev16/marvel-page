import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({name, image}) {

    return (
        <Card sx={{ borderRadius: "20px", maxWidth: "250px", minWidth: "200px", maxHeight: "500px"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200px"
                    image={image}
                    alt="marvel character image"
                />
                <hr
                   style={{margin: "0px", backgroundColor: "#fff", height: 5}}
                />
                <CardContent sx={{backgroundColor: "#151515", height: "80px", padding: "20px", display: "flex", alignItems: "center"}}>
                    <Typography gutterBottom variant="h6"  component="div" sx={{color: "#fff"}}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}