<script lang="ts">
  export let className: string = '';
  let klass = '';
  export { klass as class };
  export let variant: 'default' | 'outlined' | 'elevated' = 'default';

  const variants = {
    default: 'bg-white text-ink rounded-3xl border border-line',
    outlined: 'bg-white text-ink rounded-3xl border-2 border-line',
    elevated: 'bg-white text-ink rounded-3xl border border-line shadow-lg'
  };

  $: classes = `${variants[variant]} ${className} ${klass}`;
</script>

<div class={classes} {...$$restProps}>
  <slot />
</div>
