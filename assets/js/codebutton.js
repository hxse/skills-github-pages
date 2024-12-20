var codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach(function (codeBlock) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy btn'; // btn은 minimal mistake에서 지원하는 버튼을 사용하기 위해 추가 하였다.
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = 'Copy';

    codeBlock.append(copyButton);

    copyButton.addEventListener('click', function () {
        var code = codeBlock.querySelector('.rouge-code').innerText.trim();
        window.navigator.clipboard.writeText(code);

        copyButton.innerText = 'Copied';

        var fourSeconds = 4000;
        setTimeout(function () {
            copyButton.innerText = 'Copy';
        }, fourSeconds);
    });
});
