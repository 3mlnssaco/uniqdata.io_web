export function Features() {
  const features = [
    {
      icon: "🏛️",
      title: "데이터 주권 실현",
      description: "내 건강데이터의 완전한 소유권과 통제권을 가집니다. 누가 내 데이터에 접근할 수 있는지, 어떤 목적으로 사용되는지 완전히 제어할 수 있습니다.",
      details: ["완전한 데이터 소유권", "접근 권한 통제", "사용 목적 제한", "데이터 삭제권"]
    },
    {
      icon: "🎨",
      title: "NFT 기반 소유권 증명",
      description: "블록체인 NFT로 데이터 소유권을 안전하게 증명하고 거래합니다. 각 데이터셋은 고유한 NFT로 발행되어 위변조가 불가능합니다.",
      details: ["고유 NFT 발행", "위변조 방지", "소유권 추적", "안전한 거래"]
    },
    {
      icon: "🔒",
      title: "영지식 증명 익명화",
      description: "개인정보를 완전히 보호하면서 데이터의 유효성을 증명합니다. 실제 데이터를 노출하지 않고도 데이터의 가치를 입증할 수 있습니다.",
      details: ["완전한 익명화", "개인정보 보호", "데이터 유효성 증명", "프라이버시 보장"]
    },
    {
      icon: "💰",
      title: "글로벌 데이터 수익화",
      description: "전 세계 연구기관, 제약회사, 의료기관에 데이터를 판매하여 실제 수익을 창출합니다. 데이터의 가치에 따라 공정한 보상을 받습니다.",
      details: ["글로벌 마켓플레이스", "공정한 가격 책정", "즉시 정산", "투명한 거래"]
    },
    {
      icon: "🌐",
      title: "XRPL 블록체인 기반",
      description: "빠르고 안전한 XRPL 네트워크를 활용하여 낮은 수수료로 실시간 거래가 가능합니다. 환경친화적인 블록체인으로 지속가능한 서비스를 제공합니다.",
      details: ["낮은 거래 수수료", "빠른 처리 속도", "환경 친화적", "높은 보안성"]
    },
    {
      icon: "📊",
      title: "AI 기반 데이터 분석",
      description: "고급 AI 알고리즘으로 데이터의 가치를 정확히 평가하고, 최적의 구매자를 매칭합니다. 데이터의 품질과 희귀성에 따라 프리미엄을 제공합니다.",
      details: ["AI 가치 평가", "스마트 매칭", "품질 분석", "프리미엄 책정"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-semibold">핵심 기능</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            데이터 주권을 실현하는
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              혁신적인 기능들
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            UniqData는 최첨단 블록체인 기술과 AI를 결합하여
            개인의 건강데이터를 안전하고 수익성 있게 활용할 수 있는 완전한 솔루션을 제공합니다
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">지금 바로 시작해보세요</h3>
            <p className="text-muted-foreground mb-6">
              몇 분 안에 계정을 만들고 첫 번째 데이터 NFT를 발행해보세요
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              무료로 시작하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}