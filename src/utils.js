export const getColor = ({ rgb }) => {
    if (rgb) {
        const { r, g, b, a } = rgb;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    return '';
};