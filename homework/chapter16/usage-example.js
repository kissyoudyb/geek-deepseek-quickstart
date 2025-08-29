/**
 * Markdown到HTML转换函数使用示例
 * 功能与Python的markdown2.markdown()相同
 */

// 导入转换函数（如果在Node.js环境中）
// const markdownToHtml = require('./markdown-to-html.js');

// 如果在浏览器环境中，函数已经全局可用

// 示例1: 基本使用
function exampleBasicUsage() {
    console.log('=== 示例1: 基本使用 ===');
    
    const markdownText = `
# 欢迎使用Markdown转换器

这是一个**示例**文本，包含*斜体*和[链接](https://example.com)。

## 功能特点

- 支持标题转换
- 支持文本格式化（粗体、斜体等）
- 支持链接和图片
- 支持代码块和行内代码
- 支持列表和引用

\`\`\`javascript
// 示例代码
function greet(name) {
    return \`Hello, \${name}!\`;
}
\`\`\`
`;

    console.log('输入Markdown:');
    console.log(markdownText);
    
    console.log('\n输出HTML:');
    const htmlResult = markdownToHtml(markdownText);
    console.log(htmlResult);
}

// 示例2: 处理用户输入
function exampleUserInput() {
    console.log('\n=== 示例2: 处理用户输入 ===');
    
    // 模拟用户输入的Markdown
    const userInput = `
# 用户评论

用户**张三**写道:

> 这是一个很好的产品，我非常喜欢它的*设计*和功能。
> 特别是代码高亮功能很实用。

支持的功能:
- Markdown解析
- 实时预览
- 多种主题

查看[项目地址](https://github.com/example/markdown-parser)
`;

    console.log('用户输入:');
    console.log(userInput);
    
    console.log('\n转换后的HTML:');
    const result = markdownToHtml(userInput);
    console.log(result);
}

// 示例3: 错误处理
function exampleErrorHandling() {
    console.log('\n=== 示例3: 错误处理 ===');
    
    // 测试非字符串输入
    try {
        markdownToHtml(123); // 数字输入
        console.log('❌ 应该抛出错误但未抛出');
    } catch (error) {
        console.log('✅ 正确捕获错误:', error.message);
    }
    
    // 测试空字符串
    try {
        const result = markdownToHtml('');
        console.log('✅ 空字符串处理:', result === '' ? '返回空字符串' : '非空返回');
    } catch (error) {
        console.log('❌ 空字符串处理错误:', error.message);
    }
}

// 示例4: 集成到Web应用
function exampleWebIntegration() {
    console.log('\n=== 示例4: Web应用集成 ===');
    
    // 模拟一个简单的Markdown编辑器
    const mockEditor = {
        getValue: function() {
            return `# 实时预览示例

输入一些**Markdown**文本，查看*实时*HTML预览。

功能列表:
1. 标题支持
2. 列表支持
3. 代码块支持

\`console.log("Hello World");\`
`;
        },
        
        updatePreview: function(html) {
            console.log('实时预览HTML:');
            console.log(html);
        }
    };
    
    // 模拟实时预览功能
    const markdownContent = mockEditor.getValue();
    const htmlPreview = markdownToHtml(markdownContent);
    mockEditor.updatePreview(htmlPreview);
}

// 运行所有示例
function runAllExamples() {
    console.log('Markdown到HTML转换函数使用示例\n');
    
    exampleBasicUsage();
    exampleUserInput();
    exampleErrorHandling();
    exampleWebIntegration();
    
    console.log('\n=== 示例运行完成 ===');
}

// 如果在Node.js环境中运行
if (typeof require !== 'undefined' && require.main === module) {
    // 导入函数
    const markdownToHtml = require('./markdown-to-html.js');
    runAllExamples();
} else {
    // 浏览器环境 - 函数已全局可用
    console.log('在浏览器中打开 test-browser.html 查看示例');
}

// 导出函数供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        markdownToHtml,
        runAllExamples
    };
}
