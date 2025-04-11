import { useState } from "react";

const Schedule = () => {

    const [day0, setday0] = useState(
        [
            {title : "Inauguration Ceremony", description: "This is Inauguration ceremony", location: "Kalidas", time: "6 PM", id: 1},
            {title : "star gazing", description: "this is star gazing", location: "Tata Steel", time : "8 PM", id : 2}
        ]
    )

    const [day1, setday1] = useState(
        [
            {title:"Hoverpod", description: "This is hoverpod", location:"Vikramshila", time:"2 PM", id:3},
            {title: "Liftoff", description: "This is liftoff", location:"MG Ground", time:"5 PM", id:1},
            {title: "Eggstravaganza", description: "This is Eggstravaganza", location:"GymK", time:"6 PM", id:2}
        ]
    );

    const [day2, setday2] = useState(
        [
            {title: "CosmoMath", description: "This is CosmoMath", location:"CIC", time:"3 PM", id:3},
            {title: "Case Study", description: "This is Case Study", location:"Gargi", time:"4 PM", id:2},
            {title: "Paper Presentation", description: "This is paper presentation", location: "Maitryee", time:"5 PM", id:1}           
        ]
    )

    const [currentDay, setCurrentDay] = useState(day0)

    return (  
        <div className="schedule">
            <h1 className="schedule-heading">Schedule</h1>
            <div className="day-header">
                <div className="day-display">
                    <div onClick={() => setCurrentDay(day0)}>
                        <span className="day-num">0</span>
                        <span className="day-date">1 Aug</span>
                    </div>
                </div>
                <div className="day-display">
                    <div onClick={() => setCurrentDay(day1)}>
                        <span className="day-num">1</span>
                        <span className="day-date">2 Aug</span>
                    </div>
                </div>
                <div className="day-display">
                    <div onClick={() => setCurrentDay(day2)}>
                        <span className="day-num">2</span>
                        <span className="day-date">3 Aug</span>
                    </div>
                </div>
            </div>
            <div className="event-list">
                {currentDay.map((event) => (
                    <div className="event-card" key={event.id}>
                        <h2 className="schedule-event-heading">{event.title}</h2>
                        <p className="schedule-event-description">{event.description}</p>
                        <p className="schedule-event-location"><strong>Location:</strong> {event.location}</p>
                        <p className="schedule-event-time"><strong>Time:</strong> {event.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Schedule;