const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTF_SPACE,
  accessToken: process.env.CTF_ACCESSTOKEN,
});

module.exports = function () {
  return client
    .getEntries({ content_type: "blog", order: "sys.createdAt" })
    .then((res) => {
      return res.items.map((item) => item.fields);
    });
};
