import { defineStore } from "pinia";
import { db } from "../firebase/index"; // 引用剛才建立的檔案
import { doc, getDocs, setDoc, collection } from "firebase/firestore";

export const useskillStore = defineStore("skills", {
  state: () => ({
    allSkills: [], // 存放所有角色
    currentSkill: null, // 存放單一選中的角色詳情
    loading: false,
  }),

  actions: {
    async fetchAllSkills() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "skills"));

        if (querySnapshot.empty) {
          console.warn("注意：skills 集合是空的！");
        }

        const skillsData = [];
        querySnapshot.forEach((doc) => {
          skillsData.push({ id: doc.id, ...doc.data() });
        });

        this.allSkills = skillsData;
      } catch (error) {
        console.error("Firebase 報錯詳情:", error.code, error.message);
      } finally {
        this.loading = false;
      }
    },

    // 需求 B：根據名稱讀取單一角色 (例如傳入 "UIUX設計師")
    async fetchSingleRole(roleName) {
      this.loading = true;
      try {
        const docRef = doc(db, "roles", roleName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.currentRole = docSnap.data();
        } else {
          console.log("找不到該角色紀錄");
        }
      } catch (error) {
        console.error("讀取單一角色失敗:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});