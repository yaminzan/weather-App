import React, { Fragment } from 'react';




const Weather = (props) => {
        return (
            <Fragment>
            <div><ol>
                <li>
                {
                    props.tempreature && <p><h2>tempreature:  {props.tempreature}</h2></p>
                }
                </li>
                <li>
                {
                    props.city && <p><h2>city: {props.city}</h2></p>
                }
                </li>
                <li>
                {
                    props.country && <p><h2>country: {props.country}</h2></p>
                }
                </li>
                <li>
                {
                    props.humidity && <p><h2>humidity: {props.humidity}</h2></p>
                }
                </li>
                <li>
                {
                    props.description && <p><h2>description: {props.description}</h2></p>
                }
                </li>
                <li>
                {
                    props.error && <p><h2>error: {props.error}</h2></p>
                }
                </li>
                </ol>
            </div></Fragment>
        )
}

export default Weather 