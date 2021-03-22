module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  images: {
    // rakutenAPIで取得した画像を使う
    domains: ['thumbnail.image.rakuten.co.jp'],
  },
};
