let nextRowIndex = 1;

window.addEventListener('DOMContentLoaded', () => {
  let rows = document.querySelectorAll('.row');
  rows.forEach((row) => {
    row.style.display = 'none';
  });
  rows[0].style.display = ''; // Show the first row
  var menuLinks = document.getElementsByClassName('menu-link');

  //add event listener to each menu link
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      let index = this.getAttribute('data-row-index');
      nextRowIndex = index;
      // Make rows visible up to the target row ID
      for (let i = 0; i <= parseInt(index); i++) {
        if (rows[i]) {
          rows[i].style.display = '';
          if (i === 1) {
            document.dispatchEvent(new Event('startNumbers')); // when row with numbers is displayed trigger event to start numbers animation
          }
          if (i === 2) {
            console.log('collapse');
            document.dispatchEvent(new Event('startCollapse')); // when row with collapse is displayed trigger event to start collapse
          }
        }
      }
    });
  }
});

function isBottomReached() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

async function revealNextRow() {
  const rows = document.querySelectorAll('.row');
  if (nextRowIndex < rows.length) {
    if (nextRowIndex === 2) {
      document.dispatchEvent(new Event('startNumbers')); // when row with numbers is displayed trigger event to start numbers animation
    }
    if (nextRowIndex === 1) {
     
      document.dispatchEvent(new Event('startCollapse')); // when row with collapse is displayed trigger event to start collapse
    }
    // Reveal the next row
    rows[nextRowIndex].style.display = '';
    rows[nextRowIndex].style.opacity = '0';
    await new Promise((resolve) => setTimeout(resolve, 150));
    rows[nextRowIndex].style.opacity = '1'; // Show the row

    nextRowIndex++;
    console.log('reveal' + nextRowIndex);
  }
}

window.addEventListener('wheel', () => {
  if (isBottomReached()) {
    revealNextRow();
  }
  setTimeout(() => {}, 100);
});

revealNextRow();
