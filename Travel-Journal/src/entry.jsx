import marker from "/src/assets/marker.png"
export default function Entry(props){
    return(
        <main>
            <div className="mainpiccontainer"><img src={props.img.src} alt={props.img.alt} className="mainpic"/></div>
            <div className="secside">
                <div className="frstlyn">
                    <img src={marker} alt="marker.png" className="marker"/>
                    <h3 className="county">{props.country}</h3>
                    <a href={props.googleMapsLink}>View on google maps</a>
                </div>
                <h1 className="placename">{props.title}</h1>
                <h4 className="datess">{props.dates}</h4>
                <p>{props.text}</p>
            </div>
        </main>
    )
}