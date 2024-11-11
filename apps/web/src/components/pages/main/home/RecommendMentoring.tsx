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
  ];

  return (
    <section className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <span className="text-sm text-gray-600 uppercase tracking-wider">
          POPULAR COURSES
        </span>
        <h2 className="text-2xl font-bold mt-2">추천멘토링</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
        {articles.map((article, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="relative mb-4">
              <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden" />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">{article.author}</div>
              <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <span>{article.date}</span>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{article.views}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
