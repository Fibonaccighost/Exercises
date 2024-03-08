
let text = document.querySelector(".text");

async function main() {
    async function textWithDelay(message) {
        let delay = (Math.floor(Math.random() * 6) + 2) * 1000;
        function dotpattern() {
            let dots = "";
            for (let i = 0; i < 3; i++) {
                dots += "."            
            }
            return dots
        }
        await new Promise(resolve => setTimeout(resolve, delay));
        text.textContent = message+ ""+dotpattern();
    }

    await textWithDelay("Initializing Hacking");
    await textWithDelay("Reading your Files");
    await textWithDelay("Password files Detected");
    await textWithDelay("Sending all passwords and personal files to server");
    await textWithDelay("Cleaning up");
    await textWithDelay("");
}

main();
