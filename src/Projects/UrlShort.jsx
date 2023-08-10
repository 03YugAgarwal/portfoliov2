import { useEffect } from "react"
import { useParams } from "react-router-dom"

const UrlShort = () => {

    const { short } = useParams()

    useEffect(()=>{
        fetch(`https://urlshortner-backend-dmn3.onrender.com/${short}`)
        .then(data => {
            return data.json()
        })
        .then(post => {
            console.log(post);

            if(post.error){
                window.location.href = 'https://yugagarwal.codes/404';
                return
            }

            window.location.href = 'https://'+post.url;
        })


    },[short])


  return (
    <div>
        <p>Redirecting in few seconds.</p>
    </div>
  )
}

export default UrlShort