import { highlight } from 'sugar-high';

export const highlighter = {
    code: (code: string, lang?: string) => {
        return highlight(code);
    }
};
