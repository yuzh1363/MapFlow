<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import MyButton from "../components/MyButton.vue";

const router = useRouter();
const authStore = useAuthStore();
const handleRegister = () => {
  authStore.login({ name: "新使用者" }, "fake_token_123");
  router.push("/");
};

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { ref } from "vue";
// const email = ref("");
// const password = ref("");
// const auth = getAuth();

// const handleRegister = async () => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email.value,
//       password.value,
//     );
//     // 註冊成功後會拿到 user 資訊
//     const user = userCredential.user;
//     console.log("註冊成功：", user.email);
//     alert("歡迎加入！註冊成功");

//     router.push('/');
//   } catch (error) {
//     // 處理錯誤，Firebase 會回傳錯誤代碼
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     if (errorCode === "auth/email-already-in-box") {
//       alert("此信箱已被註冊過囉！");
//     } else if (errorCode === "Firebase: Error (auth/email-already-in-use)") {
//       alert("密碼強度太弱（至少需 6 個字元）");
//     } else {
//       console.error("註冊失敗：", errorMessage);
//     }
//   }
// };
</script>

<template>
  <div class="login-page">
    <div class="login-pic">
      <img class="bg-layer" src="../assets/images/register_bg.png" alt="register pic" />
      <img class="character cloudmen" src="../assets/images/cloudmen.png" alt="cloudmen" />
      <img class="character scott" src="../assets/images/scott.png" alt="scott" />
      <img class="character peggy" src="../assets/images/peggy.png" alt="peggy" />
      <img class="character wei" src="../assets/images/wei.png" alt="wei" />
    </div>

    <div class="login-form-section">
      <div class="content-wrapper">
        <h1 class="title">註冊</h1>

        <div class="third-party-account">
          <img class="icon" src="../assets/images/Facebook.svg" alt="Facebook" />
          <img class="icon" src="../assets/images/Google.svg" alt="Google" />
          <img class="icon" src="../assets/images/Apple.svg" alt="Apple" />
          <img class="icon" src="../assets/images/Linkin.svg" alt="Linkin" />
        </div>

        <div class="divider">
          <span>OR</span>
        </div>

        <div class="login-input-group">
          <input v-model="email" type="email" placeholder="電子信箱" class="styled-input" />
          <input v-model="password" type="password" placeholder="密碼" class="styled-input" />
          <input type="password" placeholder="再次輸入密碼" class="styled-input" />
          <MyButton text="註冊" type="yellow" border="square" size="size-sm" class="full-width-btn" @click="handleRegister"></MyButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    overflow: visible;
  }
}

.login-pic {
  flex: 1;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
    flex: none;
  }

  .bg-layer {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .character {
    position: absolute;
    z-index: 2;
  }

  .cloudmen {
    width: 60%;
    left: -25%;
    top: 15%;
  }

  .wei {
    width: 25%;
    left: 25%;
    top: 65%;
  }

  .scott {
    width: 60%;
    right: -12%;
    top: 5%;
  }

  .peggy {
    width: 60%;
    right: -25%;
    top: 55%;
  }
}

.login-form-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 0;
    padding: var(--spacing-8) var(--spacing-4);
  }
}

.content-wrapper {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
}

.title {
  font-size: 48px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
}

.third-party-account {
  display: flex;
  gap: 25px;

  .icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
}

.divider {
  width: 100%;
  display: flex;
  align-items: center;
  color: #888;
  font-size: 14px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #dbdbdb;
  }

  span {
    padding: 0 15px;
  }
}

.login-input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.styled-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #dbdbdb;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--color-support-a);
    background-color: #fff;
  }
}

.full-width-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
