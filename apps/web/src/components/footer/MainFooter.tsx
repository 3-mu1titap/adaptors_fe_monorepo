import AdaptorsLogoIcon from '@repo/web/components/assets/icons/AdaptorsLogo';

export default function MeinFooter() {
  return (
    <footer className="border-t bg-[#FFF9E7] px-0 md:px-10 ">
      <div className="container mx-auto px-4 sm:px-0 py-12">
        <div className="md:flex lg:justify-between gap-4 space-y-3 ">
          {/* Newsletter Section */}
          <section className=" space-y-4 w-full">
            <div className="flex items-center">
              <AdaptorsLogoIcon className="h-[3rem] text-[#FFD84D] opacity-80" />
            </div>
            <p className="text-sm text-gray-600">
              멘토를 만나는 새로운 이름, Adaptors <br />
              멘토링을 더욱 간편하게 진행하기 위한 다양한 서비스를 지원합니다
              <br />
              지금 바로 가입하고 나만의 멘토링을 시작하세요! Adaptors는 모든
              멘티의 성장을 응원합니다✨
            </p>
          </section>

          <section className="md:flex gap-10 w-full space-y-3 md:space-y-0">
            {/* Contact Section */}
            <div className="space-y-4 col-span-3 md:col-span-1">
              <h3 className="font-semibold">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>SPHAROS-5TH</li>
                <li>Team Multitap</li>
                <li>부산시 해운대구 APEC로 17</li>
                <li>adaptors@adaptors.com</li>
              </ul>
            </div>
            {/* Explore Courses */}
            <div className="space-y-4 col-span-3 md:col-span-1">
              <h3 className="font-semibold inline-block">Explore</h3>
              <div className="space-y-2 text-sm">
                <a href="/" className="block text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a
                  href="/Mentoring"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Mentoring
                </a>
                <a
                  href="/mypage"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Business
                </a>
                <a
                  href="/mypage/volt"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Volt
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">
                  Client
                </a>
              </div>
            </div>
            {/* Use Full Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Developer</h3>
              <div className="text-sm flex gap-8 items-start">
                <ul className="min-w-20 space-y-2 ">
                  <li className="text-gray-600">Kang Subin</li>
                  <li className="text-gray-600">Kim Yejin</li>
                  <li className="text-gray-600">Kim SeongTae</li>
                  <li className="text-gray-600">Kim Daehee</li>
                  <li className="text-gray-600">Baek Seungyeop</li>
                </ul>
                <ul className="min-w-20 space-y-2 ">
                  <li className="text-gray-600">Jeong Hunseock</li>
                  <li className="text-gray-600">Huh Jnghyun</li>
                  <li className="text-gray-600">Ou Deagwan</li>
                  <li className="text-gray-600">Seol Chanwoo</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Copyright */}
      </div>
      <p className="py-6 pl-4 border-t text-sm text-gray-600">
        Copyright © 2024. All Rights Reserved | MultiTap & TheUNIONGraphix
      </p>
    </footer>
  );
}
