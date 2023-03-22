<script>import "./modal.scss";
import { onMount, createEventDispatcher } from "svelte";
export let header = "";
export let onHideModal = () => {
};
let setHideCss = false;
let isModalVisible = false;
const dispatch = createEventDispatcher();
const showModal = () => {
  isModalVisible = true;
  document.body.style.overflow = "hidden";
  document.addEventListener("keyup", onKeyup);
};
const hideModal = () => {
  setHideCss = true;
  document.body.style.overflow = "auto";
  setTimeout(() => {
    setHideCss = false;
    isModalVisible = false;
    onHideModal();
  }, 900);
  document.removeEventListener("keyup", onKeyup);
};
onMount(() => {
  dispatch("functions", { showModal, hideModal });
  return () => {
    document.removeEventListener("keyup", onKeyup);
  };
});
function onKeyup(e) {
  if (e.key === "Escape")
    hideModal();
}
</script>


{ #if isModalVisible }
  <div on:click={ hideModal } on:keyup={ onKeyup } class="stl--modal--container{ setHideCss ? ' hide': '' }" aria-label="Click to hide modal">
    <div on:click|stopPropagation on:keyup={ onKeyup } class="stl--modal{ setHideCss ? ' hide': '' }">
      { #if header}
        <div class="stl--modal__header">
          <div class="stl--modal__header__text">{ header }</div>
          <button class="stl--modal__header__close" on:click={ hideModal } type="button">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><title>Close icon</title><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
          </button>
        </div>
      { /if }
      <div class="stl--modal__body">
        <slot />
      </div>
    </div>
  </div>
{ /if }

