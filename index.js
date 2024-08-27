// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function displayAlbumInfo() {
  const albumId = parseInt(prompt('Enter an album ID: '));
  const album = await fetchData(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  const photos = await fetchData(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  );

  console.log(`Album: ${album.title}`);

  for (const photo of photos) {
    console.log(`  - ${photo.title}`);
  }
}

displayAlbumInfo();
