<!-- <svelte:options tag="svelte-counter" /> -->
<svelte:options tag={null} />

<script>
  export let count = 0;
</script>

<div class="counter">
  <button on:click={() => count--}>-</button>
  <span>{count}</span>
  <button on:click={() => count++}>+</button>
</div>

<style>
  button {
    border: solid lightgray 1px;
    border-radius: 4px;
    padding: 10px;
  }

  .counter {
    font-size: 24px;
  }
</style>
