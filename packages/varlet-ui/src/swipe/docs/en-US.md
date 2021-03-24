# Swipe

### Install

```js
import { createApp } from 'vue';
import { Swipe, SwipeItem } from '@varlet/ui';

createApp().use(Swipe).use(SwipeItem)
```

### Basic Usage

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

### Forbid Loop

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

### Autoplay

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

### Vertical Swipe

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

### Handle Change

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

### Custom Indicator

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

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `loop` | Whether to swipe the loop | _boolean_ | `true` |
| `autoplay` | Auto play interval time(ms) | _string \| number_ | `-` |
| `duration` | Transition time | _string \| number_ | `300` |
| `initial-index` | Initializes the index displayed | _string \| number_ | `0` |
| `indicator` | Whether to display the indicator | _boolean_ | `true` |
| `indicator-color` | Indicator color | _string_ | `-` |
| `vertical` | Whether to enable vertical swipe | _boolean_ | `false` |
| `touchable` |  Whether to enable touch | _boolean_ | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when change swipe | `index: number(swipe index)` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Swipe content | `-` |
| `indicators` | Swipe indicator content | `-` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@swipe-indicator-color` | `#fff` |
| `@swipe-indicators-offset` | `10px` |
| `@swipe-indicator-offset` | `4px` |