<template>
    <div>
        <button class="btn btn-primary w-100 py-2"  type="submit">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Button'
    }
</script>