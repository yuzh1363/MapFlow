<template>
  <div class="sample-card">
    <div class="card-img"></div>
    <div class="card-container">
      <div class="card-content">
        <div class="card-title">
          <div class="title">UIUX設計師</div>
          <div class="user">David</div>
        </div>
        <div class="tag">
          <div class="dot-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
              <path d="M16.6621 19.1271V6.08594L14.4403 6.08594V11.0417L3.3313 11.0417V19.1271L5.5531 19.1271V13.3022L14.4403 13.3022V19.1271L16.6621 19.1271Z" fill="#424242"/>
              <ellipse cx="15.6491" cy="4.34707" rx="4.34707" ry="4.347" transform="rotate(90 15.6491 4.34707)" fill="#424242"/>
              <ellipse cx="15.3464" cy="20.3471" rx="4.34707" ry="4.347" transform="rotate(90 15.3464 20.3471)" fill="#424242"/>
              <ellipse cx="4.34636" cy="19.9965" rx="4.34707" ry="4.347" transform="rotate(90 4.34636 19.9965)" fill="#424242"/>
            </svg>
            200+</div>
          <div class="user-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M12.4993 4.16699C13.6044 4.16699 14.6642 4.60598 15.4456 5.38738C16.227 6.16878 16.666 7.22859 16.666 8.33366C16.666 9.43873 16.227 10.4985 15.4456 11.2799C14.6642 12.0613 13.6044 12.5003 12.4993 12.5003C11.3943 12.5003 10.3345 12.0613 9.55307 11.2799C8.77167 10.4985 8.33268 9.43873 8.33268 8.33366C8.33268 7.22859 8.77167 6.16878 9.55307 5.38738C10.3345 4.60598 11.3943 4.16699 12.4993 4.16699ZM12.4993 14.5837C17.1035 14.5837 20.8327 16.4482 20.8327 18.7503V20.8337H4.16602V18.7503C4.16602 16.4482 7.89518 14.5837 12.4993 14.5837Z" fill="#333333"/>
            </svg>
            2</div>
          <div class="star-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M14.6093 3.61523L16.3647 6.98242C16.4953 7.23029 16.6827 7.4437 16.9117 7.60516C17.1406 7.76662 17.4046 7.87154 17.6819 7.91133L21.3897 8.41914C23.3725 8.69258 24.1413 11.1371 22.6749 12.4965L20.1358 14.8395C19.9197 15.0385 19.7574 15.2891 19.6641 15.5677C19.5708 15.8464 19.5495 16.1441 19.6022 16.4332L20.2218 19.8691C20.5663 21.7832 18.5749 23.2754 16.8272 22.4004L13.2835 20.6426C13.0395 20.5231 12.7715 20.461 12.4999 20.461C12.2282 20.461 11.9602 20.5231 11.7163 20.6426L8.17253 22.4004C6.42409 23.2676 4.43347 21.7832 4.778 19.8691L5.39753 16.4324C5.50691 15.8465 5.30378 15.2449 4.86472 14.8387L2.32488 12.4965C0.858469 11.1449 1.62722 8.6918 3.61003 8.41836L7.31784 7.91055C7.59598 7.87324 7.86099 7.76931 8.09032 7.60758C8.31965 7.44585 8.50652 7.23111 8.63503 6.98164L10.3913 3.61523C11.285 1.91992 13.7225 1.91992 14.6085 3.61523" fill="#FCD53F"/>
            </svg>
            5.0(16)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .sample-card{
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12.882px;
    border: 1.29px solid var(--Color-Neutral-600, #757575);
    background: #FFF;
    box-shadow: 3.221px 4.294px 4.294px 0 rgba(0, 0, 0, 0.25);
    .card-img{
      border-top-left-radius: 12.882px;
      border-top-right-radius: 12.882px;
      height: 117px;
      align-self: stretch;
      background: var(--Color-Neutral-200, #EDEDED);
    }
    .card-container{
      display: flex;
      width: 300px;
      padding: var(--Spacing-8, 32px) var(--Spacing-6, 24px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .card-content{
        display: flex;
        width: 252px;
        height: 93px;
        flex-direction: column;
        align-items: flex-start;
        gap: 26px;
        .card-title{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          align-self: stretch;
          .title{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12.882px;
            align-self: stretch;
            color: #000;
            font-family: "Noto Sans TC";
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
          .user{
            color: #848484;
            font-family: "Noto Sans TC";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 22.4px */
          }
        }
        .tag{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 41.867px;
          align-self: stretch;
          .dot-icon{
            display: flex;
            align-items: center;
            gap: 9.259px;
            align-self: stretch;
          }
          .user-icon{
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .star-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5.368px;
            align-self: stretch;
          }
        }
      }
    }
  }
</style>