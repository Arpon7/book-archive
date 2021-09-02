
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', captureInput);

function captureInput() {
  const search = searchInput.value;
  if (search === '') {
    searchInput.value = 'please enter a book name'
  }
  else {
    searchInput.value = "";
    const url = `HTTPS://openlibrary.org/search.json?q=${search}`;

    fetch(url)
      .then(res => res.json())
      .then((data) => displaySearch(data))
  }


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
  searchResult.innerHTML = ``;


  data.docs.forEach(book => {
    console.log(book)
    const bookTitle = book.title;
    const bookAuthor = book.author_name;
    const bookPublisher = book.publisher[0];
    const bookFirstPublish = book.first_publish_year;

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card container">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top img-fluid" alt="book-cover-page">
          <div class="card-body">
            <h3 class="card-title">${bookTitle}</h3>
            <h6> Author:  ${bookAuthor}</h6>
            <p>Publisher: ${bookPublisher}</p>
            <p>First Published: ${bookFirstPublish}</p>
            

            
          </div>
        </div>
    `
    searchResult.appendChild(div)
  })


}
