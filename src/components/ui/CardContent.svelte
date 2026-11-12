<script lang="ts">
  export let className: string = '';
  let klass = '';
  export { klass as class };

  $: classes = `p-6 ${className} ${klass}`;
</script>

<div class={classes}>
  <slot />
</div>
