<script setup lang="ts">
import { propsConfig_all } from '@/com-tsx'
import { useCenter } from '@/hooks'
import { NSwitch, NColorPicker, NInput } from 'naive-ui'
import { useGlobal } from '@/hooks'
import JsEditor from '@/components/js-editor.vue'

const {} = useGlobal()

defineOptions({
  components: {
    NSwitch,
    NColorPicker,
    NInput,
  },
})

function Render(props) {
  console.log('props: ', props)
  return props.item.render(activeCom.value)
}

const { activeCom } = useCenter()
const list = computed(() => {
  if (!activeCom.value) return []
  return propsConfig_all[activeCom.value.type]
})
</script>

<template>
  <fieldset v-for="(item, index) in list" class="border p-2 m-2">
    <legend style="color: #999">
      {{ item.title }}
    </legend>

    <n-form :model="activeCom.props" label-placement="left" size="small" :show-feedback="false">
      <n-form-item
        v-for="i in item.config"
        :label="i.label"
        :path="i.path"
        class="mb-2"
        size="small"
      >
        <n-radio-group
          v-if="i.type === 'n-radio-group'"
          v-model:value="activeCom.props[i.path]"
          name="radiogroup2"
          size="small"
          v-bind="i.props"
        >
          <n-radio-button
            v-if="activeCom.options[i.path].length < 5"
            v-for="value in activeCom.options[i.path]"
            :value
          >
            {{ value }}
          </n-radio-button>
          <n-radio v-else v-for="value in activeCom.options[i.path]" :value :key="value">
            {{ value }}
          </n-radio>
        </n-radio-group>

        <JsEditor v-else-if="i.type === 'code'"></JsEditor>

        <Render v-else-if="typeof i.render === 'function'" :item="i" />

        <component
          v-else
          :is="i.type"
          v-model:value="activeCom.props[i.path]"
          size="small"
          v-bind="i.props"
        />
      </n-form-item>
    </n-form>
  </fieldset>
</template>

<style scoped></style>
