document.addEventListener("DOMContentLoaded", function () {
    if (typeof marked === "undefined") {
        console.error("Marked.js is not loaded! Make sure to include it.");
        return;
    }

    
    const markdownInput = document.getElementById("markdown-input");
    const previewOutput = document.getElementById("preview-output");
    const clearButton = document.getElementById("clear-button");

    
    function updatePreview() {
        const markdownText = markdownInput.value.trim();

      
        previewOutput.innerHTML = marked.parse(markdownText, { breaks: true });

        
        setTimeout(() => {
            previewOutput.scrollTop = previewOutput.scrollHeight;
        }, 10);
    }

    
    function clearMarkdown() {
        markdownInput.value = "";
        previewOutput.innerHTML = "<p><em>Live preview will appear here...</em></p>";
    }

    
    markdownInput.addEventListener("input", updatePreview);
    clearButton.addEventListener("click", clearMarkdown);

    
    clearMarkdown();
});
