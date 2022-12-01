const htmlmin = require("html-minifier");
const { minify } = require("terser");
const CleanCSS = require("clean-css");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

module.exports = function(eleventyConfig){
    // use addPassthroughCopy to duplicate a file or folder into _Site (css, js, images, fonts, etc.)
    // eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
    // eleventyConfig.addPassthroughCopy("src/assets/js/gsap.js");
    // eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addNunjucksShortcode("year", () => `${new Date().getFullYear()}`);

    // filters
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
      code,
      callback
    ) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    });
    
    eleventyConfig.addFilter("cssmin", function(code) {
      return new CleanCSS({}).minify(code).styles;
    });

    // transformations
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if( outputPath && outputPath.endsWith(".html") ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }
  
      return content;
    });

    // plugins
    eleventyConfig.addPlugin(faviconsPlugin, {});

    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
      }
    };

  }
  
