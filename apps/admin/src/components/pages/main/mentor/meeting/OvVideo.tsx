import React, { Component, createRef } from 'react';
import { StreamManager } from 'openvidu-browser'; // OpenVidu에서 StreamManager 타입을 가져옵니다.

interface OpenViduVideoComponentProps {
  streamManager: StreamManager; // StreamManager 타입을 지정합니다.
}

export default class OpenViduVideoComponent extends Component<OpenViduVideoComponentProps> {
  private videoRef = createRef<HTMLVideoElement>(); // HTMLVideoElement 타입으로 ref를 정의합니다.

  componentDidMount() {
    if (this.videoRef.current) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  componentDidUpdate(prevProps: OpenViduVideoComponentProps) {
    if (
      prevProps.streamManager !== this.props.streamManager &&
      this.videoRef.current
    ) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  render() {
    return <video autoPlay ref={this.videoRef} />;
  }
}
