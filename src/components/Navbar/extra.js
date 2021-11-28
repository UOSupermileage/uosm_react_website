import React, { Component } from 'react'
import { Element } from 'react-scroll';
import Welcome from '../Welcome/Welcome';
// wrap your content in the Element from react-scroll

export default function Extra () {
    return (
        <React.Fragment>
            <Element id='example-destination' name='example-destination'>
                <Welcome/>
            </Element>
        </React.Fragment>
    )
}

