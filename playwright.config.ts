import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    reporter: 'html',
    use: {
        headless: false,

        // Artifacts
        screenshot: 'on',
        video: 'off',
        contextOptions: {
            locale: 'ja-JP',
        },
    },
};
export default config;
