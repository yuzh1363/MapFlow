<template>
  <div class="sample-card">
    <div class="card-img"></div>
    <div class="card-container">
      <div class="card-header">
          <div class="card-title">UIUX設計師</div>
          <p class="card-content">David</p>
      </div>
      <div class="tags d-flex justify-content-between">
            <div class="tag card-tag">
                <img src="../assets/images/node.svg" alt="node">
                    200+
            </div>
            <div class="tag card-tag">
                <img src="../assets/images/user.svg" alt="">
                    2
            </div>
            <div class="tag card-tag">
                <img src="../assets/images/star.svg" alt="">
                    5.0(16)
            </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .sample-card{
    width: 100%;
    max-width: 300px;
    border: 1px solid #757575;
    box-shadow: 1px 1px 12px #dfdfdf ;
    border-radius: 12px;
    background-color: var(--color-bg-primary);
    overflow: hidden;
    .card-img{
      height: 117px;
      background: var(--Color-Neutral-200, #686868);
    }
    .card-container{
      display: flex;
      padding: 16px 24px;
      flex-direction: column;
      .card-header{
        display: flex;
        flex-direction: column;
      }
    }
  }
.tag{
    display: flex;
    align-items: center;
    gap: 4px;
}
.tags>.tag:nth-child(2)>img{
    width: 25px;
}
.tags>.tag:nth-child(3)>img{
    width: 25px;
}
</style>