function SingleCarousel(props) {
  const { header, description, gallery = [], uuid } = props;
  return /*html*/ `<section carousel-single><pre>${JSON.stringify(props, undefined, 2)}</pre>${
    header &&
    /* html */ `<div className="carousel-header"><h1>${header}</h1></div>`
  }${
    description &&
    /* html */ `<div className="carousel-description"><p>${description}</p></div>`
  }<div class="carousel carousel-single slide" id="${uuid}"  data-ride="carousel">
            
            <ol class="carousel-indicators">${gallery.map((item, index) => /*html*/`<li data-target="#${uuid}" data-slide-to="${index}" ${(index == 0) ? 'class="active"' : ''}></li>`).join('')}
            </ol>
            <div class="carousel-inner">${gallery.map(
                  ({
                    title,
                    description,
                    image,
                    linkHref,
                    linkText,
                    ctaButton,
                  }) => /*html*/ `<div class="carousel-item">${
                          image &&
                          `<img class="carousel-image d-block w-100" src="/images/logo.svg" alt="First slide">`
                        }${
                              (title || description || linkText) &&
                              /* html */ `<div class="carousel-item-content">${
                                  title &&
                                  /* html */ `<div className="carousel-title"><h1>${title}</h1></div>`
                                }${
                                  description &&
                                  /* html */ `<div className="carousel-description"><p>${description}</p></div>`
                                }${
                              linkText &&
                              /*html*/ `<a href="${linkHref}" class="carousel-link ${ctaButton && 'btn btn-primary'}">${linkText}</a>`
                            }</div>`
                            }</div>
                `
                ).join('')}</div>
            <a class="carousel-control-prev" href="#${uuid}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#${uuid}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
                        </section>`;
}

module.exports = SingleCarousel;

exports = module.exports;

exports.SingleCarouselWidget = {
  id: "CarouselSingle",
  label: "Carousel - Single",
  fields: [
    {
      name: "header",
      label: "Header",
      widget: "string",
    },
    {
      name: "description",
      label: "Description",
      widget: "markdown",
    },
    {
      name: "gallery",
      label: "Gallery",
      widget: "list",
      summary: "{{fields.title}}",
      fields: [
        { name: "title", label: "Title", widget: "string" },
        { name: "description", label: "Description", widget: "text" },
        { name: "image", label: "Image", widget: "image" },
        { name: "linkHref", label: "CTA Link", widget: "string" },
        { name: "linkText", label: "CTA Text", widget: "string" },
        { name: "ctaButton", label: "Show CTA as Button", widget: "boolean" },
      ],
    },
    { label: "UUID", name: "uuid", widget: "uuid" },
  ],
  pattern:
    /^(\s*?)<section carousel-single>(.*?)<\/section>$/ms,
  fromBlock: function (match) {
    return {
      header: match[1],
      description: match[2],
      gallery: match[3],
      uuid: match[4],
    };
  },
  toBlock: SingleCarousel,
  toPreview: () => '<h1>Carousel Block</h1>',
};
