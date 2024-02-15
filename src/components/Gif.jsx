import "./style/gif.css"


const Gif = ({url, title, image}) => {
    return ( 
        <>
        <main className="main">
            <img src={url} alt={title} />
            <article className="article">


        <section>
            <img className="image" src={`https:/unavatar.io/${image}`} alt="" />
            <p>{title}</p>
        </section>
            <div>
                <strong>Rick y Morty</strong>
            </div>

            </article>
        </main>

        </>
     );
}
 
export default Gif;