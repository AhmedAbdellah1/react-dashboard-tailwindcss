import React from 'react'

/**
 * 
 *  tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'please Enter Data'
 */
function Weather(props) {
    return (
        <div className='info'>

            {
                props.tempreature &&
                <p className='info-key'> tempreature:
                    <span className='info-value'>{props.tempreature}</span>
                </p>
            }

            {
                props.city &&
                <p className='info-key'> city:
                    <span className='info-value'>{props.city}</span>
                </p>
            }

            {
                props.country &&
                <p className='info-key'> country:
                    <span className='info-value'> {props.country}</span>
                </p>
            }

            {props.humidity &&
                <p className='info-key'>humidity:
                    <span className='info-value'>{props.humidity}</span>
                </p>
            }

            {props.description &&
                <p className='info-key'>description:
                    <span className='info-value'>{props.description}</span>
                </p>
            }

            {props.error &&
                <p className='info-key'>error:
                    <span className='info-value'>{props.error}</span>
                </p>
            }
        </div>
    )
}

export default Weather
