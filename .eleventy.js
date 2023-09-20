module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'layouts/post.11ty.js');
    eleventyConfig.addLayoutAlias('base', 'layouts/baseLayout.11ty.js');
    eleventyConfig.addPassthroughCopy({
      "./src/admin/*": "./admin/",
      "./node_modules/bulma/css/bulma.min.css":
        "./static/css/bulma.min.css",
    });
    eleventyConfig.addPassthroughCopy("images");
    return {
        dir: {
          input: "src"
      }
    }
  };