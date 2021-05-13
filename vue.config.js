module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api" : {
        changeOrigin: true,
        target: "http://localhost:3000",
      },
    },
  },
};
