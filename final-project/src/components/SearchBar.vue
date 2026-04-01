<template>
    <div class="searchbar px-1 py-2">
        <div class="input-group">
            <input type="text" class="form-control py-2" placeholder="請輸入" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <button type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
    
</template>

<script setup>

</script>

<style scoped>
.searchbar{
    border: 3px solid var(--color-neutral-900);
    border-radius: var(--radius-md);
    width: 370px;
}
input{
    border: none;
}
input:focus{
    border: none;
    box-shadow: none;
}
button{
    width: 40px;
    height: 40px;
    background-color: var(--color-neutral-900);
    border-radius: var(--radius-sm);
}
i{
    color: var(--color-neutral-50);
}
</style>