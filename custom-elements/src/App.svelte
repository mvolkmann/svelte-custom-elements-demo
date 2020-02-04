<script>
  import Counter from './Counter.svelte';
  import Greet from './Greet.svelte';

  //customElements.define('rmv-counter', Counter);
  //customElements.define('rmv-greet', Greet);
  export {Counter, Greet};
</script>

<main>
  <Greet name="Mark" />
  <Counter />
</main>
