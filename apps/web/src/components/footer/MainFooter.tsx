import AdaptorsLogoIcon from '@components/assets/icons/AdaptorsLogo';

export default function MeinFooter() {
  return (
    <footer className="border-t bg-[#FFF9E7] px-0 md:px-10 ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Newsletter Section */}
          <div className="col-span-3 space-y-4">
            <div className="flex items-center">
              <AdaptorsLogoIcon className="h-[3rem] text-[#FFD84D] opacity-80" />
            </div>
            <p className="text-sm text-gray-600">
              멘토링이 필요한 모든 사람을 위한 플랫폼! 어뎁터!!! <br />
              전문 멘토와 멘티를 연결해 언제 어디서나 온라인으로 멘토링 서비스를
              받을 수 있습니다. <br />
              지금 바로 가입하고 나만의 멘토링을 시작하세요!
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 col-span-3 md:col-span-1">
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
          <div className="space-y-4 col-span-3 md:col-span-1">
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
          <div className="space-y-4 col-span-3 md:col-span-1">
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
          <p>
            Copyright © 2024. All Rights Reserved | MultiTap & TheUNIONGraphix
          </p>
        </div>
      </div>
    </footer>
  );
}
