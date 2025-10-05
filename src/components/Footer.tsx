export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: "기능", href: "#features" },
      { name: "작동방식", href: "#how-it-works" },
      { name: "기술", href: "#technology" },
      { name: "요금제", href: "#pricing" },
      { name: "로드맵", href: "#roadmap" }
    ],
    company: [
      { name: "회사소개", href: "#about" },
      { name: "팀", href: "#team" },
      { name: "채용", href: "#careers" },
      { name: "투자자", href: "#investors" },
      { name: "보도자료", href: "#press" }
    ],
    resources: [
      { name: "블로그", href: "#blog" },
      { name: "문서", href: "#docs" },
      { name: "API", href: "#api" },
      { name: "가이드", href: "#guides" },
      { name: "FAQ", href: "#faq" }
    ],
    legal: [
      { name: "개인정보처리방침", href: "#privacy" },
      { name: "이용약관", href: "#terms" },
      { name: "쿠키정책", href: "#cookies" },
      { name: "보안정책", href: "#security" },
      { name: "규정준수", href: "#compliance" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "GitHub", href: "#", icon: "🐙" },
    { name: "Discord", href: "#", icon: "💬" },
    { name: "Telegram", href: "#", icon: "📱" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">U</span>
              </div>
              <span className="text-2xl font-bold text-foreground">UniqData</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              XRPL 블록체인과 영지식 증명 기술을 활용하여
              개인의 건강데이터를 안전하게 보호하면서 수익화할 수 있는
              혁신적인 글로벌 데이터 마켓플레이스입니다.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-lg group-hover:text-primary-foreground transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">제품</h3>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">회사</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">리소스</h3>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">법적 정보</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-secondary/50 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">최신 소식을 받아보세요</h3>
            <p className="text-muted-foreground mb-6">
              UniqData의 새로운 기능, 파트너십, 업계 인사이트를 가장 먼저 확인하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                구독하기
              </button>
            </div>
            <p className="text-muted-foreground text-xs mt-3">
              언제든지 구독을 취소할 수 있습니다. 개인정보처리방침을 확인하세요.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} UniqData. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>시스템 정상 운영 중</span>
              </div>
              <div>버전 2.1.0</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4">보안 및 인증</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-sm">🛡️ ISO 27001</div>
              <div className="text-sm">✅ GDPR</div>
              <div className="text-sm">🏥 HIPAA</div>
              <div className="text-sm">🔒 SOC 2</div>
              <div className="text-sm">🌐 SSL/TLS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}