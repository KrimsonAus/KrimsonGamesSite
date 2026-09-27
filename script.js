let contrast = false;
document.addEventListener('DOMContentLoaded', () => {
    autoCarousel();

});


function autoCarousel() {
    console.log("set to auto");

    const carousels = document.querySelectorAll('wa-carousel');
    setInterval(() => {
        carousels.forEach(carousel => {
            requestAnimationFrame(() => {
                carousel.next();
            });
        });
    }, 5000);
}

function switchToHD(self) {
    self.src = self.src.split('.')[0] + "HD.png"
}

function switchToLow(self) {
    self.src = self.src.split('H')[0] + ".png"
}

// function scrollNext(self) {
//     self.style.pointerEvents = 'none';
//
//     setTimeout(() => {
//         self.style.pointerEvents = '';
//     }, 50);
// }

function takeToPage(page) {
    window.location.href = `./${page}.html`;
}

function collapse(elem, cont) {
    const arrow = elem.querySelector('.ar');
    const content = document.getElementById(cont);

    content.hidden = !content.hidden;

    if (content.hidden) {
        arrow.textContent = "▲";
    } else {
        arrow.textContent = "▼";
    }
}

function callPhone(num) {
    window.open(`tel:${num}`);
}

function openEmail(email){
    window.open(`mailto:${email}`);
}

function switchContrast(self) {


    self.classList.toggle('rotate')

    contrast = !contrast;
    checkContrast()
}

//window.load(checkContrast())


function checkContrast() {

    console.log(`chek, is ${contrast}`);
    if (contrast) {
        console.log("change contrast");
        document.body.classList.toggle('alt-mode');
    } else {
        document.body.classList.remove('alt-mode');
    }
}

function switchText(self, tts, tts2) {

    if (self.textContent === tts) {
        self.textContent = tts2;
    } else {
        self.textContent = tts;
    }
}

//thx to https://muhimasri.com/blogs/how-to-save-files-in-javascript/

async function downloadFile(url, filename) {
    try {
        const response = await fetch(url, {
            headers: {
                Accept:
                    "application/json, text/plain,application/zip, image/png, image/jpeg, image/*",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        saveFile(blobUrl, filename);
        URL.revokeObjectURL(blobUrl);
    } catch (err) {
        console.error("Error in fetching and downloading file:", err);
    }
}

function saveFile(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "file-name";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


//AI ZONE -------------------------------------------------------------------------------------------

let isDragging = false;
let currentElement = null;

function startDrag(element) {
    element.addEventListener("mousedown", (e) => {
        isDragging = true;
        currentElement = element;

        e.preventDefault();
    });
}

document.addEventListener("mousemove", (e) => {
    if (isDragging && currentElement) {
        currentElement.style.position = 'absolute';
        currentElement.style.left = `${e.clientX - 150}px`;
        currentElement.style.top = `${e.clientY - 10}px`;
    }
});
document.addEventListener("mouseup", () => {
    isDragging = false;
    currentElement = null;
});