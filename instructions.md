**Objective:** Create a simple program using async/await that prompts the user for an album ID, fetches the album's information and corresponding photos using an API, and displays the album title and the photo titles in a formatted template literal.

## API Base URL
```
https://jsonplaceholder.typicode.com
```

## Steps
1. Add a function named `fetchData` that accepts a URL and returns the JSON data using `fetch` and async/await.
```javascript
async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}
```
2. Create an async function named `displayAlbumInfo` that will display the album and its photos based on the user's input.
```javascript
async function displayAlbumInfo() {
```
3. Use `parseInt` along with `prompt` to get the album ID from the user and store it in a variable named `albumId`.
```javascript
  const albumId = parseInt(prompt('Enter an album ID: '));
```
4. Use the `fetchData` function and template literals to fetch the album data from the URL provided.
```javascript
  const album = await fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
```
5. Fetch the corresponding photos for the album using the `fetchData` function.
```javascript
  const photos = await fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
```
6. Display the album title using `console.log` and a template literal.
```javascript
  console.log(`Album: ${album.title}`);
```
7. Use a `for...of` loop to iteratively display the photo titles using `console.log`.
```javascript
  for (const photo of photos) {
    console.log(`  - ${photo.title}`);
  }
}
```
8. Call the `displayAlbumInfo` function and test the program with different album IDs.
```javascript
displayAlbumInfo();
```

<details>
<summary>Full Code</summary>

```javascript
async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function displayAlbumInfo() {
  const albumId = parseInt(prompt('Enter an album ID: '));
  const album = await fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
  const photos = await fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);

  console.log(`Album: ${album.title}`);

  for (const photo of photos) {
    console.log(`  - ${photo.title}`);
  }
}

displayAlbumInfo();
```
</details>