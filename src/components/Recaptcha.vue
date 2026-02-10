<script setup lang="ts">
// @ts-ignore - vue3-recaptcha2 has typing issues with package.json exports
import VueRecaptcha from 'vue3-recaptcha2'
import { ref } from 'vue'

const emit = defineEmits<{
  verified: [token: string | null]
}>()

const recaptcha = ref<InstanceType<typeof VueRecaptcha> | null>(null)
const siteKey = '6Lf0yw8rAAAAAGEdMpBbq5n1MmN467hoEN-jgbgG'

const onVerify = (token: string) => {
  emit('verified', token)
}

const onExpire = () => {
  emit('verified', null)
}

const reset = () => {
  if (recaptcha.value) {
    recaptcha.value.reset()
  }
}

defineExpose({
  reset,
  recaptcha
})
</script>

<template>
  <VueRecaptcha
    class="mt-3"
    :sitekey="siteKey"
    theme="light"
    hl="en"
    ref="recaptcha"
    @verify="onVerify"
    @expire="onExpire"
  />
</template>
