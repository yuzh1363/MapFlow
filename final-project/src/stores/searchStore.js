import { defineStore } from "pinia";
import { db } from "../firebase/index"; // 引用firebase
import { doc, getDocs, collection } from "firebase/firestore";

export const useRoleStore = defineStore("role", {
  state: () => ({
    allRoles: [], // 存放所有角色
    allSkills: [],
    allTempletes: [],
    currentRole: null, // 存放單一選中的角色詳情
    loading: false,
  }),

  actions: {
    // 讀取整個 roles 集合
    async fetchAllRoles() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "roles"));

        if (querySnapshot.empty) {
          console.warn("注意：roles 集合是空的！");
        }

        const rolesData = [];
        querySnapshot.forEach((doc) => {
          rolesData.push({ id: doc.id, ...doc.data(), category: 'role' });
        });

        this.allRoles = rolesData;
      } catch (error) {
        console.error("Firebase 報錯詳情:", error.code, error.message);
      } finally {
        this.loading = false;
      }
    },

    async fetchAllSkills() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "skills"));

        if (querySnapshot.empty) {
          console.warn("注意：skills 集合是空的！");
        }

        const skillsData = [];
        querySnapshot.forEach((doc) => {
          skillsData.push({ id: doc.id, ...doc.data(), category: 'skill' });
        });

        this.allSkills = skillsData;
      } catch (error) {
        console.error("Firebase 報錯詳情:", error.code, error.message);
      } finally {
        this.loading = false;
      }
    },

    // 根據名稱讀取單一角色 (ex.UIUX設計師)
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
    async fetchAllTemplete() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "templete"));

        if (querySnapshot.empty) {
          console.warn("注意：templete 集合是空的！");
        }

        const templeteData = [];
        querySnapshot.forEach((doc) => {
          templeteData.push({ id: doc.id, ...doc.data(), category: 'templete' });
        });

        this.allTempletes = templeteData;
      } catch (error) {
        console.error("Firebase 報錯詳情:", error.code, error.message);
      } finally {
        this.loading = false;
      }
    },
  },
});