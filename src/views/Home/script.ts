import { Vue } from 'vue-class-component'

export default class Home extends Vue {
  created() {
    setTimeout(() => this.loop(), 200)
  }

  private async loop() {
    const text = require('@/assets/images/ascii_head.txt') as string
    const content = require('@/assets/images/ascii_head_content.txt') as string
    const target = document.getElementById('text-flow')
    if (target) {
      target.innerHTML = ''
      for (const [index, char] of text.split('').entries()) {
        const item = content[index]
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
