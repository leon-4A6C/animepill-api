const Anime = require("../");
const client = new Anime();

client.getEpisodes("bleach")
  .then(eps => eps[3].getEpisode())
  .then(vids => console.log(vids));

client.search("bleach")
  .then(res => {
    return res.find(x => x.type === "TV")
      .getEpisodes();
  })
  .then(eps => console.log(eps));
