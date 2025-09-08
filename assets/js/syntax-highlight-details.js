// Simple syntax highlighting for code blocks inside details elements
document.addEventListener('DOMContentLoaded', function() {
    // Find all code blocks inside details elements
    const detailsCodeBlocks = document.querySelectorAll('details pre code');
    
    detailsCodeBlocks.forEach(function(codeBlock) {
        if (codeBlock.classList.contains('python') || codeBlock.textContent.includes('from ') || codeBlock.textContent.includes('import ')) {
            highlightPythonCode(codeBlock);
        }
    });
});

function highlightPythonCode(codeBlock) {
    let html = codeBlock.innerHTML;
    
    // Keywords
    const keywords = ['from', 'import', 'True', 'False', 'None', 'def', 'class', 'if', 'else', 'elif', 'for', 'while', 'return', 'print', 'and', 'or', 'not', 'in', 'is', 'with', 'as', 'try', 'except', 'finally', 'raise', 'pass', 'break', 'continue', 'lambda', 'yield'];
    
    keywords.forEach(function(keyword) {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        html = html.replace(regex, `<span class="syntax-keyword">${keyword}</span>`);
    });
    
    // Strings (single and double quotes)
    html = html.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="syntax-string">$1$2$1</span>');
    
    // Comments
    html = html.replace(/(#.*$)/gm, '<span class="syntax-comment">$1</span>');
    
    // Numbers
    html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="syntax-number">$1</span>');
    
    // Function calls (word followed by opening parenthesis)
    html = html.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="syntax-function">$1</span>');
    
    // Operators
    const operators = ['=', '==', '!=', '<', '>', '<=', '>=', '+', '-', '*', '/', '//', '%', '**', '+=', '-=', '*=', '/=', '%=', '**=', '&', '|', '^', '~', '<<', '>>', 'and', 'or', 'not', 'in', 'is'];
    operators.forEach(function(op) {
        const regex = new RegExp(`\\${op.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
        html = html.replace(regex, `<span class="syntax-operator">${op}</span>`);
    });
    
    codeBlock.innerHTML = html;
}
