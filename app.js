
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', captureInput);

function captureInput() {
  const search = searchInput.value;
  searchInput.value = "";
  const url = `http://openlibrary.org/search.json?q=${search}`;

  fetch(url)
    .then(res => res.json())
    .then((data) => displaySearch(data))

}

function displaySearch(data) {
  console.log(data)

  //display matched items number
  console.log(data.numFound);
  const matched = data.numFound;
  const div = document.getElementById('number-div');
  const p = document.createElement('p');
  p.innerText = `number of matched book: ${matched}`;
  div.appendChild(p);


  const searchResult = document.getElementById('search-result');

  data.docs.forEach(book => {
    console.log(book)
    const bookTitle = book.title;
    const bookAuthor = book.author_name;

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title">${bookTitle}</h3>
            <h6>${bookAuthor}</h6>
            <p>${}</p>

            
          </div>
        </div>
    `
    searchResult.appendChild(div)
  })


}
