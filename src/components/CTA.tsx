export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary-foreground/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-foreground/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-foreground/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              건강데이터로
              <br />
              수익을 창출하세요
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              지금 바로 시작하여 첫 번째 데이터 NFT를 발행하고
              <br />
              글로벌 마켓플레이스에서 수익을 창출해보세요
            </p>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <input
                type="email"
                name="email"
                placeholder="이메일 주소를 입력하세요"
                required
                className="px-6 py-4 rounded-full text-lg bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-primary-foreground/50 w-full sm:w-auto sm:min-w-[300px]"
              />
              <button
                type="submit"
                className="bg-primary-foreground text-primary px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                소식 받기 →
              </button>
            </form>

            <p className="text-primary-foreground/80 text-sm">
              ✨ 가입비 무료 • 첫 거래 수수료 면제 • 24/7 고객지원
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">즉시 시작</h3>
              <p className="text-primary-foreground/80 text-sm">
                복잡한 절차 없이 5분 만에 계정 생성하고 첫 NFT 발행
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">완전한 보안</h3>
              <p className="text-primary-foreground/80 text-sm">
                영지식 증명으로 개인정보는 보호하면서 데이터 가치만 증명
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">글로벌 수익</h3>
              <p className="text-primary-foreground/80 text-sm">
                전 세계 구매자들과 연결되어 데이터의 최대 가치 실현
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
            <h3 className="text-2xl font-bold mb-6">문의하기</h3>
            <div className="text-center">
              <p className="text-primary-foreground/80 text-sm">
                비즈니스 문의 및 기술 지원이 필요하신가요?
              </p>
              <p className="text-primary-foreground/90 font-semibold mt-4">
                📧 문의: support@sportique.biz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}