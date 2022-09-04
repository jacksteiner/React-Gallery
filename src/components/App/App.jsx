import Axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import './App.css';

function App() {

  const [galleryItems, setGalleryItems] = useState([]);
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
        <p>Gallery goes here</p>
        <GalleryList listProp={galleryItems}/>
        <GalleryItem />
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
