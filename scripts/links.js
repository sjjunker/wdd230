const baseURL = "https://sjjunker.github.io/wdd230/";
const linksURL = "https://sjjunker.github.io/wdd230/data/links.json"

async function getLinks() {
    const promise = await fetch(linksURL);
    const data = await promise.json();
    console.log(data);
}

getLinks();