const CustomMentorDescriptionHtml = ({ detail }: { detail: string }) => {
  return (
    <div className="mentoring-detail">
      <div
        className="detail-content"
        dangerouslySetInnerHTML={{ __html: detail }} // HTML을 안전하게 삽입
      />
    </div>
  );
};

export default CustomMentorDescriptionHtml;
