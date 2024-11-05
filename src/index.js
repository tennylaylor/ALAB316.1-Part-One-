import ".styles.css";

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

const menuLinks = [
    {href: '#home', text:'home'},
    {href: '#about', text:'about'},
    {href: '#services', text:'services'},
    {href: '#contact', text:'contact'},
];

menuLinks.forEach(link => {
    const linkElement = document.createElement('a'); 
    linkElement.href = link.href;                    
    linkElement.textContent = link.text;            
    topMenuEl.appendChild(linkElement);              
  });