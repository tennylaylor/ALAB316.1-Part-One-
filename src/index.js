import ".styles.css";
// Step 1: Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// Step 2: Set the background color of mainEl to the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Step 3: Set the content of mainEl to "<h1>DOM Manipulation</h1>".
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Step 4: Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');