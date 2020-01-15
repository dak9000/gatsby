export const getColor = ({ rgb }) => {
    if (rgb) {
        const { r, g, b, a } = rgb;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    return '';
};

export const getHoverColor = ({ hsl }) => {
    if (hsl) {
        const { h, s, l } = hsl;
        const lighten = l >= 0.45;
        const lightnes = lighten ? l - 0.1 : l + 0.1;

        return `hsl(${h}, ${s * 100}%, ${lightnes * 100}%)`;
    }
};
