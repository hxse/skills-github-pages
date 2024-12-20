// assets/js/post.js

function fix_lines(codeBlock) {
    let lines = codeBlock.parentElement.querySelector("pre.lines")
    console.log(lines)
    let lines_array = lines.textContent.trim().split("\n")
    if (lines.offsetHeight != codeBlock.offsetHeight) {
        lines.innerText = lines_array.slice(0, lines_array.length - 1).join("\n")
    }

}

function check_lines(codeBlocks) {
    for (let codeBlock of codeBlocks) {
        let lines = codeBlock.parentElement.querySelector("pre.lines")
        if (!lines) {
            return false
        }
    }
    return true
}

function add_click() {
    let codeBlocks = document.querySelectorAll('pre.highlight');

    const isLines = check_lines(codeBlocks)
    if (!isLines) return

    clearInterval(myInterval);

    codeBlocks.forEach(function (codeBlock) {
        let copyButton = document.createElement('button');
        copyButton.className = 'copy';
        copyButton.type = 'button';
        copyButton.ariaLabel = 'Copy code to clipboard';
        copyButton.innerText = 'Copy';

        codeBlock.append(copyButton);

        // fix_lines(codeBlock)

        copyButton.addEventListener('click', function () {
            let code = codeBlock.querySelector('code').innerText.trim();
            window.navigator.clipboard.writeText(code);

            copyButton.innerText = 'Copied';
            let fourSeconds = 4000;

            setTimeout(function () {
                copyButton.innerText = 'Copy';
            }, fourSeconds);
        });
    });

}
const myInterval = setInterval(add_click, 200);

