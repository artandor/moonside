import React, { Component } from 'react'
import TwitchEmbedVideo from "react-twitch-embed-video"

export default class Stream extends Component <any, any> {
    render() {
        return (
            <TwitchEmbedVideo
                autoplay
                channel={this.props.channel}
                height="100%"
                layout="video"
                muted={true}
                targetId={"twitch-embed-" + this.props.channel}
            />
        )
    }
}
