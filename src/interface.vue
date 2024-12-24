<template>
  <p>{{ value }}</p>
</template>

<script setup lang="ts">
import { useApi } from "@directus/extensions-sdk";
import { toRefs, watch } from "vue";

const props = defineProps<{
  value: any;
  primaryKey: any;
  collection: string;
  field: string;
}>();

const { primaryKey } = toRefs(props);

const api = useApi();

watch(primaryKey, async (primaryKey) => {
  if (primaryKey && String(primaryKey) !== "+") {
    await api.patch(`/items/${props.collection}/${primaryKey}`, {
      [props.field]: new Date(),
    });
  }
});
</script>
