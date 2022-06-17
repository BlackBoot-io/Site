export { default as BaseHeader } from '../../components/base/Header.vue'
export { default as BaseLogo } from '../../components/base/Logo.vue'
export { default as SectionBenefits } from '../../components/section/Benefits.vue'
export { default as SectionFutures } from '../../components/section/Futures.vue'
export { default as SectionServices } from '../../components/section/Services.vue'
export { default as SectionSpotlight } from '../../components/section/Spotlight.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
