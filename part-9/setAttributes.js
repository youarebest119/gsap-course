
function setAttributesInBox(element) {

    let content = [];
    for (let i in element.attributes) {
        let attribute = element.attributes[i];
        if (attribute.nodeName && attribute.nodeName.startsWith("data")) {
            if (attribute.nodeValue) {
                content.push(`${attribute.nodeName}=${attribute.nodeValue}`);
            }
            else {
                content.push(`${attribute.nodeName}`);
            }
        }
    }

    // Create a <br> and <ul>
    const br = document.createElement('br');
    const ul = document.createElement('ul');

    // Create <li> elements for each item
    content.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    // Append to the element
    element.appendChild(br);
    element.appendChild(ul);

}
export default setAttributesInBox;