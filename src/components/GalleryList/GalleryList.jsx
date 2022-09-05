import Container from '@mui/material/Container';
import Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryItems}){
    return (
        <Grid container spacing={2}>
            {
                galleryItems.map(galleryItems => {
                    return(
                    <GalleryItem key={galleryItems.id} galleryItems={galleryItems}/>
                    )
                })
            }
        </Grid>
    );
}

export default GalleryList