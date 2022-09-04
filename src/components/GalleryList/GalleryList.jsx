
import { useState, useEffect } from 'react';
import galleryItems from '../../../server/modules/gallery.data';


function GalleryList({galleryItems}){
    return (
        <>
        <ul>
            {
                galleryItems.map(galleryItems => {
                    <li key={galleryItems.id}>
                        <img src={galleryItems.path} />
                        Description: {galleryItems.description}
                        Likes: {galleryItems.likes}
                    </li>
                })
            }
        </ul>
        </>
    )
}

export default GalleryList