# Client Name

## Colours

<color-list :colors="tailwindConfig.theme.colors" />

## Typography

<typography-list :fonts="tailwindConfig.theme.fontFamily" :sizes="tailwindConfig.theme.fontSize" :weights="tailwindConfig.theme.fontWeight" :spaces="tailwindConfig.theme.letterSpacing" :lineheight="tailwindConfig.theme.lineHeight" />

## Padding

<padding-list :padding="tailwindConfig.theme.padding" />

## Opacity

<opacity-list :opacities="tailwindConfig.theme.opacity" />

<script>
    import _ from 'lodash'
    import resolveConfig from 'tailwindcss/resolveConfig'
    import tailwindConfig from '../tailwind'

    if (typeof(window) !== 'undefined') window.global = window

    export default {
        computed: {
            tailwindConfig: function () {
                return resolveConfig(tailwindConfig);
            }
        }
    }
</script>

<style lang="stylus">
    @import "docs/.vuepress/style.styl"
</style>
