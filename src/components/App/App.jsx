import Axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import Container from '@mui/material/Container';
import Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {

  const [galleryItems, setGalleryItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  // console.log(setGalleryItems)
  // const [galleryList, setGalleryList] = useState('');

  useEffect(() => {
    fetchGallery();
  }, [])

  const fetchGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryItems(response.data)
    }).catch(error => {
      console.log(error);
      alert('Something Went wrong')
    });
  }

  console.log(galleryItems);


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Container>
        <GalleryList galleryItems={galleryItems}/>
        </Container>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
