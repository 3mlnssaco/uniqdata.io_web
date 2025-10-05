export function Stats() {
  const stats = [
    {
      value: "50,000+",
      label: "등록된 사용자",
      description: "전 세계에서 참여하는 데이터 제공자",
      icon: "👥",
      color: "from-blue-500 to-blue-600"
    },
    {
      value: "₩120억+",
      label: "누적 거래액",
      description: "사용자들이 창출한 총 수익",
      icon: "💰",
      color: "from-green-500 to-green-600"
    },
    {
      value: "2.5M+",
      label: "데이터셋",
      description: "플랫폼에 등록된 검증된 데이터",
      icon: "📊",
      color: "from-purple-500 to-purple-600"
    },
    {
      value: "99.9%",
      label: "보안 수준",
      description: "영지식 증명 기반 개인정보 보호",
      icon: "🔒",
      color: "from-red-500 to-red-600"
    },
    {
      value: "150+",
      label: "파트너 기관",
      description: "연구기관, 제약회사, 의료기관",
      icon: "🏥",
      color: "from-orange-500 to-orange-600"
    },
    {
      value: "3.2초",
      label: "평균 처리시간",
      description: "XRPL 기반 초고속 거래",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const achievements = [
    {
      title: "ISO 27001 인증",
      description: "국제 정보보안 관리 표준 인증 획득",
      icon: "🏆"
    },
    {
      title: "GDPR 완전 준수",
      description: "유럽 개인정보보호법 완전 준수",
      icon: "✅"
    },
    {
      title: "FDA 파트너십",
      description: "미국 식품의약국과 협력 프로그램",
      icon: "🤝"
    },
    {
      title: "블록체인 어워드",
      description: "2024 최우수 헬스케어 블록체인",
      icon: "🥇"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-semibold">실시간 현황</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            숫자로 보는
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              UniqData의 성장
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            전 세계 사용자들이 만들어가는 데이터 경제의 새로운 역사를 확인하세요.
            모든 지표는 실시간으로 업데이트됩니다.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold mb-2 text-foreground">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">인증 및 수상 내역</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </div>
                <div className="text-muted-foreground text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Updates */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-border">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">실시간 거래 현황</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">실시간 거래</div>
                  <div className="text-muted-foreground text-sm">현재 진행 중인 거래 건수</div>
                  <div className="text-lg font-semibold mt-2">247건</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24시간 거래량</div>
                  <div className="text-muted-foreground text-sm">지난 24시간 총 거래액</div>
                  <div className="text-lg font-semibold mt-2">₩3.2억</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">평균 수익률</div>
                  <div className="text-muted-foreground text-sm">사용자 평균 월 수익률</div>
                  <div className="text-lg font-semibold mt-2">15.3%</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  🔴 실시간 업데이트 중 • 마지막 업데이트: 방금 전
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}