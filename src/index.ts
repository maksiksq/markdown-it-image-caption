import markdownIt, {Options, Renderer, Token} from "markdown-it";

'use strict';

export default (md: markdownIt): void => {
    const old = md.renderer.rules.image;

    md.renderer.rules.image = (tokens: Token[], idx: number, options: Options, env: any, self: Renderer): string => {
        if (tokens[idx]?.attrs?.[2]) {
            let attrs = tokens[idx].attrs;
            let title = attrs[2][1];
            let src = attrs[0][1];
            let alt = tokens[idx].content;
            return `<figure><img src="${src}" alt="${alt}" title="${title}" /><figcaption>${title}</figcaption></figure>`
        }
        if (old) {
            return old(tokens, idx, options, env, self);
        } else {
            console.warn('@maksiks/markdown-it-image-caption: original rendered doesn\'t exist, something went horribly wrong.');
            return '';
        }
    }
};
