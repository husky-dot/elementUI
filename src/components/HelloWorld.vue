<template>
  <div>
    <Vue2OrgTree :data='tree' collapsable horizontal
      @on-expand="onExpand"
      
    />
    <hr >
    <OkrTree />
    <hr>
    <OkrTree3/>
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
          tree: {
          label: 'Owner',
          children: [{
            label: 'Label 1',
            children: [{
              label: 'Label 1-1'
            }]
          },{
            label: 'Label 2'
          },{
            label: 'Label 3'
          }]
        }
    }
  },
  methods: {
    onExpand (e, data) {
      if ('expand' in data) {
        data.expand = !data.expand
        if (!data.expand && data.children) {
          this.collapse(data.children)
        }
      } else {
        this.$set(data, 'expand', true)
      }
    },
  }
}
</script>
<style>
</style>

