import ScoreStar from './ScoreStar';

const reviews = [
  {
    reviewerId: 'user123',
    title: 'Great product!',
    comment:
      "This product exceeded my expectations. It's well-made and does exactly what it promises.",
    score: 4.7,
  },
  {
    reviewerId: 'jane_doe',
    title: 'Good, but could be better',
    comment:
      "The product is good overall, but there's room for improvement in terms of durability.",
    score: 3.5,
  },
  {
    reviewerId: 'tech_enthusiast',
    title: '실망시키지않네요....',
    comment:
      '항목별로 하나하나 꼼꼼히 살펴보고 피드백 해주십니다! 멘토링 전과 비교해서 정말 완성도 높은 자기소개서가 완성됐어요. 좋은 점과 부족한 점을 정확히 분석해주시니 저도 안목이 생겨 단점 보완에 집중할 수 있었습니다. ',
    score: 5.0,
  },
  {
    reviewerId: 'happy_customer',
    title: 'Amazing!',
    comment:
      'This is by far the best purchase I have ever made. Highly recommend!',
    score: 5.0,
  },
  {
    reviewerId: 'picky_buyer',
    title: 'Decent but pricey',
    comment: 'The quality is good, but I think it’s a bit overpriced.',
    score: 3.8,
  },
  {
    reviewerId: 'shopaholic',
    title: 'Worth the hype',
    comment:
      'I saw so many reviews and decided to try it. Definitely worth it.',
    score: 4.6,
  },
  {
    reviewerId: 'minimalist_guy',
    title: 'Too many features',
    comment:
      'I prefer simpler products, and this one has more features than I actually need.',
    score: 3.0,
  },
  {
    reviewerId: '김수현',
    title: '완전 추천합니다!',
    comment:
      '친구에게 추천받아서 사용해봤는데 진짜 좋네요. 삶의 질이 달라졌습니다!',
    score: 4.9,
  },
  {
    reviewerId: 'traveler2023',
    title: 'Good for travel',
    comment:
      'Lightweight and easy to carry. Perfect for frequent travelers like me.',
    score: 4.2,
  },
  {
    reviewerId: 'foodie_lover',
    title: 'Not for everyone',
    comment:
      'I expected more from this product. It works, but it didn’t blow my mind.',
    score: 2.8,
  },
  {
    reviewerId: 'student_life',
    title: 'Budget-friendly and useful',
    comment: 'This is great for students. Affordable and gets the job done.',
    score: 4.3,
  },
];

export default function MentoringReviewSection() {
  return (
    <section className="w-full px-10">
      <h1 className="text-2xl ">REVIEW</h1>
      <ul className={`w-full my-3`}>
        {reviews.map((review) => (
          <li
            key={review.reviewerId}
            className="w-full border-[1px] rounded-lg p-6  mt-4"
          >
            <span className="flex flex-row items-center gap-4">
              {/* 프로필 이미지 */}
              <h2>{review.reviewerId.slice(0, 2).toUpperCase()}</h2>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{review.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {review.reviewerId}
                </p>
              </div>
            </span>
            <div className="flex items-center my-2">
              <ScoreStar score={review.score} />
              <span className="ml-2 text-sm text-muted-foreground">
                ({review.score.toFixed(1)}/5)
              </span>
            </div>
            <p className=" text-lg">{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
