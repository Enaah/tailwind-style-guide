# Client Name

## Colours

<color-list :colors="tailwindConfig.theme.colors" />

## Typography

<typography-list :fonts="tailwindConfig.theme.fonts" :sizes="tailwindConfig.theme.textSizes" :weights="tailwindConfig.theme.fontWeights" />

## Padding

<padding-list :padding="tailwindConfig.theme.padding" />

## Opacity

<opacity-list :opacities="tailwindConfig.theme.opacity" />

<script>
import _ from 'lodash'

if (typeof(window) !== 'undefined') window.global = window
const tailwindConfig = require('../tailwind')

export default {
    computed: {
        tailwindConfig: function () {
            return tailwindConfig;
        }
    }
}
</script>

<style lang="stylus">
    @import "docs/.vuepress/style.styl"
</style>
