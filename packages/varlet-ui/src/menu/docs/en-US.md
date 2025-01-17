
# Menu

### Intro

Enable elements to display a menu when clicked, freely control the display position of the menu by controlling the alignment and offset of the menu.

### Attention

Menu is an `inline block` element. When you click through the default slot, the menu will be displayed.
If you want menu to monopolize a line, it is recommended to package a `block` element
Menu is automatically closed in the area beyond the scope of the component,
so you can't use the same state to bind `v-model:show`. Otherwise, when the display is triggered,
other menu pairs are also triggered Menu cannot be displayed due to the modification of `v-model:show`.

### 注册事件

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'
  
const show = ref(false)
</script>

<template>
  <var-menu
    v-model:show="show"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <var-button type="primary" @click="show = true">Events</var-button>

    <template #menu>
      <div class="menu-example-cell-list">
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
      </div>
    </template>
  </var-menu>
</template>

<style>
.menu-example-cell-list {
  background: #fff;
}
</style>
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `v-model:show` | Whether to display the menu | _string_ | `default` |
| `alignment` | The alignment of the menu, The optional value is' `top` `bottom`, the origin is the top left corner of the default slot,top is the top of the menu to align the origin,bottom is the bottom of the menu to align the origin | _string_ | `top` |
| `offset-x` | offset x, Relative to the aligned position of the menu | _number \| string_ | `0` |  
| `offset-y` | offset y, Relative to the aligned position of the menu | _number \| string_ | `0` |
| `teleport` | The location of the Menu to mount | _TeleportProps['to']_ | `body` |
| `disabled` | whether to disable the menu | _boolean_ | `false` |
| `trigger` | menu trigger method, optional value is `click` `hover`, `click` is triggered when clicked, `hover` is triggered when hovered | _string_ | `click` |
| `placement` | menu display position, please refer to [popper documentation](https://popper.js.org/docs/v2/) | _string: cover-top \| cover-top-start \| cover-top-end \| cover-bottom \| cover-bottom-start \| cover-bottom-end \| cover-left \| cover-right_ | `cover-top-start` |
| `defaultStyle` | whether to enable default styles | _boolean_ | `true` |

### Methods
| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `resize` | You can call this method to redraw when a default slot element changes position size | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `open` | Triggered when the menu is open | `-` |
| `opened` | Triggered when open-animation ends | `-` |
| `close` | Triggered when the menu is close | `-` |
| `closed` | Triggered when close-animation ends | `-` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | The trigger element associated with the menu | `-` |
| `menu` | Menu content | `-` |