import markdownIt, {Options, Renderer, Token} from "markdown-it";

export interface args {
    allFigClasslist?: string;
}

const markdownItImageCaption = (md: markdownIt, {allFigClasslist}: args = {}): void => {
    const old = md.renderer.rules.image;

    md.renderer.rules.image = (tokens: Token[], idx: number, options: Options, env: any, self: Renderer): string => {
        if (tokens[idx]?.attrs?.[2]) {
            // whole values
            const attrs = tokens[idx].attrs;
            const settings = attrs[2][1].split('|');
            const src = attrs[0][1];
            const alt = tokens[idx].content;

            // inner bits
            const title = settings[0].trim();
            const pos = settings[1]?.trim();
            const inclasses = settings[2]?.trim();

            const imgTag = `<img src="${src}" alt="${alt}" ${title !== ':::nocaption' ? ` title="${title}"` : ''} />`;
            const figClasses = `${allFigClasslist ? ` class="${allFigClasslist} ${inclasses}"` : `${inclasses}`}`

            // :::nocaption = no caption
            // if not top it defaults to bottom
            return title !== ':::nocaption'
                ? `<figure ${figClasses}>${pos !== 'top'
                    ? `${imgTag}<figcaption>${title}</figcaption>`
                    : `<figcaption>${title}</figcaption>${imgTag}`
                } </figure>`
                : `<figure ${figClasses}>${imgTag}</figure>`;
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
