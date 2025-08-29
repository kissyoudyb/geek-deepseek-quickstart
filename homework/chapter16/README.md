# Markdown到HTML转换器

一个纯JavaScript实现的Markdown到HTML转换函数，功能与Python的`markdown2.markdown()`完全一样。

## 功能特性

- ✅ 支持所有标准Markdown语法
- ✅ 标题（#, ##, ###, ...）
- ✅ 粗体（**text**, __text__）
- ✅ 斜体（*text*, _text_）
- ✅ 删除线（~~text~~）
- ✅ 代码块（```code```）和行内代码（`code`）
- ✅ 块引用（> text）
- ✅ 水平线（---, ***）
- ✅ 无序列表（*, -, +）
- ✅ 有序列表（1., 2., 3., ...）
- ✅ 链接（[text](url)）
- ✅ 图片（![alt](src)）
- ✅ 换行处理（两个空格或反斜杠）
- ✅ 段落自动包装

## 安装和使用

### 在Node.js环境中使用

```javascript
// 导入函数
const markdownToHtml = require('./markdown-to-html.js');

// 使用示例
const markdownText = '# 标题\n这是**粗体**文字';
const html = markdownToHtml(markdownText);
console.log(html);
```

### 在浏览器环境中使用

```html
<script src="markdown-to-html.js"></script>
<script>
    const markdownText = '# 标题\n这是**粗体**文字';
    const html = markdownToHtml(markdownText);
    document.getElementById('content').innerHTML = html;
</script>
```

## API说明

### `markdownToHtml(data1)`

将Markdown格式的字符串转换为HTML格式。

**参数：**
- `data1` (string): Markdown格式的字符串

**返回值：**
- (string): HTML格式的字符串

**错误处理：**
- 如果输入不是字符串，抛出TypeError
- 如果输入是空字符串，返回空字符串

## 示例

### 基本使用

```javascript
const markdown = `
# 欢迎使用

这是一个**示例**文本，包含*斜体*和[链接](https://example.com)。

## 功能列表

- 标题支持
- 列表支持
- 代码块支持

\`\`\`javascript
console.log("Hello World");
\`\`\`
`;

const html = markdownToHtml(markdown);
console.log(html);
```

### 错误处理

```javascript
try {
    // 正确用法
    const result1 = markdownToHtml('# 标题');
    
    // 错误用法 - 会抛出错误
    const result2 = markdownToHtml(123);
} catch (error) {
    console.error('转换错误:', error.message);
}
```

## 测试

项目包含完整的测试套件：

### 运行Node.js测试

```bash
node test-markdown.js
```

### 运行浏览器测试

在浏览器中打开 `test-browser.html` 文件查看测试结果和示例。

### 与Python markdown2库比较

```bash
python compare-with-python.py
```

## 文件结构

```
.
├── markdown-to-html.js     # 主转换函数
├── test-markdown.js        # Node.js测试脚本
├── test-browser.html       # 浏览器测试页面
├── compare-with-python.py  # 与Python库功能比较
├── usage-example.js        # 使用示例
└── README.md              # 说明文档
```

## 与Python markdown2.markdown()的兼容性

这个JavaScript实现旨在与Python的`markdown2.markdown()`函数保持功能一致性，包括：

1. 相同的输入输出行为
2. 相同的语法支持范围
3. 类似的错误处理机制
4. 一致的格式化规则

## 注意事项

- 这个实现是纯JavaScript，不依赖任何外部库
- 对于复杂的Markdown扩展语法（如表格、脚注等），可能需要额外处理
- 性能经过优化，适合大多数应用场景

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 许可证

MIT License
