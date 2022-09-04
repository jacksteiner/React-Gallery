
function GalleryList({listProp}){
    return (
        <>
        <p>Test</p>
        <ul>
            {
                listProp.map(galleryItems => {
                    return(
                    <li key={galleryItems.id}>
                        <img src={galleryItems.path} />
                        Description: {galleryItems.description}
                        Likes: {galleryItems.likes}
                    </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default GalleryList