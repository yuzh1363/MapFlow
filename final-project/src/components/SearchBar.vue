<template>
    <div class="searchbar px-1 py-2" :class="[`searchbar-${color}`]">
        <div class="input-group">
            <input type="text" class="form-control py-2" :placeholder="text" aria-label="Search">
            <button type="button" class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
    
</template>

<script setup>
const props = defineProps({
  text: String,
  color: {
    type: String,
    default: 'dark' 
  }
});
</script>

<style scoped>
.searchbar {
    border-radius: var(--radius-md);
    width: 100%;
    background: white;
    transition: all 0.3s ease;
}

.searchbar-dark {
    border: 3px solid var(--color-neutral-900);
}
.searchbar-dark .search-btn {
    background-color: var(--color-neutral-900);
}

.searchbar-blue {
    border: 3px solid var(--color-primary);
}
.searchbar-blue .search-btn {
    background-color: var(--color-primary);
}

input { 
    border: none; 
}
input:focus { 
    border: none; 
    box-shadow: none; 
}

.search-btn {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
    border: none;
}
i { color: var(--color-neutral-50); }
</style>