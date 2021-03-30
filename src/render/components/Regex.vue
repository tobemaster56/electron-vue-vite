<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="正则可视化" name="first">
      <iframe frameborder="0" width="100%" height="700" src="https://jex.im/regulex/"></iframe>
    </el-tab-pane>
    <el-tab-pane label="速记表" name="second">
      <el-collapse style="text-align: left" v-model="activeCollapse">
        <el-collapse-item title="Character classes" name="1" >
          <div><span class="left">.</span> any character except newline</div>
          <div><span class="left">\w</span> word</div>
          <div><span class="left">\d</span> digit</div>
          <div><span class="left">\s</span> whitespace</div>
          <div><span class="left">\W</span> not word</div>
          <div><span class="left">\D</span> not digit</div>
          <div><span class="left">\S</span> not whitespace</div>
          <div><span class="left">[abc]</span> any of a, b, or c</div>
          <div><span class="left">[^abc]</span> not a, b, or c</div>
          <div><span class="left">[a-g]</span> character between a & g</div>
        </el-collapse-item>
        <el-collapse-item title="anchors" name="2">
          <div><span class="left">^abc</span> start of the string</div>
          <div><span class="left">abc$</span> end of the string</div>
          <div><span class="left">\b </span>word boundary</div>
          <div><span class="left">\B </span>not-word boundary</div>
        </el-collapse-item>
        <el-collapse-item title="Groups & Lookaround" name="4">
          <div><span class="left">(abc)	</span>capture group</div>
          <div><span class="left">\1	</span>backreference to group #1</div>
          <div><span class="left">(?:abc)</span>non-capturing group</div>
          <div><span class="left">(?=abc)</span>positive lookahead</div>
          <div><span class="left">(?!abc)	</span>negative lookahead</div>
        </el-collapse-item>
        <el-collapse-item title="Quantifiers | 数量" name="3">
          <div><span class="left">a?</span> 0 or 1 (可有可无)</div>
          <div><span class="left">a+</span> 1 or more （大于等于 1）</div>
          <div><span class="left">a*</span> 0 or more （大于等于 0）</div>
          <div><span class="left">a{5}</span> exactly five</div>
          <div><span class="left">a{2,}	</span> two or more</div>
          <div><span class="left">a{1,3}</span> between one & three</div>
          <div><span class="left">a+?a{2,}?	</span> match as few as possible</div>
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "RegexPanel",
  data() {
    return {
      activeName: 'second',
      activeCollapse: ['1', '2','3', '4']
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.left {
  display: inline-block;
  width: 80px;
  font-weight: bold;
}
</style>
