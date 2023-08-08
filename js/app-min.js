const moon='<svg\nxmlns="http://www.w3.org/2000/svg"\nwidth="24"\nheight="24"\nviewBox="0 0 24 24"\nfill="none"\nstroke="currentColor"\nstroke-width="2"\nstroke-linecap="round"\nstroke-linejoin="round"\nclass="feather feather-moon"\n>\n<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />\n</svg>',sun='<svg\nxmlns="http://www.w3.org/2000/svg"\nwidth="24"\nheight="24"\nviewBox="0 0 24 24"\nfill="none"\nstroke="currentColor"\nstroke-width="2"\nstroke-linecap="round"\nstroke-linejoin="round"\nclass="feather feather-sun"\n>\n<circle cx="12" cy="12" r="5" />\n<line x1="12" y1="1" x2="12" y2="3" />\n<line x1="12" y1="21" x2="12" y2="23" />\n<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />\n<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />\n<line x1="1" y1="12" x2="3" y2="12" />\n<line x1="21" y1="12" x2="23" y2="12" />\n<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />\n<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />\n</svg>',toggler=document.querySelector(".theme-toggler"),projects=document.getElementById("projects");function getCurrentTheme(){let n=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return localStorage.getItem("aashar.theme")&&(n=localStorage.getItem("aashar.theme")),n}function setTheme(n){const e=document.querySelector(":root");"dark"===n?(toggler.innerHTML=moon,projects.style.boxShadow="0 -2px 4px 0px rgb(253, 253, 253)"):(toggler.innerHTML=sun,projects.style.boxShadow="none"),e.setAttribute("theme",`${n}`)}toggler.addEventListener("click",(()=>{document.querySelector(":root");let n=getCurrentTheme();"dark"===n?(toggler.innerHTML=moon,n="light"):(toggler.innerHTML=sun,n="dark"),localStorage.setItem("aashar.theme",`${n}`),setTheme(n)})),window.addEventListener("DOMContentLoaded",(()=>{setTheme(getCurrentTheme())}));const data='\n<div class="container" data-aos="fade-up">\n          <img src="images/tenzies.png" alt="tenzies" />\n          <div class="desc">\n            <h2>Tenzies</h2>\n            <h3>Tenzies Game using React and Local Storage</h3>\n\n            <div class="btns">\n              <a href="https://github.com/Aashar-Mehmood/react-tenzies-game"\n                >View Code</a\n              >\n              <a href="https://aashar-mehmood.github.io/react-tenzies-game/"\n                >Launch</a\n              >\n            </div>\n          </div>\n        </div>\n\n<div class="container" data-aos="fade-down">\n<img src="images/crowdFunding-min.jpg" alt="Crowd Funding Website" />\n<div class="desc">\n  <h2>Crowd Funding </h2>\n  <h3>Website challenge from Frontend Mentor</h3>\n  <br />\n\n  <div class="btns">\n    <a href="https://github.com/Aashar-Mehmood/Crowd-Funding-Website"\n      >View Code</a\n    >\n    <a href="https://aashar-mehmood.github.io/Crowd-Funding-Website"\n      >Launch</a\n    >\n  </div>\n</div>\n</div>\n\n<div class="container" data-aos="fade-up">\n          <img src="images/calculator.png" alt="JavaScript calculator" />\n          <div class="desc">\n            <h2>Calculator App</h2>\n            <h3>Multi theme Calculator app usign vanilla Js and CSS</h3>\n            <br />\n\n            <div class="btns">\n              <a href="https://github.com/Aashar-Mehmood/JavaScript-Calculator"\n                >View Code</a\n              >\n              <a href="https://aashar-mehmood.github.io/JavaScript-Calculator"\n                >Launch</a\n              >\n            </div>\n          </div>\n        </div>\n\n',data1='<h2>Some of Project Samples</h2>\n<div class="container" data-aos="fade-right">\n  <img src="images/starshare.png" alt="Star Share" />\n  <div class="desc">\n    <h2>StarShare</h2>\n    <h3>Music Platform with admin Panel and Payment Functionality</h3>\n\n    <div class="btns">\n      <a\n        href="https://github.com/Aashar-Mehmood/starshare"\n        target="_blank"\n        >View Code</a\n      >\n      \x3c!-- <a href="http://starshare.infinityfreeapp.com/" target="_blank"\n        >Launch</a\n      > --\x3e\n      <a href="https://youtu.be/56W7dLD-2Gg">Watch Demo</a>\n    </div>\n  </div>\n</div>\n<div class="container" data-aos="fade-down">\n  <img src="images/cmpnd.png" alt="Star Share" />\n  <div class="desc">\n    <h2>CMS CMPND</h2>\n    <h3>CMS for a fitness App (Developed At Dankia Solutions)</h3>\n\n    <div class="btns">\n      \x3c!-- <a href="http://starshare.infinityfreeapp.com/" target="_blank"\n        >Launch</a\n      > --\x3e\n      <a href="https://youtu.be/BIOna9GUBwA">Watch Demo</a>\n      <a href="https://youtu.be/BIOna9GUBwA">View Details</a>\n    </div>\n  </div>\n</div>\n<div class="container" data-aos="fade-up">\n    <img src="images/tutorHunt.PNG" alt="Tutor Hunt" />\n    <div class="desc">\n      <h2>Tutor Hunt</h2>\n      <h3>Online Learning Platform (Developed At Dankia Solutions)</h3>\n      <div class="btns">\n        <a href="https://youtu.be/Ql6UgdwiQe4">Watch Demo</a>\n        <a href="https://skylarks.pakmultiservices.com/public/">Launch</a>\n      </div>\n    </div>\n</div>\n<div class="container" data-aos="fade-right">\n  <img src="images/bloggingBlaze.png" alt="Blogging Blaze" />\n  <div class="desc">\n    <h2>Blogging Blaze</h2>\n    <h3>Blog Website using PHP, MYSQL with admin Panel</h3>\n\n    <div class="btns">\n      <a href="https://github.com/Aashar-Mehmood/Dynamic-Blog-Website"\n        >View Code</a\n      >\n      \x3c!-- <a href="http://bloggingblaze.infinityfreeapp.com/">Launch</a> --\x3e\n      <a href="https://youtu.be/sGFQVU3JL7w">Watch Demo</a>\n    </div>\n  </div>\n</div>\n\n<div class="container" data-aos="fade-down">\n  <img src="images/multiStepForm.png" alt="React Multi Step Form" />\n  <div class="desc">\n    <h2>React Form</h2>\n    <h3>Multi Step Form using Custom validation</h3>\n\n    <div class="btns">\n      <a href="https://github.com/Aashar-Mehmood/multi-step-form"\n        >View Code</a\n      >\n      <a href="https://multi-step-form-12.netlify.app/">Launch</a>\n    </div>\n  </div>\n</div>\n<div class="container" data-aos="fade-up">\n  <img src="images/Quizzical.png" alt="Quizzical" />\n  <div class="desc">\n    <h2>Quizzical</h2>\n    <h3>Quiz App using React and OTDB API</h3>\n    <div class="btns">\n      <a href="https://github.com/Aashar-Mehmood/react-quiz"\n        >View Code</a\n      >\n      <a href="https://react-quiz-scrimba.netlify.app/">Launch</a>\n    </div>\n  </div>\n</div>',moreBtn=document.getElementById("moreProj"),lessBtn=document.getElementById("lessProj"),container=document.getElementById("projects");function showMore(){container.innerHTML+=data,container.scrollBy(0,20),moreBtn.style.display="none",lessBtn.style.display="flex"}function showLess(){container.innerHTML=data1,container.scrollIntoView(),moreBtn.style.display="flex",lessBtn.style.display="none"}moreBtn.addEventListener("click",showMore),lessBtn.addEventListener("click",showLess);