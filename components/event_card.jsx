export default function EventCard() {
    return (
      <>
        <div className="event-card-div relative w-[20vw] h-[27vw] overflow-hidden">
          <img className="event-card-img" src={'/images/Rectangle 136.svg'} />
          <img className=" absolute bottom-0 left-0" src={'/images/Rectangle 218.svg'} />
          <div className="event-card-overlay-img absolute top-0 left-0 w-[20vw] ">
            {" "}
            <img src={'/images/Rectangle 239.svg'} />{" "}
          </div>
          <div className="event-card-animation-div flex justify-center items-center">
            <img className="event-card-animation-img" src={'/images/Rectangle 227 (1).svg'} />
            <h1 className="absolute bottom-[1vw] left-[3vw] text-white text-[1.5vw] font-bold z-1">IDEASTORM</h1>
            <p>
              E-Summit being the flagship event of ECell, is held annually brings
              together the academic community, venture capitalists, new age
              entrepreneurs and all those passionate about entrepreneurship to
              common grounds and suggestions.
            </p>
            <img className="event-card-animation-button" src={'/images/Rectangle 228.svg'}></img>
            <h2>VIEW MORE</h2>
            <img  className="event-card-animation-button2" src={'/images/Rectangle 228 (1).svg'}></img>
  
          </div>
  
          <h1>IDEASTORM</h1>
        </div>
      </>
    );
  }
  