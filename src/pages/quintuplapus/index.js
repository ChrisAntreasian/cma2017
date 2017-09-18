import React, { Component } from 'react'
import FlipPage from 'react-flip-page'

import cover from './img/cover.jpg'
import pg11 from './img/pg1-1.jpg'
import pg12 from './img/pg1-2.jpg'

class Quintuplapus extends Component {

    render() {
        return (
            <div className="quint">
                <h1>Welcome to the Quintpuapus</h1>

                <FlipPage orientation="horizontal">
                  <img src={cover} />
                  <img src={pg11} />
                  <img src={pg12} />
                </FlipPage>

            </div>
        )
    }
}

export default Quintuplapus;