<template>
    <footer>
        <div class="container h-100 d-flex flex-column justify-content-between align-items-center">
            <div class="nav-links d-flex justify-content-between align-items-center">
                <ul class="nav d-flex gap-4 list-unstyled mb-0">
                    <li><a href="#" class="nav-link p-0">開始探索</a></li>
                    <li><a href="#" class="nav-link p-0">角色樹洞</a></li>
                    <li><a href="#" class="nav-link p-0">樣板市集</a></li>
                    <li><a href="#" class="nav-link p-0">關於我們</a></li>
                </ul>
            </div>
            <div class="contact-info w-75 d-flex justify-content-between ">
                <div class="phone-info d-flex">
                    <i class="fa-solid fa-phone me-2"></i>
                    <span>0912-123-456</span>
                </div>
                <div class="addr-info d-flex">
                    <i class="fa-solid fa-location-dot me-2"></i>
                    <span>臺北市大安區復興南路一段390號2樓</span>
                </div>
                <div class="email-info d-flex">
                    <i class="fa-solid fa-envelope me-2"></i>
                    <span>service@mapflow.com</span>
                </div>
            </div>
            <div class="footer-logo">
                <img src="../assets/images/LogoIcon.png" alt="">
            </div>
            <div class="social-icon d-flex">
                <i class="fa-brands fa-facebook me-3"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
            <small>&copy;2026 MapFlow．版權所有</small>
        </div>
        
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer{
    height: 350px;
    background-color: var(--color-neutral-900);
    color: var(--color-neutral-50);
    padding: var(--spacing-8);
}
.nav-link{
    color: var(--color-neutral-50);
}
i{
    font-size: 25px;
}

</style>