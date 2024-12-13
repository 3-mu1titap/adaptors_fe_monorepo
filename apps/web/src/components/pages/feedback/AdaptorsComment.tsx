export default function AdaptorsComment({
  feedbackContent,
}: {
  feedbackContent: string;
}) {
  return (
    <section className="flex-1">
      볼팡이의 일침..
      <p>{feedbackContent}</p>
    </section>
  );
}
