import cardData from "../component data/cardData.js";

const Main = () => {
    const renderCard = cardData.map((datum) => (
        <Card key={datum.id} {...datum} />
    ));
    return <main>{renderCard}</main>;
};

const Card = ({
    image,
    country,
    locationUrl,
    location,
    startDate,
    endDate,
    locationDesc,
}) => {
    return (
        <section className="card-container">
            <div className="card">
                <img className="location-image" src={image} alt="location image" />
                <div className="card-info">
                    <div className="top-info">
                        <img
                            src="/assets/images/icons/location-icon.png"
                            alt="location icon"
                        />
                        <b>{country}</b>
                        <a href={locationUrl}>View on Google Maps</a>
                    </div>

                    <h2>{location}</h2>

                    <div className="main-info">
                        <div className="dates">
                            {startDate} - {endDate}
                        </div>
                        <div className="main">{locationDesc}</div>
                    </div>
                </div>
            </div>

            <hr />
        </section>
    );
};

export default Main;
