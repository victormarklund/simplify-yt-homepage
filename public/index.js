const baseUrl = "https://www.youtube.com/results?search_query=";
const searchBar = document.getElementById('search-bar');
let searchValue = "";

searchBar.oninput = (e) => {
  searchValue = e.target.value.replace(/\s/g, '+');
  searchBar.value = e.target.value;
}

function search() {
  window.location.href = baseUrl + searchValue;
  return false;
}
