import RecommendMentoringItem from './RecommendMentoringItem';
import RecommendTitle from './RecommendTitle';
export default function RecommendMentoring() {
  const articles = [
    {
      author: 'Emily Johnson',
      title: 'The Future of Online Learning Trends to Watch in 2024',
      date: 'July 15, 2024',
      views: 20,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      author: 'Michael Lee',
      title: 'Top 10 Tips for Staying Motivated in Online Courses',
      date: 'August 3, 2024',
      views: 19,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      author: 'Sarah Thompson',
      title: 'How to Choose the Right Online Course for Your Career Goals',
      date: 'September 10, 2024',
      views: 10,
      image: '/placeholder.svg?height=200&width=400',
    },

    {
      author: 'Sarah Thompson',
      title: 'How to Choose the Right Online Course for Your Career Goals',
      date: 'September 10, 2024',
      views: 10,
      image: '/placeholder.svg?height=200&width=400',
    },
  ];

  return (
    <section className="container mx-auto px-24 py-12 max-w-[84rem]">
      <div className="mx-auto max-w-[84rem]">
        <RecommendTitle />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 mx-auto max-w-[70rem] lg:grid-cols-4 xl:grid-cols-4 gap-5  rounded-xl">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <RecommendMentoringItem item={article} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
