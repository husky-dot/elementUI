import { markNodeData, NODE_KEY } from './util';
import objectAssign from './merge';

const getPropertyFromData = function(node, prop) {
  const props = node.store.props;
  const data = node.data || {};
  const config = props[prop];

  if (typeof config === 'function') {
    return config(data, node);
  } else if (typeof config === 'string') {
    return data[config];
  } else if (typeof config === 'undefined') {
    const dataProp = data[prop];
    return dataProp === undefined ? '' : dataProp;
  }
};


let nodeIdSeed = 0;

export default class Node {
  constructor(options) {
    this.id = nodeIdSeed++;
    this.data = null;
    this.expanded = false;
    this.isCurrent = false;
    this.parent = null;

    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }
    this.level = 0;
    this.childNodes = [];

    if (this.parent) {
      this.level = this.parent.level + 1;
    }

    const store = this.store;
    if (!store) {
      throw new Error('[Node]store is required!');
    }
    store.registerNode(this);

    this.setData(this.data);
    const props = store.props;
    if (!this.data) return;

    if (store.defaultExpandAll) {
      this.expanded = true;
    }

    if (!Array.isArray(this.data)) {
      markNodeData(this, this.data);
    }
  }

  setData(data) {
    if (!Array.isArray(data)) {
      console.log('555555555555')
      console.log(data)
      markNodeData(this, data);
    }
    console.log('666666666666')
    console.log(data)
    this.data = data;
    this.childNodes = [];

    let children;
    if (this.level === 0 && this.data instanceof Array) {
      children = this.data;
    } else {
      children = getPropertyFromData(this, 'children') || [];
      console.log('1111111111111111111111')
      console.log(data)
      console.log(children)
    }
    console.log(children.length)
    for (let i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] });
    }
  }

  insertChild(child, index, batch) {
    if (!child) throw new Error('insertChild error: child is required.');
    console.log(child instanceof Node)
    if (!(child instanceof Node)) {
      if (!batch) {
        const children = this.getChildren(true);
        if (children.indexOf(child.data) === -1) {
          if (typeof index === 'undefined' || index < 0) {
            children.push(child.data);
          } else {
            children.splice(index, 0, child.data);
          }
        }
      }
      objectAssign(child, {
        parent: this,
        store: this.store
      });
      child = new Node(child);
    }

    child.level = this.level + 1;

    if (typeof index === 'undefined' || index < 0) {
      this.childNodes.push(child);
    } else {
      this.childNodes.splice(index, 0, child);
    }

    this.updateLeafState();
  }

  getChildren(forceInit = false) { // this is data
    if (this.level === 0) return this.data;
    const data = this.data;
    if (!data) return null;

    const props = this.store.props;
    let children = 'children';
    if (props) {
      children = props.children || 'children';
    }

    if (data[children] === undefined) {
      data[children] = null;
    }

    if (forceInit && !data[children]) {
      data[children] = [];
    }

    return data[children];
  }
  updateLeafState() {
    if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const childNodes = this.childNodes;
    console.log('9999999999999999999999999')
    console.log(!this.store.lazy)
    if (!this.store.lazy || (this.store.lazy === true && this.loaded === true)) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      console.log(childNodes)
      this.isLeaf = !childNodes || childNodes.length === 0;
      return;
    }
    this.isLeaf = false;
  }
}