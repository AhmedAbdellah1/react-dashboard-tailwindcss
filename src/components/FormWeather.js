import React from 'react'

function FormWeather(props) {
    return (
        <>
            <form onSubmit={props.gitWeather}>

                <input type="text" name="city" placeholder='City...' />

                <input type="text" name="country" placeholder='Countyr...' />

                <button>Git Weather</button>

            </form>
        </>
    )
}
export default FormWeather
