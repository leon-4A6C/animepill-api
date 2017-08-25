const Anime = require("../");
const client = new Anime();

client.getEpisodes("bleach")
  .then(eps => eps[0].getEpisode())
  .then(vids => console.log(vids));

client.search("bleach")
  .then(res => {
    return res.find(x => x.type === "TV")
      .getEpisodes();
  })
  .then(eps => console.log(eps));
