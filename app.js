
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', captureInput);

function captureInput() {
  const search = searchInput.value;
  const url = `http://openlibrary.org/search.json?q=${search}`;

  fetch(url)
    .then(res => res.json())
    .then((data) => displaySearch(data))

}

function displaySearch(data) {
  {

    //display matched items number
    console.log(data.numFound);
    const matched = data.numFound;
    const div = document.getElementById('number-div');
    const p = document.createElement('p');
    p.innerText = `number of matched book: ${matched}`;
    div.appendChild(p);



    console.log(data.docs)
    data.docs.forEach(item => {
      console.log(item.title)
    })

  }
}
