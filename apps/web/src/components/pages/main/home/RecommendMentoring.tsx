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
    <section className="container mx-auto px-16 py-12 max-w-full">
      <RecommendTitle />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-48 rounded-xl">
        {articles.map((article, index) => (
          <article key={index} className="group cursor-pointer">
            <RecommendMentoringItem item={article} />
          </article>
        ))}
      </div>
    </section>
  );
}
