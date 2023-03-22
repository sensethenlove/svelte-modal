<script lang="ts">
  import './modal.scss'
  import '@sensethenlove/global-style/lib/index.css'
  import { Modal, type HideModal, type OnModalHide, type ShowModal } from '$lib'

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


<button on:click={ showModal } class="brand launch">Show Modal</button>

<Modal header="Header" on:functions={ bind } { onHideModal }>
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  <button on:click={ hideModal } class="brand">Hide Modal</button>
</Modal>
