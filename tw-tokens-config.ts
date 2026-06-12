import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer';
import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary(
  makeSdTailwindConfig({
    type: 'all',
    source: ['modifiedTokens.json'],
    buildPath: 'src/styles/', // 루트 말고 여기로 생성
  }),
);

await sd.hasInitialized;
await sd.buildAllPlatforms();
