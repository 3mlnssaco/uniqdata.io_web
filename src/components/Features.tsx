export function Features() {
  const features = [
    {
      icon: "🏛️",
      title: "데이터 주권 실현",
      description: "내 건강데이터의 완전한 소유권과 통제권"
    },
    {
      icon: "🔒",
      title: "영지식 증명 보호",
      description: "개인정보 보호하면서 데이터 가치 증명"
    },
    {
      icon: "💰",
      title: "글로벌 데이터 수익화",
      description: "공정한 보상으로 실제 수익 창출"
    },
    {
      icon: "🌐",
      title: "XRPL 블록체인",
      description: "빠르고 안전한 실시간 거래"
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
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              핵심 기능
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            블록체인 기술로 건강데이터를 안전하게 수익화
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
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