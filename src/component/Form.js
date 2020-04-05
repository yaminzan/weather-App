import React from 'react';

const Form = (props) => {
        return (
            <form onSubmit={props.getWeather}>
                <div class="grid-container">
                <div class="item text-space" >
                <input type="text" name="city" placeholder="city..." />
                </div>
                <div class="item text-space">
                <input type="text" name="country" placeholder="country...." />
                </div>
                <div class="item text-space">
                <button class="btn" >get weather</button>
                </div>
                </div>
            </form>
        )
}

export default Form