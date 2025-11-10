export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold">XRPL 블록체인 기반</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            당신의 건강데이터가
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              수익이 됩니다
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in px-4">
            XRPL 블록체인과 영지식 증명 기술로 건강데이터를 안전하게 수익화
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12 animate-slide-up px-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
              문의하기 →
            </button>
            <button className="border border-border text-foreground px-6 py-3 rounded-full text-base font-semibold hover:bg-secondary hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              데모 보기
            </button>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Data Source */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">건강데이터</h3>
                  <p className="text-muted-foreground text-sm">의료기록, 건강지표, 생체데이터</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-8 h-8 text-primary transform rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* NFT & Revenue */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">NFT & 수익</h3>
                  <p className="text-muted-foreground text-sm">소유권 증명 및 데이터 수익화</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}