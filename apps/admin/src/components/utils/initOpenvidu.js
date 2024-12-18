import { OpenVidu } from 'openvidu-browser';
import { handleStreamCreated, handleStreamDestroyed } from './streamHandler';

/**
 * OpenVidu 세션 초기화 함수
 * @param {Object} params
 * @param {string} params.sessionId - 세션 ID
 * @param {string} params.userId - 사용자 ID
 * @param {string} params.nickname - 사용자 닉네임
 * @param {Function} params.setSubscriberMap - 구독자 맵을 설정하는 함수
 * @param {Function} params.setPublisher - 퍼블리셔를 설정하는 함수
 * @param {Function} params.setSession - 세션을 설정하는 함수
 */
export default async function initOpenVidu({
  sessionId,
  userId,
  nickname,
  setSubscriberMap,
  setPublisher,
  setSession,
}) {
  const OV = new OpenVidu();
  OV.enableProdMode();

  const session = OV.initSession();
  session.on('streamCreated', handleStreamCreated(session, setSubscriberMap));
  session.on('streamDestroyed', handleStreamDestroyed(setSubscriberMap));
  session.on('exception', console.warn);

  // Fetch token
  // const token = await getToken(sessionId);
  // if (!token) {
  //   console.error('토큰을 가져오는 데 실패했습니다.');
  //   return;
  // }

  try {
    await session.connect(
      'wss://ym-test.shop?sessionId=ses_MuiChvJBSb&token=tok_CyxPxVK9TJeyiwLn',
      { clientData: nickname }
    );
  } catch (error) {
    console.log('세션 연결 중 오류 발생:', error.code, error.message);
    return;
  }

  const publisherProperties = {
    publishAudio: true, // 오디오 퍼블리싱 여부
    publishVideo: true, // 비디오 퍼블리싱 여부
    resolution: '1280x720', // 비디오 해상도
    insertMode: 'APPEND', // 비디오 삽입 모드
    mirror: false, // 로컬 비디오 미러링 여부
  };

  const publisher = await OV.initPublisherAsync(undefined, publisherProperties);
  session.publish(publisher);

  setPublisher(publisher);
  setSession(session);
}

/**
 * 세션 ID에 대한 토큰을 가져오는 함수
 * @param {string} sessionId - 세션 ID
 * @returns {Promise<string>} - 세션에 대한 토큰
 */
async function getToken(sessionId) {
  const response = await fetch(
    `http://YOUR_SERVER_URL/api/sessions/${sessionId}/connections`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    console.error('토큰 요청 실패:', response.statusText);
    return null;
  }

  const data = await response.json();
  return data.token; // 응답에서 토큰 반환
}
