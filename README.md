# 🌃 markdown-it-image-caption (wizardified)

**Note:** this is a quick fork of [@andatoshiki/markdown-it-image-caption](https://www.npmjs.com/package/@andatoshiki/markdown-it-image-caption) but with full Typescript support and no unnecessary `<strong>` tags.
<hr/>

This [markdown-it](https://github.com/markdown-it/markdown-it) plugin allows you to easily wrap your markdown images in `<figure>` and add a `<figcaption>` to them if you add an extra string after the image source. You can optionally leave it as an `<img>` or just a standalone `<figure>` without a caption as well.

### ✏️ The syntax:<br>
```markdown
![alt-text](image-source 'caption')
```

### 🧩 Example:
```js
import markdownit from 'markdown-it';
import mditimgcap from '@maksiks/markdown-it-image-caption';

const md = markdownit()
    .use(mditimgcap);

const text = md.render("![ngc-6992 (a really cool nebula)](https://i.redd.it/ggfqw7m7vbzz.jpg 'Heeeey! Look at me, I&apos;m a caption!')");
```

And with some extra styling,
### ✨ This renders into:
![image](https://private-user-images.githubusercontent.com/58907570/457926290-031a6a63-4eea-4060-ba94-2d3160dc7b0c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2ODY1OTUsIm5iZiI6MTc1MDY4NjI5NSwicGF0aCI6Ii81ODkwNzU3MC80NTc5MjYyOTAtMDMxYTZhNjMtNGVlYS00MDYwLWJhOTQtMmQzMTYwZGM3YjBjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjIzVDEzNDQ1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc1MTI0NzIwMTBhYjg1NDRkMDEzMDM3MTdkOWYwNmI3ODRkMDhmMzdlZTk4Y2I1NTcyMjhlYWRlZDc4YmM0OTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.rGgaOpgC_SCDwwoQ7jRpfmv1yvJzkxGpvv4XltSNFkQ)

<br>

**Note:** if there is no caption provided e.g. a decorative image, it will be an `<img>` like usual. If you want to keep it a `<figure>` for semantic or other reasons, just replace the caption with `:::nocaption` like this:<br>
```markdown
![alt-text](image-source ':::nocaption')
```
<br>

