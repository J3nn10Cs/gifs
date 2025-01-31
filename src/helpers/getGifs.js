export const getGifs = async ({category}) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Snm7LwBtaA2sqOo3lNtK2rfdssdb8xdc&q=${category}&limit=20`

  const response = await fetch(url);
  
  const {data} = await response.json();
  
  //traemos solo lo que nos interesa
  const gif = data.map( img => ({
    id : img.id,
    title : img.title,
    url : img.images.downsized_medium.url
  }))

  return gif
}
