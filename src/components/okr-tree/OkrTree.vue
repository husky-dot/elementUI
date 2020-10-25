<template>
  <div class="org-chart-container">
    <div class="org-chart-node-children">
      <div class="org-chart-node">
        <div class="org-chart-node-label">快乐学习有限公司</div>
        <div class="org-chart-node-children">
          <div class="org-chart-node">
            <div class="org-chart-node-label">职能部</div>
          </div>
          <div class="org-chart-node">
            <div class="org-chart-node-label">品牌部</div>
            <div class="org-chart-node-children">
              <div class="org-chart-node">
                <div class="org-chart-node-label">UI设计</div>
              </div>
              <div class="org-chart-node">
                <div class="org-chart-node-label">活动策划</div>
              </div>
            </div>
          </div>
          <div class="org-chart-node">
            <div class="org-chart-node-label">事业部</div>
            <div class="org-chart-node-children">
              <div class="org-chart-node">
                <div class="org-chart-node-label">行政</div>
              </div>
            </div>
          </div>
          <div class="org-chart-node">
            <div class="org-chart-node-label">信息技术部</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang='less'>
.org-chart-container{
  background: red;
}
</style>