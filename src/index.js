var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
//=================================
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// New code for the <nav> element manipulation
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
//=================================

//==================================
// Adding top-level menu links
menuLinks.forEach((link) => {
  const linkElement = document.createElement("a");
  linkElement.href = link.href;
  linkElement.textContent = link.text;
  topMenuEl.appendChild(linkElement);
});
//======================================
function buildSubmenu(subLinks) {
  // Clear the submenu content
  subMenuEl.innerHTML = "";

  // Loop through each sub-link and create an <a> element for it
  subLinks.forEach((subLink) => {
    const subLinkEl = document.createElement("a");
    subLinkEl.href = subLink.href;
    subLinkEl.textContent = subLink.text;
    subMenuEl.appendChild(subLinkEl);
  });
} //======================================

const topMenuLinks = topMenuEl.querySelectorAll("a"); //////
topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;
  console.log(evt.target.textContent);
  //==================================================
  //topMenuLinks.forEach((link) => { maybe use this to highlight the clicked link
  //go through each list one at time and remove active
  document.querySelectorAll("#top-menu a").forEach((link) => {
    link.classList.remove("active");
  });
  if (!evt.target.classList.contains("active")) {
    evt.target.classList.add("active");
  } else {
    evt.target.classList.remove("active");
    subMenuEl.style.top = "0";
    return; // Hide submenu if link is being deactivated
  }

  // Find the clicked link's data in menuLinks array
  const clickedLink = menuLinks.find(
    (link) => link.text === evt.target.textContent
  );

  // Check if clicked link has sub-links and adjust submenu
  if (clickedLink && clickedLink.subLinks) {
    subMenuEl.style.top = "100%"; // Show submenu
    buildSubmenu(clickedLink.subLinks); // Populate submenu with sub-links
  } else {
    subMenuEl.style.top = "0"; // Hide submenu if no sub-links
  }
});
//===========================================================
