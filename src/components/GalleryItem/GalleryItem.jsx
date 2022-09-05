import Container from '@mui/material/Container';
import Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia  from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useState} from 'react';

function GalleryItem ({galleryItems}) {
    // const [toggle, setToggle] = useState(false);
    return (
        <Grid item md={8}>
        <Card>
            <CardMedia 
            component='img'
            height='1000'
            image={galleryItems.path}>
            {/* <img src={galleryItems.path} /> */}
            </CardMedia>
            <p>Description: {galleryItems.description} </p>
            <p>Likes: {galleryItems.likes}</p>
         </Card>
         </Grid>
    )
}

export default GalleryItem

// onClick={() => setToggle(!toggle)} onClick={()=> console.log('Card Clicked!')}
{/* <Card elevation={4}>
<div>
{toggle ?(
    {image.description}
): (
    <Typography>
        <img src={image.path}></img>
    </Typography>
)}
</div>
<Button onClick={() => setToggle(!toggle)}>
    Toggle
</Button>

</Card> */}