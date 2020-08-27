import React, { Component } from 'react'
import PlayAudio from 'react-simple-audio-player'
import chroma from "chroma-js"

const colorScale = chroma
    .scale([
        '#008966',
        '#ffffff',
    ])
    .mode('lch')
    .colors(5)

class Player extends Component {
    render () {
        return <PlayAudio url={this.props.audioSrc} colorScale={colorScale} />
    }
}
export default Player