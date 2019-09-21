import React from 'react'
import Clock from 'react-live-clock';

function Time() {
    return (
        <div style={{
            height: "45px",
            textAlign: "left",
            paddingTop: "10px",
            backgroundColor: "#F7F7F7"

        }}>

            <div style={{
                paddingLeft: "47px",
                color: "#555555"
            }}>Real-Time Data:<Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A '} ticking={true} timezoom="US/Pacific" style={{
                paddingLeft: "40px"
            }}/> 
            </div>
        </div>
    )
}

export default Time;