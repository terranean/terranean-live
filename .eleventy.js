module.exports = function(eleventyConfig){
    // use addPassthroughCopy to duplicate a file or folder into _Site (css, js, images, fonts, etc.)
    // eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
     eleventyConfig.addPassthroughCopy("src/assets/images");


    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts"
      }
    };
  }
  