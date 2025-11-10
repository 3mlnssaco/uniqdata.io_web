export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: "기능", href: "#features" },
      { name: "기술", href: "#technology" },
      { name: "모회사 Sportique", href: "https://sportique.biz", external: true }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">U</span>
              </div>
              <span className="text-2xl font-bold text-foreground">UniqData</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
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

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">바로가기</h3>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              <div>© {currentYear} UniqData. All rights reserved.</div>
              <div className="mt-2">
                A company of{" "}
                <a
                  href="https://sportique.biz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Sportique
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>📧 support@sportique.biz</span>
            </div>
          </div>
        </div>

        {/* Security Technologies */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4">보안 기술</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-sm">🔒 영지식 증명</div>
              <div className="text-sm">⚡ XRPL 블록체인</div>
              <div className="text-sm">🌐 SSL/TLS</div>
              <div className="text-sm">🛡️ 엔드투엔드 암호화</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}