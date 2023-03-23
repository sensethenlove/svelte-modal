# 🕉 @sensethenlove/svelte-modal


### 🙏 Description
Simple modal component for svelte(kit) applications that includes a showModal function, hideModal function & onHideModal callback

<table>
  <tr>
    <td><img src="https://imagedelivery.net/awgX85h4ifgiJaXRhZTMNw/aefe9d44-f6ea-4632-1f6f-0b6830d08900/public" /></td>
    <td><img src="https://imagedelivery.net/awgX85h4ifgiJaXRhZTMNw/ea0a7513-039c-42c8-e61a-739c525eab00/public" /></td>
  </tr>
</table>

### 💎 Prerequisites
Requires [@sensethenlove/global-style](https://github.com/sensethenlove/global-style) or add this css to your site
```css
@keyframes fade-in-from-above {
  0% {
    opacity: 0;
    transform: translateY(-9rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out-and-slide-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-9rem);
  }
}

html { /* Helps w/ rem, can still look good w/o just set rem/px as desired: https://stackoverflow.com/questions/59920538  */
  font-size: 62.5%;
}
```

### ☯️ Install
```bash
pnpm add @sensethenlove/svelte-modal
pnpm add @sensethenlove/global-style # Only necessary if prerequisite css above is not present
```


### 🧡 Add preferred styles
```scss
.stl--modal {
  z-index: 60;
  color: #273142;
  background-color: #fefefe;
  font-family: Inter, ui-sans-serif, system-ui;

  &--container {
    z-index: 30;
    background-color: rgba(black, 0.693);
  }

  &__header {

    &__text {
      color:#2196F3;
      font-family: papyrus;
      line-height: 1.8;
      font-weight: 600;
      font-size: 2.4rem;
    }

    &__close {

      svg {
        color: green;
        &:hover {
          color: #eac603;
        }
      }
    }
  }
}
```

### 💙 Example
```svelte
<script lang="ts">
  import './modal.scss' // preferred styling (above)
  import '@sensethenlove/global-style/lib/index.css' // only necessary if prerequisite css above is not present
  import { Modal, type ShowModal, type HideModal, type OnModalHide } from '@sensethenlove/svelte-modal'

  let showModal: ShowModal
  let hideModal: HideModal

  const onHideModal = (() => {
    console.log('bye modal')
  }) satisfies OnModalHide

  function bind (e: CustomEvent) {
    showModal = e.detail.showModal
    hideModal = e.detail.hideModal
  }
</script>


<button on:click={ showModal }>Show Modal</button>

<Modal header="Header" on:functions={ bind } { onHideModal }>
  <div>Lorem ipsum</div>
  <button on:click={ hideModal }>Hide Modal</button>
</Modal>
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/slug](https://www.npmjs.com/package/@sensethenlove/slug)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
