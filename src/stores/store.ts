import { useLocalStorage } from "@vueuse/core";

// Handles localStorage and reactivity at the same time
// localStorage.setItem("userProfile", JSON.stringify(userProfile.value));
const userProfile = useLocalStorage(
    'userProfile',
    {
        email: null,
        token: null,
        usage_limit: 0,
        // items: []
    }
)

export { userProfile }