<template>
    <div class="searchbar" :class="[`searchbar-${color}`]">
        <div class="input-group ps-1">
            <input type="text" class="form-control py-2" :placeholder="text" aria-label="Search" v-model="keyword">
            <button type="button" class="search-btn"><i class="fa-solid fa-magnifying-glass" @click="onSearchClick"></i></button>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  text: String,
  color: {
    type: String,
    default: 'dark' 
  }
});

const keyword = ref();
const emit = defineEmits(['search']);
const onSearchClick = ()=>{
    emit('search',keyword.value);
}

</script>

<style scoped>
.searchbar {
    border-radius: var(--radius-md);
    width: 100%;
    background: white;
    overflow: hidden;
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
    width: 50px;
    height: 50px;
    border: none;
}
i { color: var(--color-neutral-50); }
</style>