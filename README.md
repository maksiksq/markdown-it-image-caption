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
### ✨ This renders into: <br><br>
![example](https://github.com/maksiksq/markdown-it-image-caption/blob/master/assets/images/img.png)

<br>

**Note:** if there is no caption provided e.g. a decorative image, it will be an `<img>` like usual. If you want to keep it a `<figure>` for semantic or other reasons, just replace the caption with `:::nocaption` like this:<br>
```markdown
![alt-text](image-source ':::nocaption')
```
<br>