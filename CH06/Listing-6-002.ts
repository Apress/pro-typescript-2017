namespace Listing_6_002 {
    const image = document.getElementById('mainImage');
    const container = document.getElementById('content');

    function updateSizes() {
        // Operations that invalidate the layout
        image.style.width = '50%';
        container.classList.add('highlight');

        // Operations that require a reflow
        const imageHeight = image.offsetHeight;
        const containerHeight = container.offsetHeight;

        return {
            'imageHeight': imageHeight,
            'containerHeight': containerHeight
        };
    }

    const result = updateSizes();
}