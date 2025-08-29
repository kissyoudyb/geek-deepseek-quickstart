/**
 * 将Markdown文本转换为HTML格式
 * 功能与Python的markdown2.markdown()相同
 * @param {string} data1 - Markdown格式的字符串
 * @returns {string} HTML格式的字符串
 */
function markdownToHtml(data1) {
    if (typeof data1 !== 'string') {
        throw new Error('输入必须是字符串类型');
    }
    
    if (data1.trim() === '') {
        return '';
    }
    
    // 实现Markdown到HTML的转换逻辑
    let html = data1;
    
    // 1. 处理标题 (#, ##, ###, etc.)
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    
    // 2. 处理粗体 (**text** 或 __text__)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
    
    // 3. 处理斜体 (*text* 或 _text_)
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');
    
    // 4. 处理删除线 (~~text~~)
    html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');
    
    // 5. 处理代码块 (```code```)
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // 6. 处理行内代码 (`code`)
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // 7. 处理块引用 (> text)
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // 8. 处理水平线 (---, ***)
    html = html.replace(/^\s*[-*_]{3,}\s*$/gim, '<hr>');
    
    // 9. 处理无序列表 (* item, - item, + item)
    html = html.replace(/^\s*[*+-] (.*$)/gim, '<li>$1</li>');
    html = html.replace(/<li>.*<\/li>(?:\n<li>.*<\/li>)*/g, function(match) {
        return '<ul>' + match + '</ul>';
    });
    
    // 10. 处理有序列表 (1. item, 2. item)
    html = html.replace(/^\s*\d+\. (.*$)/gim, '<li>$1</li>');
    html = html.replace(/<li>.*<\/li>(?:\n<li>.*<\/li>)*/g, function(match) {
        return '<ol>' + match + '</ol>';
    });
    
    // 11. 处理链接 ([text](url))
    html = html.replace(/\[([^\[]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // 12. 处理图片 (![alt](src))
    html = html.replace(/!\[([^\[]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
    
    // 13. 处理换行 (两个空格或反斜杠结尾)
    html = html.replace(/  \n/g, '<br>');
    html = html.replace(/\\\n/g, '<br>');
    
    // 14. 处理段落（将连续文本包装在<p>标签中）
    html = html.replace(/^\s*(\n)?(.+)(\n)?\s*$/gim, function(match, p1, p2) {
        if (/^<(h\d|ul|ol|li|blockquote|pre|code|hr)/.test(p2.trim())) {
            return p2;
        }
        return '<p>' + p2 + '</p>';
    });
    
    // 清理多余的段落标签
    html = html.replace(/<\/p>\s*<p>/g, '\n');
    
    return html.trim();
}

// 导出函数供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = markdownToHtml;
}

// 示例使用
if (typeof window !== 'undefined') {
    // 浏览器环境
    window.markdownToHtml = markdownToHtml;
}
