import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'


export default function Service(service) {
    return (

        <ul>
            <li>
                <div className="check-icon">
                    <IoMdCheckmarkCircleOutline />
                </div>
                <p>
                    {service.service.serve}
                </p>
            </li>
        </ul>

    )
}
