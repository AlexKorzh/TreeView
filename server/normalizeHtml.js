const jsdom = require('jsdom');

const ELEMENT_NODE = 1;

const normalizeHtml = async (html) => {
  const { JSDOM } = jsdom;
  const { document } = new JSDOM(html).window;

  const nodes = {};
  let id = 1;

  const createNode = (element, parentId) => {
    const node = {
      id: id.toString(),
      nodeName: element.nodeName.toLowerCase(),
      children: [],
      parentId: parentId ? parentId.toString() : null
    };
    nodes[node.id] = node;
    id++;

    const childNodes = element.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      const child = childNodes[i];
      if (child.nodeType === ELEMENT_NODE) {
        const childNode = createNode(child, node.id);
        node.children.push(childNode.id);
      }
    }

    return node;
  };

  createNode(document.documentElement);

  return nodes;
}

module.exports = { normalizeHtml };