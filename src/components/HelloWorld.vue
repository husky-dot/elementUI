<template>
  <div>
    <Vue2OrgTree :data='treeData' collapsable horizontal
      @on-expand="onExpand"
      selectedKey="222"
    />
    <hr >
    <OkrTree :data="testData"
      direction='horizontal'
      showCollapsable
      @node-click='nodeClick'
      @node-btn-click='nodeBtnClick'
      label-width="100px"
      labelClassName='styleee'
    ></OkrTree>
    <hr>
    <OkrTree :data="testData"
      showCollapsable
      @node-click='nodeClick'
      @node-btn-click='nodeBtnClick'
    ></OkrTree>
  </div>
</template>
<script>
import OkrTree from './okr-tree/OkrTree.vue'
import OkrTree3 from './okr-tree/OkrTree3.vue'
export default {
  components: {
    OkrTree,
    OkrTree3
  },
  data () {
    return {
      treeData: {
        id: 1,
        label: "前端小智",
        children: [
          {
            id: 2,
            label: "Bob Esponja",
            children: [
              {
                id: 4,
                label: "Patrick Estrela",
                children: [
                    {
                      id: 222,
                      label: '小44',
                    }
                  ]
              }
            ]
          },
          {
            id: 3,
            label: "Lula Molusco",
            children: []
          }
        ]
      },
      testData: [
          {
            id: 21,
            label: '小三',
            children: [
              {
                id: 22,
                label: '小4',
                children: [
                  {
                    id: 222,
                    label: '小44',
                  }
                ]
              }
            ]
          },
          {
            id: 21,
            label: '小三',
            children: [
              {
                id: 22,
                label: '小4',
                children: [
                  {
                    id: 222,
                    label: '小44',
                  },
                  {
                    id: 223,
                    label: '小4466',
                  }
                ]
              }
            ]
          }
        ]
    }
  },
  methods: {
    labelClassName (data) {
      console.log(data.label)
      return 'hhhhhhhh'
    },
    onExpand (e, data) {
      if ('expand' in data) {
        data.expand = !data.expand
        if (!data.expand && data.children) {
          // this.collapse(data.children)
        }
      } else {
        this.$set(data, 'expand', true)
      }
    },
    renderContent (h, data) {
      return (
        <div class="render-wrapper">
          <h1>{data.label}</h1>
        </div>
      )
    },
    nodeClick (data, e) {
      console.log(data)
      console.log(e)
    },
    nodeBtnClick (data, e) {
      console.log(data)
      console.log(e)
    },
  }
}
</script>
<style>
</style>

