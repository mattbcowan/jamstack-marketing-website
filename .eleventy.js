require('dotenv').config()
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer')

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('documentToHtmlString', documentToHtmlString)

    eleventyConfig.addShortcode('contentBlock', function (block) {
        return `<div>
        ${documentToHtmlString(block.fields.content)}
        </div>`
    })

    eleventyConfig.addShortcode('heroBlock', function (block) {
        return `<div>
          <img src="${block.fields.image.fields.file.url}" alt="${block.fields.image.fields.file.title}" />
          ${block.fields.headline}
        </div>`
    })
}
