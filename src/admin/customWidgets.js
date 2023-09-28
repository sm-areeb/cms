const singleCarousel = require("../_includes/components/carousel/single");
const CMS = window.CMS;
CMS.registerPreviewStyle('/static/css/site.css');
CMS.registerPreviewStyle('/static/css/bootstrap.min.css');
CMS.registerEditorComponent({
    id: "collapsible-note",
    label: "Collapsible Note",
    fields: [
      {
        name: 'summary',
        label: 'Summary',
        widget: 'string'
      },
      {
        name: 'detail',
        label: 'Details',
        widget: 'markdown'
      }
    ],
    pattern: /^(\s*?)<section(.*?) class="carousel(.*?)>(.*?)<\/section>(\s*?)$/ms,
    fromBlock: function(match) {
      return {
        summary: match[1],
        detail: match[2]
      };
    },
    toBlock: singleCarousel,
    toPreview: singleCarousel
  });