import axios from 'axios';
let perPage = 15;

export async function fetchPhotosByInput(inputSearch, page) {
    const ACCESS = 'oyaKjse9erYpC8_merX5E1mvW6IUZrjoER6jMTgJ_Rs';
    const url = `https://api.unsplash.com/search/photos?query=${inputSearch}&client_id=${ACCESS}`;
    const respons = await axios.get(url, {
        params: {
          per_page: perPage,
          page: page}});
    const photos = respons.data;
    
    return photos;
    

 }