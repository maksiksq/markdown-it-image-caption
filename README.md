# markdown-it-image-caption
*(wizardified)*

Note: a quick fork of [@andatoshiki/markdown-it-image-caption](https://www.npmjs.com/package/@andatoshiki/markdown-it-image-caption) but with full Typescript support and no unnecessary \<strong> tags.

This [markdown-it](https://github.com/markdown-it/markdown-it) plugin allows you to easily wrap your markdown images in \<figure> and add a \<figcaption> to them.

The syntax:<br>
``![alt-text](image-source 'caption')``<br>
Note: if there is no caption provided e.g. a decorative image, it will be an \<img> like usual. If you want to keep it a \<figure> for semantic reasons just replace the caption with ':::nocaption' like this:<br>
``![alt-text](image-source ':::nocaption')``<br>