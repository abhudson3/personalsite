function Card({link, description}){
    return(
        <div>
            <a href={link}>LinkedIn</a>
            <p>{description}</p>
        </div>
    )
}
export default Card