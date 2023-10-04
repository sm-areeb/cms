const {
  SingleCarouselWidget,
} = require("../_includes/components/carousel/single");
const { nanoid } = require("nanoid");
const CMS = window.CMS;
CMS.registerPreviewStyle("/static/css/site.css");
CMS.registerPreviewStyle("/static/css/bootstrap.min.css");

const UuidWidget = createClass({
  componentDidMount() {
    const { value, onChange } = this.props;
    if (!value) {
      onChange(nanoid())
    }
  },

  render() {
    const { value, classNameWrapper, forID } = this.props;
    return h(
      "span",
      {
        id: forID,
        style: { display: 'none' },
        className: classNameWrapper || "",
      },
      value
    );
  },
});
CMS.registerWidget("uuid", UuidWidget);

CMS.registerEditorComponent(SingleCarouselWidget);
