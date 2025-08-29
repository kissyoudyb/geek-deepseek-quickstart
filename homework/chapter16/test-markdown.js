// 测试Markdown到HTML转换功能
const markdownToHtml = require('./markdown-to-html.js');

// 测试用例
const testCases = [
    {
        name: '标题测试',
        markdown: '# 一级标题\n## 二级标题\n### 三级标题',
        expected: '<h1>一级标题</h1>\n<h2>二级标题</h2>\n<h3>三级标题</h3>'
    },
    {
        name: '粗体和斜体测试',
        markdown: '这是**粗体**文字和*斜体*文字',
        expected: '<p>这是<strong>粗体</strong>文字和<em>斜体</em>文字</p>'
    },
    {
        name: '链接测试',
        markdown: '访问[百度](https://www.baidu.com)',
        expected: '<p>访问<a href="https://www.baidu.com">百度</a></p>'
    },
    {
        name: '代码测试',
        markdown: '行内代码：`console.log()`\n\n代码块：\n```\nfunction test() {\n    return "hello";\n}\n```',
        expected: '<p>行内代码：<code>console.log()</code></p>\n<pre><code>function test() {\n    return "hello";\n}\n</code></pre>'
    },
    {
        name: '列表测试',
        markdown: '- 项目1\n- 项目2\n- 项目3\n\n1. 第一项\n2. 第二项\n3. 第三项',
        expected: '<ul><li>项目1</li>\n<li>项目2</li>\n<li>项目3</li></ul>\n<ol><li>第一项</li>\n<li>第二项</li>\n<li>第三项</li></ol>'
    },
    {
        name: '引用测试',
        markdown: '> 这是一个引用\n> 多行引用',
        expected: '<blockquote>这是一个引用</blockquote>\n<blockquote>多行引用</blockquote>'
    }
];

// 运行测试
console.log('开始测试Markdown到HTML转换功能...\n');

let passed = 0;
let failed = 0;

testCases.forEach((testCase, index) => {
    console.log(`测试 ${index + 1}: ${testCase.name}`);
    console.log('输入Markdown:');
    console.log(testCase.markdown);
    
    try {
        const result = markdownToHtml(testCase.markdown);
        console.log('输出HTML:');
        console.log(result);
        console.log('期望HTML:');
        console.log(testCase.expected);
        
        // 简单比较（去除空白字符差异）
        const normalizedResult = result.replace(/\s+/g, ' ').trim();
        const normalizedExpected = testCase.expected.replace(/\s+/g, ' ').trim();
        
        if (normalizedResult === normalizedExpected) {
            console.log('✅ 测试通过\n');
            passed++;
        } else {
            console.log('❌ 测试失败 - 输出不匹配\n');
            failed++;
        }
    } catch (error) {
        console.log('❌ 测试失败 - 发生错误:', error.message, '\n');
        failed++;
    }
});

console.log(`测试结果: ${passed} 通过, ${failed} 失败`);
console.log('总测试用例:', testCases.length);

// 示例使用
console.log('\n=== 示例使用 ===');
const exampleMarkdown = `
# 欢迎使用Markdown转换器

这是一个**示例**文本，包含*斜体*和[链接](https://example.com)。

## 功能特点

- 支持标题
- 支持列表
- 支持代码块
- 支持引用

\`\`\`javascript
function example() {
    return "Hello World!";
}
\`\`\`
`;

console.log('输入Markdown:');
console.log(exampleMarkdown);
console.log('\n输出HTML:');
console.log(markdownToHtml(exampleMarkdown));
