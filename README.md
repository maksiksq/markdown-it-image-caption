# 🌃 markdown-it-image-caption (wizardified)

**Note:** this is a fork of [@andatoshiki/markdown-it-image-caption](https://www.npmjs.com/package/@andatoshiki/markdown-it-image-caption) but with full TypeScript support, no unnecessary `<strong>` tags and extra features.
<hr/>

This [markdown-it](https://github.com/markdown-it/markdown-it) plugin allows you to easily wrap your markdown images in `<figure>` and add a `<figcaption>` to them if you add an extra string after the image source. You can optionally leave it as an `<img>` or just a standalone `<figure>` without a caption as well, and style them.
### 📦 Install
```powershell
pnpm i @maksiks/markdown-it-image-caption
```
### ✏️ The syntax:<br>
```markdown
![alt-text](image-source 'caption | position | class')
```

### 🧩 Example:
```ts
import markdownit from 'markdown-it';
import mditimgcap from '@maksiks/markdown-it-image-caption';

const md = markdownit()
    .use(mditimgcap);

const text = md.render("![ngc-6992 (a really cool nebula)](https://i.redd.it/ggfqw7m7vbzz.jpg 'Heeeey! Look at me, I&apos;m a caption! | | md-fig')");
```

And with some extra CSS,
### ✨ This renders into: <br><br>
![example](https://github.com/maksiksq/markdown-it-image-caption/blob/master/assets/images/img.png)
I'm also a caption, hello how are you?
<br>

**Note:** if there is no caption provided e.g. a decorative image, it will be an `<img>` like usual. If you want to keep it a `<figure>` for semantic or other reasons, replace the caption with `:::nocaption` like this:<br>
```markdown
![alt-text](image-source ':::nocaption')
```
### 📜 Options
You can put the `<figcaption>` over or under the image by adding `| top`, otherwise or if unset it defaults to `bottom`:
```markdown
![alt-text](image-source 'Wow! A frog! | top')
```

To style the figures you can optionally assign a class to each, globally:
```ts
import mditimgcap from '@maksiksq/markdown-it-image-caption';

const md = markdownit()
        .use(mditimgcap, {
           figClasslist: 'neat-fig',
        });
```
or individually:
```markdown
![alt-text](image-source 'Wow! A frog! || my-class')
```
Use CSS selectors if you want to access the elements inside.<br>
All of these are fully optional, simplicity is key to achieving frogs.
```markdown
![alt-text](image-source 'Wow! A frog!')
```