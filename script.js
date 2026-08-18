
const search = document.getElementById('searchBox');
const cards = [...document.querySelectorAll('.card')];
const count = document.getElementById('paperCount');
const empty = document.getElementById('empty');

function filterPapers(){
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = card.dataset.title.toLowerCase().includes(q);
    card.hidden = !match;
    if(match) visible++;
  });
  count.textContent = `${visible} paper${visible === 1 ? '' : 's'}`;
  empty.style.display = visible ? 'none' : 'block';
}
search.addEventListener('input', filterPapers);
filterPapers();
