import React from 'react'
import { Link } from 'react-router-dom';
function NavlistPhone(props) {
    return (
        props.items.map((item) => {
            return (
                <button key={item.id} onClick={() => { }} className={`row my-2 p-2 border-0  rounded-2 ${props.isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} bg-opacity-50 navitem`}>
                    <Link to={item.to} className={`${props.isDarkMode ? "text-light" : "text-dark"} text-decoration-none m-0 p-0 row`}>
                        <div className='col-3'>
                            <img src={item.imgsrc} alt={item.imgalt} className='col-6' />
                        </div>
                        <div className='col-9 d-flex flex-column justify-content-center'>
                            <h6 className='col-12'>{item.text}</h6 >
                        </div>
                    </Link>
                </button>
            )
        })
    )
}
export default NavlistPhone