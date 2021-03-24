# 轮播

### 引入

```js
import { createApp } from 'vue';
import { Swipe, SwipeItem } from '@varlet/ui';

createApp().use(Swipe).use(SwipeItem)
```

### 基本使用

```html
<var-swipe class="swipe">
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

```css
.swipe {
  height: 160px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 禁止循环轮播

```html
 <var-swipe class="swipe" :loop="false">
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

### 开启自动播放

```html
<var-swipe class="swipe" :autoplay="2000">
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

### 垂直轮播

```html
<var-swipe class="swipe" vertical>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

### 监听切换

```html
<var-swipe class="swipe" @change="Snackbar">
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet-ui.github.io/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    return { Snackbar }
  },
}
```

### 自定义指示器

```html
<var-swipe class="swipe">
  <template #default>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet-ui.github.io/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet-ui.github.io/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet-ui.github.io/cat3.jpg">
    </var-swipe-item>
  </template>

  <template #indicator="{ index, length }">
    <div class="indicators">
      {{ index + 1 }} / {{ length }}
    </div>
  </template>
</var-swipe>
```

```css
.swipe {
  height: 160px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.indicators {
  color: #fff;
  padding: 2px 8px;
  background: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `loop` | 是否开启循环轮播 | _boolean_ | `true` |
| `autoplay` | 自动播放间隔时间(ms) | _string \| number_ | `-` |
| `duration` | 切换过度时间 | _string \| number_ | `300` |
| `initial-index` | 初始化显示的索引 | _string \| number_ | `0` |
| `indicator` | 是否显示指示器 | _boolean_ | `true` |
| `indicator-color` | 指示器颜色 | _string_ | `-` |
| `vertical` | 是否开启垂直轮播 | _boolean_ | `false` |
| `touchable` | 是否可以拖动 | _boolean_ | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 切换轮播时触发 | `index: number(轮播索引)` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 轮播内容 | `-` |
| `indicators` | 指示器内容 | `-` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@swipe-indicator-color` | `#fff` |
| `@swipe-indicators-offset` | `10px` |
| `@swipe-indicator-offset` | `4px` |