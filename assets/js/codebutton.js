// assets/js/post.js
let codeBlocks = document.querySelectorAll('pre.highlight');

function fix_lines(codeBlock) {
    let lines = codeBlock.parentElement.querySelector("pre.lines")
    let lines_array = lines.textContent.trim().split("\n")
    if (lines.offsetHeight != codeBlock.offsetHeight) {
        lines.innerText = lines_array.slice(0, lines_array.length - 1).join("\n")
    }

}

codeBlocks.forEach(function (codeBlock) {
    let copyButton = document.createElement('button');
    copyButton.className = 'copy';
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = 'Copy';

    codeBlock.append(copyButton);

    fix_lines(codeBlock)

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
