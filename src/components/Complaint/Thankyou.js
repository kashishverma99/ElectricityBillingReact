import React from 'react'
import img5 from '../../Images/tccc2.jpg';

class Thankyou extends React.Component {
    render() {
        return (
            <div className="f">
                <div style={{ backgroundImage: `url(${img5})`, height:"500px",backgroundSize: "cover",padding:"100px"}}>            
                <h1 className="text-white">  <b> Thank You !!!</b> </h1>
                   <h2 className="text-white"> Your Complaint has been registered successfully.</h2>
                 
                </div>
            </div>
        )
    }
}

export default Thankyou