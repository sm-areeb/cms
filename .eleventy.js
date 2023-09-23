module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'layouts/post.11ty.js');
    eleventyConfig.addLayoutAlias('base', 'layouts/baseLayout.11ty.js');
    eleventyConfig.addPassthroughCopy({
      "./src/admin/*": "./admin/",
      "./src/css/": "./static/css",
      "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
        "./static/js/bootstrap.bundle.min.js",
      "./node_modules/bootstrap/dist/css/bootstrap.min.css":
          "./static/css/bootstrap.min.css",
    });
    eleventyConfig.addPassthroughCopy("images");
    return {
        dir: {
          input: "src"
      }
    }
  };