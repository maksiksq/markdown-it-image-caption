# 🌃 markdown-it-image-caption (wizardified)

**Note:** this is a quick fork of [@andatoshiki/markdown-it-image-caption](https://www.npmjs.com/package/@andatoshiki/markdown-it-image-caption) but with full Typescript support and no unnecessary &lt;strong&gt; tags.
<hr>
This [markdown-it](https://github.com/markdown-it/markdown-it) plugin allows you to easily wrap your markdown images in &lt;figure&gt; and add a &lt;figcaption&gt; to them if you add an extra string after the image source. You can optionally leave it as an &lt;img&gt; or just &lt;figure&gt; as well.

### ✏️ The syntax:<br>
```markdown
![alt-text](image-source 'caption')
```
<br>

**Note:** if there is no caption provided e.g. a decorative image, it will be an &lt;img&gt; like usual. If you want to keep it a &lt;figure&gt; for semantic or other reasons just replace the caption with ':::nocaption' like this:<br>
```markdown
![alt-text](image-source ':::nocaption')
```
<br>