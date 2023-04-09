import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ComponentResolver } from 'unplugin-vue-components/types'

interface BootstrapVueResolverOptions {
  /**
   * Auto import for directives.
   *
   * @default true
   */
  directive?: boolean
}
const BootstrapVueNextResolver = (_options: BootstrapVueResolverOptions = {}): Array<ComponentResolver> => {
  const options = { directives: true, ..._options }
  const resolvers: Array<ComponentResolver> = [{
    type: 'component',
    resolve: (name) => {
      if (name.match(/^B[A-Z]/))
        return { name, from: 'bootstrap-vue-next' }
    },
  }]

  if (options.directives) {
    resolvers.push({
      type: 'directive',
      resolve: (name) => {
        if(name.match(/^B[A-Z]/))
          return { name: `V${name}`, from: 'bootstrap-vue-next' }
      }
    })
  }
  return resolvers
}
export default defineConfig({
  base: "/Chirper/",
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()]
    })
  ]
})