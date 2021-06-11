/*=============================================
=       START SECTION | SCROLLREVELAR LIBRARY       =
=============================================*/
window.sr = ScrollReveal({ reset: false });

sr.reveal(".animate-left", {
    origin: "left",
    duration: "1000",
    distance: "25rem",
    delay: 150,
});

sr.reveal(".animate-left-2", {
    origin: 'left',
    duration: "1200",
    distance: "25rem",
    delay: 350,
})

sr.reveal(".animate-right", {
    origin: "right",
    duration: "1000",
    distance: "25rem",
    delay: 450,
});

sr.reveal(".animate-left-line", {
    origin: "left",
    duration: "1000",
    distance: "25rem",
    delay: 500,
});

sr.reveal(".animate-right-line", {
    origin: "right",
    duration: "1000",
    distance: "25rem",
    delay: 500,
});

sr.reveal(".animate-top-icon", {
    origin: "bottom",
    duration: "1000",
    distance: "10rem",
    delay: 700,
});

sr.reveal(".animate-top", {
    origin: 'bottom',
    duration: '1300',
    distance: '25rem',
    delay: 300,
});

sr.reveal(".animate-bottom", {
    origin: 'top',
    duration: '1300',
    distance: '4rem',
    delay: 200,
});
/*=====  END OF SECTION | SCROLLREVELAR LIBRARY======*/

/*=============================================
=      START SECTION | SMOKE TEXT EFFECT VANILLAJS      =
=============================================*/

const text1 = document.querySelector(".text-1");
text1.innerHTML = text1.textContent.replace(/\S/g, "<span>$&</span>");

const text2 = document.querySelector(".text-2");
text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>");

const text3 = document.querySelector(".text-3");
text3.innerHTML = text3.textContent.replace(/\S/g, "<span>$&</span>");

const text4 = document.querySelector(".text-4");
text4.innerHTML = text4.textContent.replace(/\S/g, "<span>$&</span>");

const text5 = document.querySelector(".text-5");
text5.innerHTML = text5.textContent.replace(/\S/g, "<span>$&</span>");

const text6 = document.querySelector(".text-6");
text6.innerHTML = text6.textContent.replace(/\S/g, "<span>$&</span>");

const text7 = document.querySelector(".text-7");
text7.innerHTML = text7.textContent.replace(/\S/g, "<span>$&</span>");

const text8 = document.querySelector(".text-8");
text8.innerHTML = text8.textContent.replace(/\S/g, "<span>$&</span>");

const text9 = document.querySelector(".text-9");
text9.innerHTML = text9.textContent.replace(/\S/g, "<span>$&</span>");

const text10 = document.querySelector(".text-10");
text10.innerHTML = text10.textContent.replace(/\S/g, "<span>$&</span>");

const text11 = document.querySelector(".text-11");
text11.innerHTML = text11.textContent.replace(/\S/g, "<span>$&</span>");

const text12 = document.querySelector(".text-12");
text12.innerHTML = text12.textContent.replace(/\S/g, "<span>$&</span>");

const text13 = document.querySelector(".text-13");
text13.innerHTML = text13.textContent.replace(/\S/g, "<span>$&</span>");

const text14 = document.querySelector(".text-14");
text14.innerHTML = text14.textContent.replace(/\S/g, "<span>$&</span>");

const text15 = document.querySelector(".text-15");
text15.innerHTML = text15.textContent.replace(/\S/g, "<span>$&</span>");

const letters = document.querySelectorAll("span");
for (let i = 0; 0 < letters.length; i++) {
    letters[i].addEventListener("mouseover", function () {
        letters[i].classList.add("active");
    });
}
/*=====  END OF SECTION | SMOKE TEXT EFFECT VANILLAJS======*/

