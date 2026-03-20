module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.ignores.add("src/email-templates/TEMPLATE-GUIDE.md");

  eleventyConfig.addFilter("date", function(value, format) {
    const d = value === "now" ? new Date() : new Date(value);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    if (format === "%Y-%m-%d") {
      return d.toISOString().split("T")[0];
    }
    if (format === "%B %d, %Y") {
      return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2,"0")}, ${d.getFullYear()}`;
    }
    if (format === "%Y") {
      return String(d.getFullYear());
    }
    return d.toLocaleDateString("en-US");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
