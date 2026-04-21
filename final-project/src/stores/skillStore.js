import { defineStore } from "pinia";
import { db } from "../firebase/index"; 
import { doc, getDocs, setDoc, collection } from "firebase/firestore";

export const useskillStore = defineStore("skills", {
  state: () => ({
    allSkills: [], // 存放所有技能
    currentSkill: null, // 存放單一選中的技能詳情
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
  },
});