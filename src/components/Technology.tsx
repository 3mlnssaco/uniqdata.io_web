export function Technology() {
  const technologies = [
    {
      title: "XRPL 블록체인",
      description: "빠르고 안전하며 환경친화적인 블록체인 네트워크",
      features: [
        "3-5초 빠른 거래 처리",
        "0.0001 XRP 낮은 수수료",
        "높은 보안성과 확장성",
        "탄소 중립적 운영"
      ],
      icon: "⚡",
      color: "from-blue-500/10 to-blue-600/10 border-blue-500/20"
    },
    {
      title: "영지식 증명 (ZK-Proof)",
      description: "개인정보를 보호하면서 데이터 유효성을 증명하는 암호학 기술",
      features: [
        "완전한 개인정보 보호",
        "데이터 유효성 증명",
        "수학적 보안 보장",
        "글로벌 개인정보보호 기준 준수"
      ],
      icon: "🔐",
      color: "from-purple-500/10 to-purple-600/10 border-purple-500/20"
    },
    {
      title: "AI 데이터 분석",
      description: "머신러닝을 활용한 데이터 품질 평가 및 가치 산정",
      features: [
        "실시간 품질 분석",
        "시장 가치 예측",
        "이상 데이터 탐지",
        "개인화된 추천"
      ],
      icon: "🤖",
      color: "from-green-500/10 to-green-600/10 border-green-500/20"
    },
    {
      title: "분산 저장소 (IPFS)",
      description: "탈중앙화된 안전한 데이터 저장 시스템",
      features: [
        "데이터 무결성 보장",
        "분산 저장으로 안전성",
        "빠른 접근 속도",
        "확장 가능한 구조"
      ],
      icon: "🌐",
      color: "from-orange-500/10 to-orange-600/10 border-orange-500/20"
    }
  ];

  const specs = [
    { label: "거래 처리 속도", value: "3-5초", icon: "⚡" },
    { label: "거래 수수료", value: "0.0001 XRP", icon: "💰" },
    { label: "동시 처리 용량", value: "100,000 TPS", icon: "🚀" }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-semibold">핵심 기술</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            최첨단 기술로 구현하는
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              안전한 데이터 경제
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            검증된 블록체인 기술과 AI를 결합하여
            <br />
            데이터의 보안과 가치를 동시에 보장
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${tech.color} backdrop-blur-sm border rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">기술 사양</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {spec.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{spec.value}</div>
                <div className="text-muted-foreground text-sm">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}