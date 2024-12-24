import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
  id: "last-access",
  name: "Last access",
  icon: "lock_clock",
  description: "Save the item's last access time",
  component: InterfaceComponent,
  options: null,
  types: ["dateTime", "timestamp"],
});
