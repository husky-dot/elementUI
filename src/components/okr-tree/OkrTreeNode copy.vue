<template>
  <div class="org-chart-node"
    @contextmenu="($event) => this.handleContextMenu($event)"
    :class="{
        'collapsed': !node.expanded,
        'is-leaf': node.isLeaf,
        'is-current': node.isCurrent,
      }"
    >
    <div class="org-chart-node-label">
      <div class="org-chart-node-label-inner"
        @click="handleNodeClick"
        :class="computeLabelClass"
        :style="computeLabelStyle"
      >
        <node-content :node="node" >
          <slot>
            {{node.data.label}}
          </slot>
        </node-content>
      </div>
      <div v-if="showNodeBtn"
        class="org-chart-node-btn"
        :class="{'expanded': node.expanded}"
        @click="handleBtnClick"
      ></div>
    </div>
    <div class="org-chart-node-children"
      v-if="node.childNodes && node.childNodes.length > 0"
      :style="computNodeStyle"
      >
      <OkrTreeNode
        v-for="child in node.childNodes"
        :show-collapsable="showCollapsable"
        :node="child"
        :label-width="labelWidth"
        :label-height="labelHeight"
        :renderContent="renderContent"
        :selected-key="selectedKey"
        :node-key="nodeKey"
        :key="getNodeKey(child)"
        :props="props"
      ></OkrTreeNode>
    </div>
    <div class="org-chart-node-children"
      v-if="node.childNodes && node.childNodes.length > 0"
      :style="computNodeStyle"
      >
      <OkrTreeNode
        v-for="child in node.childNodes"
        :show-collapsable="showCollapsable"
        :node="child"
        :label-width="labelWidth"
        :label-height="labelHeight"
        :renderContent="renderContent"
        :selected-key="selectedKey"
        :node-key="nodeKey"
        :key="getNodeKey(child)"
        :props="props"
      ></OkrTreeNode>
    </div>
  </div>
</template>
<script>
import { getNodeKey } from './model/util';
export default {
  name: 'OkrTreeNode',
  inject: ['okrEventBus'],
  props: {
    props: {},
    node: {
      default() {
        return {};
      }
    },
    // 子节点是否可折叠
    showCollapsable: {
      type: Boolean,
      default: false
    },
    orkstyle: {
      type: Boolean,
      default: false
    },
    // 树节点的内容区的渲染 Function
    renderContent: Function,
    // 树节点区域的宽度
    labelWidth: [String, Number],
    // 树节点区域的高度
    labelHeight: [String, Number],
    // 用来控制选择节点的字段名
    selectedKey: String,
    // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
    nodeKey: String
  },
  components: {
    NodeContent: {
      props: {
        node: {
          required: true,
        }
      },
      render(h) {
        const parent = this.$parent
        if (parent._props.renderContent) {
          return parent._props.renderContent(h, this.node)
        } else {
          return this.$scopedSlots.default(this.node)
        }
      }
    }
  },
  computed: {
    // 是否显示展开按钮
    showNodeBtn () {
      return this.showCollapsable && this.node.childNodes && this.node.childNodes.length > 0
    },
    // 节点的宽度
    computeLabelStyle () {
      let { labelWidth = 'auto', labelHeight = 'auto' } = this
      if (typeof labelWidth === 'number') {
        labelWidth = `${labelWidth}px`
      }
      if (typeof labelHeight === 'number') {
        labelHeight = `${labelHeight}px`
      }
      return {
        width: labelWidth,
        height: labelHeight
      }
    },
    computeLabelClass () {
      let clsArr = []
      const store = this.tree.store;
      if (typeof store.labelClassName === 'function'){
        clsArr.push(store.labelClassName(this.node))
      } else {
        clsArr.push(store.labelClassName)
      }
      if (typeof store.currentLableClassName === 'function'){
        clsArr.push(store.currentLableClassName(this.node))
      } else {
        clsArr.push(store.currentLableClassName)
      }
      if (this.isCurrent) {
        clsArr.push('is-current')
      }
      return clsArr
    },
    computNodeStyle () {
      return {
        display: this.node.expanded ? '' : 'none'
      }
    }
  },
  watch: {
    'node.expanded'(val) {
      // this.$nextTick(() => this.expanded = val);
    }
  },
  data () {
    return {
      // node 的展开状态
      expanded: false,
      // node 的选中状态
      isCurrent: false,
      tree: null
    }
  },
  created () {
    const parent = this.$parent;
    if (parent.isTree) {
      this.tree = parent;
    } else {
      this.tree = parent.tree;
    }

    const tree = this.tree;
    if (!tree) {
      console.warn('Can not find node\'s tree.');
    }
  },
  methods: {
    getNodeKey(node) {
      return getNodeKey(this.nodeKey, node.data);
    },
    handleNodeClick (e) {
      const store = this.tree.store;
      store.setCurrentNode(this.node);
      this.tree.$emit('node-click', this.node.data, this.node, this);
    },
    handleBtnClick (e) {
      if (this.node.expanded) {
        this.node.collapse()
        this.tree.$emit('node-collapse', this.node.data, this.node, this)
      } else {
        this.node.expand()
        this.tree.$emit('node-expand', this.node.data, this.node, this)
      }
    },
    handleContextMenu(event) {
      if (this.tree._events['node-contextmenu'] && this.tree._events['node-contextmenu'].length > 0) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.tree.$emit('node-contextmenu', event, this.node.data, this.node, this);
    },
    
  }
}
</script>
