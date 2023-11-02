import EventCard from './event_card'
export default function Events() {
  return (
    <div className='h-[55vw] bg-[#19072c] flex justify-center items-center'>
        <div className='w-4/5 ' >
        <h1 className='m-5 h-[8vw] mt-[5vw] text-5xl text-white flex items-center '>Events</h1>
        <div className="  bg-[#19072c] flex justify-between items-center">
      <EventCard/>
      <EventCard/>
      <EventCard/>
      </div></div>
    </div>
  )
}
