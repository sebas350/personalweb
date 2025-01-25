export function styleSvgs(container, fillColor = 'white', size = '30px') {
    const svgs = container.querySelectorAll('.svg');
    svgs.forEach(svg => {
        svg.style.fill = fillColor;
        svg.style.width = size;
        svg.style.height = size;
    });
};