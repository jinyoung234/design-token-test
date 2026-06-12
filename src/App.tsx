function App() {
  const blueSwatches = [
    { step: 0, cls: 'bg-blue-0' },
    { step: 10, cls: 'bg-blue-10' },
    { step: 20, cls: 'bg-blue-20' },
    { step: 30, cls: 'bg-blue-30' },
    { step: 40, cls: 'bg-blue-40' },
    { step: 45, cls: 'bg-blue-45' },
    { step: 50, cls: 'bg-blue-50' },
    { step: 55, cls: 'bg-blue-55' },
    { step: 60, cls: 'bg-blue-60' },
    { step: 65, cls: 'bg-blue-65' },
    { step: 70, cls: 'bg-blue-70' },
    { step: 80, cls: 'bg-blue-80' },
    { step: 90, cls: 'bg-blue-90' },
    { step: 95, cls: 'bg-blue-95' },
    { step: 99, cls: 'bg-blue-99' },
    { step: 100, cls: 'bg-blue-100' },
  ];
  return (
    <div className="bg-background-normal-alternative min-h-screen p-10 space-y-10">
      {/* 타이포 (Label 토큰) */}
      <section>
        <h1 className="text-label-strong text-3xl font-bold">디자인 토큰 테스트</h1>
        <p className="text-label-normal mt-2">Label / Normal 텍스트</p>
        <p className="text-label-neutral">Label / Neutral 텍스트</p>
        <p className="text-label-alternative">Label / Alternative 텍스트</p>
        <p className="text-label-assistive">Label / Assistive 텍스트</p>
        <p className="text-label-disable">Label / Disable 텍스트</p>
      </section>

      {/* Blue 팔레트 (Primitive 토큰) */}
      <section>
        <h2 className="text-label-normal text-xl font-semibold mb-3">Blue Scale</h2>
        <div className="flex gap-1">
          {blueSwatches.map((step) => (
            <div key={step.step} className="text-center">
              <div
                className={`${step.cls} h-12 w-12 rounded-md border border-line-normal-normal`}
              />
              <span className="text-label-alternative text-xs">{step.step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 버튼 (Primary + Interaction 토큰) */}
      <section className="flex gap-3">
        <button className="bg-primary-normal hover:bg-primary-strong active:bg-primary-heavy text-static-white rounded-lg px-5 py-2.5 font-medium transition-colors">
          Primary 버튼
        </button>
        <button className="bg-fill-normal hover:bg-fill-strong text-label-normal rounded-lg px-5 py-2.5 font-medium transition-colors">
          Secondary 버튼
        </button>
        <button className="bg-interaction-disable text-label-disable rounded-lg px-5 py-2.5 font-medium cursor-not-allowed">
          Disabled 버튼
        </button>
      </section>

      {/* 카드 (Background + Line 토큰) */}
      <section className="grid grid-cols-3 gap-4">
        <div className="bg-background-normal-normal border border-line-solid-normal rounded-xl p-5">
          <h3 className="text-label-normal font-semibold">카드 제목</h3>
          <p className="text-label-alternative text-sm mt-1">Line / Solid / Normal 테두리</p>
        </div>
        <div className="bg-background-elevated-normal border border-line-normal-normal rounded-xl p-5 shadow-sm">
          <h3 className="text-label-normal font-semibold">Elevated 카드</h3>
          <p className="text-label-alternative text-sm mt-1">Line / Normal (반투명) 테두리</p>
        </div>
        <div className="bg-inverse-background rounded-xl p-5">
          <h3 className="text-inverse-label font-semibold">Inverse 카드</h3>
          <p className="text-inverse-primary text-sm mt-1">Inverse / Primary 텍스트</p>
        </div>
      </section>

      {/* Status 토큰 */}
      <section className="flex gap-4">
        <span className="text-status-positive font-medium">✓ 성공 메시지</span>
        <span className="text-status-cautionary font-medium">⚠ 경고 메시지</span>
        <span className="text-status-negative font-medium">✕ 에러 메시지</span>
      </section>

      {/* Accent 토큰 */}
      <section className="flex gap-2">
        {(['lime', 'cyan', 'lightBlue', 'violet', 'pink', 'redOrange', 'purple'] as const).map(
          (name) => (
            <span
              key={name}
              className={`bg-accent-background-${name} text-static-white rounded-full px-3 py-1 text-sm`}
            >
              {name}
            </span>
          ),
        )}
      </section>
    </div>
  );
}

export default App;
