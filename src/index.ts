import markdownIt, {Options, Renderer, Token} from "markdown-it";

export interface args {
    globalImgClasses?: string;
    globalFigureClasses?: string;
    globalFigcaptionClasses?: string;
}

const markdownItImageCaption = (md: markdownIt, {
                                    globalImgClasses,
                                    globalFigureClasses,
                                    globalFigcaptionClasses
                                }: args = {}
                                ): void => {
    const old = md.renderer.rules.image;

    md.renderer.rules.image = (tokens: Token[], idx: number, options: Options, env: any, self: Renderer): string => {
        if (tokens[idx]?.attrs?.[2]) {
            // whole values
            let attrs = tokens[idx].attrs;
            let settings = attrs[2][1].split('|');
            let src = attrs[0][1];
            let alt = tokens[idx].content;

            // inner bits
            let title = settings[0];
            let pos = settings[1]?.trim();
            let classname = settings[2]?.trim();


            console.log("settings:")
            console.log(settings);
            console.log(title)
            console.log(pos)
            console.log(classname)

            const imgTag = `<img src="${src}" ${globalImgClasses ? ` class="${globalImgClasses}"` : ''} alt="${alt}" ${title !== ':::nocaption' ? ` title="${title}"` : ''} />`;

            // :::nocaption = no caption
            // if not top it defaults to bottom
            return title !== ':::nocaption'
                ? `<figure ${globalFigureClasses ? ` class="${globalFigureClasses}"` : ''}>${pos !== 'top' 
                    ? `${imgTag}<figcaption ${globalFigcaptionClasses ? ` class="${globalFigcaptionClasses}"` : ''}>${title}</figcaption>` 
                    : `<figcaption ${globalFigcaptionClasses ? ` class="${globalFigcaptionClasses}"` : ''}>${title}</figcaption>${imgTag}`
            } </figure>`
                : `<figure ${globalFigureClasses ? ` class="${globalFigureClasses}"` : ''}>${imgTag}</figure>`;
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
