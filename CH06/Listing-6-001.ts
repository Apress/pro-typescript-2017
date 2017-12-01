const image = document.getElementById('mainImage');
const container = document.getElementById('content');

function updateSizes() {
    // Flags the layout as invalid
    image.style.width = '50%';

    // Causes a reflow to get the value
    const imageHeight = image.offsetHeight;

    // Flags the layout as invalid
    container.classList.add('highlight');

    // Causes a reflow to get the value
    const containerHeight = container.offsetHeight;

    return {
        'imageHeight': imageHeight,
        'containerHeight': containerHeight
    };
}

const result = updateSizes();