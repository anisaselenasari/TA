import { useState, useEffect } from "react"


export default function Time() {

    let tick = new Date().toLocaleTimeString() //timer initial value
    let today = new Date().toLocaleDateString() //date initial value

    const [date, setDate] = useState(today)
    const [timer, setTimer] = useState(tick)

    useEffect(() => {
        setInterval(() => {
            let ticks = new Date().toLocaleTimeString();
            let todays = new Date().toLocaleDateString();
            setTimer(ticks)
            setDate(todays)
        }, 1000);
    })

    return(
        <div className="container-fluid card-time mx-auto" >
                <h6> Date : {date}</h6>
                <h6> Time : {timer}</h6>
        </div>
    )
}