import React from 'react'

import './app-audio.css'

export default class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.state = { play: false };
  };

  componentDidMount() {
    this.audio.addEventListener("timeupdate", () => {
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = (this.timeline.offsetWidth * ratio) + this.timeline.offsetLeft;
      this.positionHandle(position);
    });

    this.audio.addEventListener("ended", () => {
      if (this.props.ended) {
        this.props.ended();
      }
    });
  };

  positionHandle = (position) => {
    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + "px";
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = "0px";
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + "px";
    }
  };

  mouseMove = (e) => {
    this.positionHandle(e.pageX);
    this.audio.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration;
  };

  mouseUp = (e) => {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  mouseDown = (e) => {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };

  play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  };

  render() {
      return  (
        <div className="audio">
          <audio  src={this.props.audio}
                  ref={(audio) => { this.audio = audio } }
                  autoPlay={false}
                />
          <span onClick={this.play} className="audio-controls">
            {!this.state.play ? <i class="fas fa-play-circle"></i> : <i class="fas fa-pause-circle"></i>}
          </span>
          <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
            <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} />
          </div>
        </div>
      )
  }
}