export default function EventCard() {
  return (
    <>
      <div className="event-card-div relative w-[20vw] h-[26.8vw] overflow-hidden">
        <img className="event-card-img" src={"/images/Rectangle 136.svg"} />
        <img
          className=" absolute bottom-0 left-0 "
          src={"/images/Rectangle 218.svg"}
        />
        <div className="event-card-overlay-img absolute top-0 left-0 w-[20vw] ">
          {" "}
          <img src={"/images/Rectangle 239.svg"} />{" "}
        </div>





        <div className="event-card-animation-div relative z-[2] flex justify-center items-center">

          <img
            className="event-card-animation-img w-[20vw] h-[27vw] z-[2]"
            src={"/images/Rectangle 227 (1).svg"}
          />


          <h1 className="absolute bottom-[1vw] left-[3vw] text-white text-[1.5vw] font-bold z-[1]">
            IDEASTORM
          </h1>
          <p className="absolute top-[3vw] left-0 text-white m-[2vw] z-[3] text-[1.1vw] font-proxima">
            E-Summit being the flagship event of ECell, is held annually brings
            together the academic community, venture capitalists, new age
            entrepreneurs and all those passionate about entrepreneurship to
            common grounds and suggestions.
          </p>
          <img
            className="event-card-animation-button z-[5] absolute left-[1.7vw] bottom-[1.4vw] w-[16vw] z-5"
            src={"/images/Rectangle 228.svg"}
          ></img>
          <h2 className="absolute top-[23vw] left-[5vw] text-[1.5vw] font-bold text-white z-10 ">
            VIEW MORE
          </h2>
          <img
            className="event-card-animation-button2 absolute w-[16vw] z-[1] bottom-[1.4vw] left-[1.8vw]"
            src={"/images/Rectangle 228 (1).svg"}
          ></img>
        </div>

        <h1 >IDEASTORM</h1>
      </div>
    </>
  );
}
