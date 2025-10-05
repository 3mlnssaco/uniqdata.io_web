export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "데이터 업로드",
      description: "건강검진 결과, 의료기록, 웨어러블 기기 데이터 등을 안전하게 업로드합니다",
      icon: "📋",
      details: ["의료기록 업로드", "웨어러블 데이터 연동", "건강검진 결과", "유전자 정보"]
    },
    {
      step: "02",
      title: "AI 데이터 검증",
      description: "고급 AI 알고리즘이 데이터의 품질, 완성도, 희귀성을 분석하여 가치를 평가합니다",
      icon: "🤖",
      details: ["데이터 품질 분석", "완성도 검증", "희귀성 평가", "시장 가치 산정"]
    },
    {
      step: "03",
      title: "NFT 발행",
      description: "검증된 데이터를 XRPL 블록체인에 고유한 NFT로 발행하여 소유권을 확립합니다",
      icon: "🎨",
      details: ["XRPL NFT 발행", "소유권 등록", "메타데이터 저장", "스마트 컨트랙트"]
    },
    {
      step: "04",
      title: "영지식 증명 생성",
      description: "개인정보를 노출하지 않으면서도 데이터의 유효성을 증명하는 영지식 증명을 생성합니다",
      icon: "🔐",
      details: ["익명화 처리", "영지식 증명", "개인정보 보호", "데이터 유효성 증명"]
    },
    {
      step: "05",
      title: "마켓플레이스 등록",
      description: "글로벌 데이터 마켓플레이스에 등록하여 전 세계 구매자들이 접근할 수 있도록 합니다",
      icon: "🌐",
      details: ["글로벌 마켓플레이스", "카테고리 분류", "검색 최적화", "구매자 매칭"]
    },
    {
      step: "06",
      title: "수익 창출",
      description: "데이터 구매가 완료되면 XRPL을 통해 즉시 정산되며, 지속적인 로열티 수익도 가능합니다",
      icon: "💰",
      details: ["즉시 정산", "로열티 수익", "투명한 거래", "글로벌 결제"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-semibold">작동 방식</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            간단하고 안전한
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              6단계 프로세스
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            복잡한 블록체인 기술을 누구나 쉽게 사용할 수 있도록
            직관적인 인터페이스로 설계된 단계별 프로세스입니다
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card to-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">준비되셨나요?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              지금 바로 첫 번째 단계를 시작하여 건강데이터로 수익을 창출해보세요.
              전체 프로세스는 15분 이내에 완료됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                지금 시작하기
              </button>
              <button className="border border-border text-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors">
                가이드 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}