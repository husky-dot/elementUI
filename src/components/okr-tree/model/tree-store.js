import Node from './node';
import { getNodeKey } from './util';
export default class TreeStore {
  constructor(options) {
    this.currentNode = null;
    this.currentNodeKey = null;
    console.log('第0次第0次第0次第0次第0次第0次第0次第0次v')
    console.log(options)
    for (let option in options) { 
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }
    this.nodesMap = {};
    this.root = new Node({
      data: this.data,
      store: this
    });
  }

  registerNode(node) {
    const key = this.key;
    if (!key || !node || !node.data) return;

    const nodeKey = node.key;
    if (nodeKey !== undefined) this.nodesMap[node.key] = node;
  }
  getNode(data) {
    if (data instanceof Node) return data;
    const key = typeof data !== 'object' ? data : getNodeKey(this.key, data);
    return this.nodesMap[key] || null;
  }
  setDefaultExpandedKeys(keys) {
    keys = keys || [];
    this.defaultExpandedKeys = keys;
    keys.forEach((key) => {
      const node = this.getNode(key);
      let isLeftChild = node.isLeftChild
      if (node && !isLeftChild) node.expand('', null, true);
      if (node && isLeftChild) node.expand('left', null, true);  
    });
  }
    // 是否是 OKR 飞书模式
  hasLeftChild () {
    const store = this.store
    return store.onlyBothTree && store.direction === 'horizontal'
  }
  setCurrentNode(currentNode) {
    const prevCurrentNode = this.currentNode;
    if (prevCurrentNode) {
      prevCurrentNode.isCurrent = false;
    }
    this.currentNode = currentNode;
    this.currentNode.isCurrent = true;
  }
  setUserCurrentNode(node) {
    const key = node.key
    const currNode = this.nodesMap[key];
    this.setCurrentNode(currNode);
  }
  setCurrentNodeKey(key) {
    if (key === null || key === undefined) {
      this.currentNode && (this.currentNode.isCurrent = false);
      this.currentNode = null;
      return;
    }
    const node = this.getNode(key);
    if (node) {
      this.setCurrentNode(node);
    }
  }
  getCurrentNode() {
    return this.currentNode;
  }
}