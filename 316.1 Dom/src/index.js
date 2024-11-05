
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


const mainEl = document.querySelector('main');


mainEl.style.backgroundColor = 'var(--main-bg)';


mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Step 4: Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

// New code for the <nav> element manipulation
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach(link => {
    const linkElement = document.createElement('a'); 
    linkElement.href = link.href;                    
    linkElement.textContent = link.text;            
    topMenuEl.appendChild(linkElement);              
  });