module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "@/scss/globals";
        `
      }
    }
  }
};
