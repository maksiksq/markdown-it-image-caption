import markdownIt, {Options, Renderer, Token} from "markdown-it";

const markdownItImageCaption = (md: markdownIt): void => {
    const old = md.renderer.rules.image;

    md.renderer.rules.image = (tokens: Token[], idx: number, options: Options, env: any, self: Renderer): string => {
        if (tokens[idx]?.attrs?.[2]) {
            let attrs = tokens[idx].attrs;
            let title = attrs[2][1];
            let src = attrs[0][1];
            let alt = tokens[idx].content;

            const imgTag = `<img src="${src}" alt="${alt}" ${title !== ':::nocaption' ? ` title="${title}"` : ''} />`;

            return title !== ':::nocaption'
                ? `<figure>${imgTag}<figcaption>${title}</figcaption></figure>`
                : `<figure>${imgTag}</figure>`;
        }
        if (old) {
            return old(tokens, idx, options, env, self);
        } else {
            console.warn('@maksiks/markdown-it-image-caption: original renderer doesn\'t exist, something went horribly wrong.');
            return '';
        }
    }
};

export default markdownItImageCaption;
