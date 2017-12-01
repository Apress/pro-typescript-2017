interface NodeList {
    onclick: (event: MouseEvent) => any;
}

const nodeList = document.getElementsByTagName('div');

nodeList.onclick = function (event: MouseEvent) {
    alert('Clicked');
};
