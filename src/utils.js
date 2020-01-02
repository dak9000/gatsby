export const getColor = ({ rgb }) => {
    const { r, g, b, a } = rgb;
    return rgb ? `rgba(${r}, ${g}, ${b}, ${a})` : '';
};