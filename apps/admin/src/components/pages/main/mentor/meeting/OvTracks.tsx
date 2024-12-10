import UserVideoComponent from './UserVideoComponent';

export default function OvTracks({
  sessionUuid,
  leaveSession,
  mainStreamManager,
  publisher,
  handleMainVideoStream,
  subscribers,
}: {
  sessionUuid: any;
  leaveSession: any;
  mainStreamManager: any;
  publisher: any;
  handleMainVideoStream: any;
  subscribers: any;
}) {
  return (
    <div id="session">
      <div id="session-header">
        <h1 id="session-title">{sessionUuid}</h1>
        <input
          className="btn btn-large btn-danger"
          type="button"
          id="buttonLeaveSession"
          onClick={leaveSession}
          value="Leave session"
        />
      </div>

      {mainStreamManager !== undefined ? (
        <div id="main-video" className="col-md-6">
          <UserVideoComponent streamManager={mainStreamManager} />
        </div>
      ) : null}
      <div id="video-container" className="col-md-6">
        {publisher !== undefined ? (
          <div
            className="stream-container col-md-6 col-xs-6"
            onClick={() => handleMainVideoStream(publisher)}
          >
            <UserVideoComponent streamManager={publisher} />
          </div>
        ) : null}
        {subscribers.map((sub: any) => (
          <div
            key={sub.id}
            className="stream-container col-md-6 col-xs-6"
            onClick={() => handleMainVideoStream(sub)}
          >
            <span>{sub.id}</span>
            <UserVideoComponent streamManager={sub} />
          </div>
        ))}
      </div>
    </div>
  );
}
