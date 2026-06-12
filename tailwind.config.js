// 생성된 토큰 파일을 데이터로 불러옴
const generated = require('./src/styles/tailwind.config.js');

// opacity만 분리하고 나머지는 전부 색상
const { opacity, ...colors } = generated.theme.extend;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors, // ← colors 키로 감싸는 작업을 코드가 함
      opacity: Object.fromEntries(
        Object.entries(opacity).map(([k, v]) => [k, String(Number(v) / 100)]),
        // 5 → '0.05' 변환도 코드가 함
      ),
    },
  },
};
