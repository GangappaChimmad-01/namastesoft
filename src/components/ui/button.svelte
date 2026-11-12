<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled = false;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let href: string | undefined = undefined;

  const dispatch = createEventDispatcher();

  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:-translate-y-0.5';
  
  const variants = {
    primary: 'bg-ink hover:bg-ink-3 text-white focus:ring-mari',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-accent',
    ghost: 'hover:bg-accent hover:text-accent-foreground focus:ring-accent',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive'
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-md',
    md: 'h-10 px-4 py-2 text-sm rounded-md',
    lg: 'h-11 px-8 text-base rounded-md'
  };

  function handleClick(event: MouseEvent) {
    if (!disabled) {
      dispatch('click', event);
    }
  }

  $: classes = `${baseClasses} ${variants[variant]} ${sizes[size]}`;
</script>

{#if href}
  <a {href} class={`${classes} ${$$props.class || ''}`} on:click={handleClick} {...$$restProps}>
    <slot />
  </a>
{:else}
  <button 
    {type} 
    {disabled} 
    class={`${classes} ${$$props.class || ''}`} 
    on:click={handleClick} 
    {...$$restProps}
  >
    <slot />
  </button>
{/if}
