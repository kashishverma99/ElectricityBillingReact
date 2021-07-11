import React from 'react'
import img5 from '../../Images/b1.jpg';

class ThankyouBill extends React.Component {
    render() {
        return (
            <div className="f">
                <div style={{ backgroundImage: `url(${img5})`, height:"500px",backgroundSize: "cover",padding:"100px"}}>            
                <h1 className="text-white">  <b> Thank You !!! </b> Your Payment is Successfully Done. </h1>
               

                 
                </div>
            </div>
        )
    }
}

export default ThankyouBill