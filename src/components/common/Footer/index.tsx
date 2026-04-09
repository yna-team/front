export const Footer = () => {
    return (
        <div className="bg-[#151a2e] flex flex-col gap-2 pt-[28px] pr-[16px] pb-20 pl-[16px]">
            <div className="footer-logo-m  text-[#E42A57] text-[20px] font-bold">함께 HAMKKE</div>
            <div className="footer-tagline-m  text-[#ffffff8c] text-[12px] mb-[16px]">
                우리 동네 사람들과 함께,
                <br />더 풍요로운 일상
            </div>
            <div className="text-xs footer-links-m  text-gray-500 flex gap-3">
                <span className="footer-link-m">이용약관</span>
                <span className="footer-link-m">개인정보처리방침</span>
                <span className="footer-link-m">판매자 입점</span>
                <span className="footer-link-m">고객센터</span>
                <span className="footer-link-m">공지사항</span>
                <span className="footer-link-m">마이페이지</span>
            </div>
            <hr className="border-[#ffffff14] my-2" />
            <div className="text-[10px] leading-[1.6] text-[#ffffff40]">
                (주)함께커머스 · 대표이사 홍길동
                <br />
                사업자등록번호 000-00-00000
                <br />
                통신판매업신고 2024-서울마포-00000
                <br />© 2026 HAMKKE Corp. All rights reserved.
            </div>
        </div>
    );
};
