let contrast = false;

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

function callPhone(num){
    window.open(`tel:${num}`);
}

function switchContrast(self){


    self.classList.toggle('rotate')

    contrast = !contrast;
    checkContrast()
}

//window.load(checkContrast())


function checkContrast(){

    console.log(`chek, is ${contrast}`);
    if(contrast){
        console.log("change contrast");
        document.body.classList.toggle('alt-mode');
    }
    else{
        document.body.classList.remove('alt-mode');
    }
}

function switchText(self,tts, tts2){

    if(self.textContent === tts){
        self.textContent = tts2;
    }
    else{
        self.textContent = tts;
    }
}

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