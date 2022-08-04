<template>
  <div>
    <div
      class="position-absolute d-flex justify-content-center p-5 flex-column h-100"
    >
      <h3 class="text-dancing">{{ $t('Home.greeting') }}</h3>
      <h1>{{ $t(`${$route.name}.headline`) }}</h1>
    </div>
    <pre id="text" class="d-none"></pre>
    <div
      class="position-absolute enter-fade overflow-hidden opacity-50 margin-auto ps-5"
    >
      <pre id="text-flow" class="overflow-hidden"></pre>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'
  import text from '@/assets/images/ascii_head.txt?raw'
  import content from '@/assets/images/ascii_head_content.txt?raw'
  import { useI18n } from 'vue-i18n'

  export default class Home extends Vue {
    created() {
      setTimeout(() => this.loop(), 200)
    }

    private async loop() {
      const target = document.getElementById('text-flow')
      if (target) {
        target.innerHTML = ''
        for (const index in text.split('')) {
          const item = content[index]
          const char = text[index]
          if (char === '#') {
            await new Promise((resolve) => {
              setTimeout(resolve, (item.charCodeAt(0) * Math.random()) / 10)
            })
            target.innerHTML = target.innerHTML + item
          } else {
            target.innerHTML = target.innerHTML + char
          }
        }
      }
    }
  }
</script>
