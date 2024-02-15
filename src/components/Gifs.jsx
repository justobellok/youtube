
const apiKey = "A4hUxYW3AL86iaWSRWqE7bxXMwkVZM6N"

const Gifss = ({keyword = "flander"} = {}) => {
    const api = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    return fetch(api)
    
   .then((res) => res.json())
   .then(datos =>{
    const {data = []} = datos
    const gif = data.map(image =>{
        const {images, title} = image
        const { url } = images.fixed_height
        return {url, title}
    })
    return gif;
 
   })
}
 
export default Gifss;
