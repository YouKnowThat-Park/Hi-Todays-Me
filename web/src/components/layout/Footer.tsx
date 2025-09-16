export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 회사 정보 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">개발자 정보</h2>
          <p className="text-sm">Park Wooseok 박우석</p>
          <p className="text-sm">대한민국 대전광역시</p>
          <p className="text-sm">이메일: youkn0wthat@naver.com</p>
          <p className="text-sm">전화: youkn0wthat@naver.com</p>
        </div>

        {/* 약관 및 링크 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">사이트 정보</h2>
          <p className="text-sm">이용약관</p>
          <p className="text-sm">개인정보처리방침</p>
        </div>

        {/* 소셜 링크 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">SNS</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="https://github.com/YouKnowThat-Park"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://youkn0wthat.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Tistory
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 카피라이트 */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Park Wooseok. All rights reserved.
      </div>
    </footer>
  );
}
