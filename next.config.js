module.exports = {
  output: 'export',
  // reactStrictMode: true,
  crossOrigin: 'anonymous',
  basePath: '/blog',
  i18n: {
    locales: ["en", "fr", "de", "es"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ["localhost", "spaceshipblog.local", "zenlabs.ch"],
  }
};