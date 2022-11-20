import app from "@/main";

console.log("app", app);
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

app.use(Toast, options);
