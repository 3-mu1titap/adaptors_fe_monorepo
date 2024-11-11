export default function MeinFooter() {
  return (
    <footer className="border-t bg-[#FFF9E7] px-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Newsletter Section */}
          <div className="col-span-3 space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-bold">Adaptors</span>
            </div>
            <p className="text-md text-gray-600">
              Integer semvolutpat consequat elit. Curabitur eget suscipit nibh.
              Cras euismod, tellus vitae aliquam ultricies, lacus erat sagittis
              nulla, ut viverra velit ligula congue diam.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your mail here"
                className="flex-1 px-3 py-2 border rounded-md text-sm"
              />
              <button className="bg-[#FFD84D] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FFD84D]/90 flex items-center gap-2">
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>556 Oxford Street Victoria</p>
              <p>Book New York</p>
              <p>+165 955 2554</p>
              <p>+756 6567 478</p>
              <p>contact@example.com</p>
            </div>
          </div>

          {/* Explore Courses */}
          <div className="space-y-4">
            <h3 className="font-semibold">Explore Courses</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Microsoft develop
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Motion art
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Management
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Business
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Art science
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Games
              </a>
            </div>
          </div>

          {/* Use Full Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Use Full Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                About Us
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Upcoming Events
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Faq Questions
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Gallery
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Contact us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>Copyright © 2024. All Rights Reserved | TheArtOfDigitals</p>
        </div>
      </div>
    </footer>
  );
}
