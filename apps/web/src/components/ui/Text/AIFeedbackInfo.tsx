import ChevronText from './ChevronText';

export default function AIFeedbackInfo() {
  return (
    <div className="flex items-start ">
      <ChevronText text="AI 피드백이란?" className="min-w-[180px]" />
      <p className="text-lg text-adaptorsGray leading-relaxed px-1 lg:px-2">
        Adaptors는 자기소개서, 포트폴리오, 이력서와 같은 취업 관련 문서를
        분석하여 취업 경쟁력을 높이는 AI 진단 서비스를 제공합니다.
        <br />
        <br />
        사용자가 업로드한 문서를 정밀하게 분석하여 강점과 개선점을 명확히
        제시하고, 문서의 설득력을 높입니다. 단순히 문장을 고치는 것을 넘어
        논리적 구성, 강점 강조, 문장 개선 등 종합적인 방향성을 제공합니다.
        <br />
        <span className="text-adaptorsBlue/70">
          Adaptors에서의 멘토링 이용 기록이 있다면, 축적된 데이터를 바탕으로
          더욱 개인화된 피드백을 제공합니다.
        </span>
        <br />
        <br />
        지원하고자 하는 직무와 업계에 최적화된 조언을 드립니다.여러분의 꿈을 한
        단계 더 가까이 만들어줄 혁신적인 서비스, 지금 바로 경험해보세요! 🚀
      </p>
    </div>
  );
}
