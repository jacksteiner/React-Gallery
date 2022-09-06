import Container from '@mui/material/Container';
import Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia  from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function GalleryItem ({galleryItems, likePhoto}) {

    const [toggle, setToggle] = useState(true);

    // function increaseLikes(){
    //     console.log('Clicking Like button')
    //     console.log(galleryItems.likes);
    //     galleryItems.likes +=1
    //   }

    return (
        <div>
            {toggle ? (
                    <img onClick={() => setToggle(!toggle)}  src={galleryItems.path} />
                ) : (
                    <div onClick={() => setToggle(!toggle)}> <img src={galleryItems.path}/> <br>
                    </br>DESCRIPTION: {galleryItems.description} 
                    </div>
            )}
            
            <button onClick={()  => likePhoto(galleryItems.id)}>Like:{galleryItems.likes}</button>
        </div>
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
// style={{width: 400 + 'px'}}