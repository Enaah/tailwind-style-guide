<template>
    <div>
        <div v-for="(fontList, fontLabel) in fonts">
            <group-block
                group-name="typography"
                :heading="fontLabel"
                :help="'(.font-' + fontLabel + ')'"
            >
                <h4 :id="'typography-' + fontLabel + '-sizes'" class="mt-6">
                    <a
                        :href="'#typography-' + fontLabel + '-sizes'"
                        aria-hidden="true"
                        class="header-anchor"
                        >#</a
                    >Sizes
                </h4>
                <table class="w-full table">
                    <tr v-for="(textSize, textLabel) in sizes">
                        <td
                            class="px-5 py-3 whitespace-no-wrap"
                            style="width: 1px;"
                        >
                            {{ textLabel }}
                        </td>
                        <td
                            class="px-5 py-3 leading-normal ellipsis"
                            :class="'font-' + fontLabel + ' text-' + textLabel"
                        >
                            <span class="px-5 py-3"
                                >Lorem ipsum dolar sit amet</span
                            >
                        </td>
                    </tr>
                </table>

                <h4 :id="'typography-' + fontLabel + '-weights'" class="mt-6">
                    <a
                        :href="'#typography-' + fontLabel + '-weights'"
                        aria-hidden="true"
                        class="header-anchor"
                        >#</a
                    >
                    Weights
                </h4>
                <table class="table w-full overflow-hidden">
                    <tr>
                        <template v-for="weight in weightKeysRevered">
                            <td class="px-5 py-3 text-center">
                                <span
                                    :class="
                                        'font-' + fontLabel + ' font-' + weight
                                    "
                                    class="text-5xl"
                                    :title="'.font-' + weight"
                                    >A</span
                                >
                            </td>
                        </template>
                    </tr>
                    <tr>
                        <template v-for="weight in weightKeysRevered">
                            <td
                                class="px-5 py-3 whitespace-no-wrap align-top text-center"
                            >
                                <span
                                    class="inline-block"
                                    style="writing-mode: tb-rl;"
                                    >{{ weight }}</span
                                >
                            </td>
                        </template>
                    </tr>
                </table>

                <h4
                    :id="'typography-' + fontLabel + '-letterspacing'"
                    class="mt-6"
                >
                    <a
                        :href="'#typography-' + fontLabel + '-letterspacing'"
                        aria-hidden="true"
                        class="header-anchor"
                        >#</a
                    >Letterspacing
                </h4>
                <table class="w-full table">
                    <tr v-for="(textSize, trackingLabel) in spaces">
                        <td
                            class="px-5 py-3 whitespace-no-wrap"
                            style="width: 1px;"
                        >
                            {{ trackingLabel }}
                        </td>
                        <td
                            class="px-5 py-3 leading-normal ellipsis"
                            :class="
                                'font-' +
                                fontLabel +
                                ' tracking-' +
                                trackingLabel
                            "
                        >
                            <span class="px-5 py-3"
                                >Lorem ipsum dolar sit amet</span
                            >
                        </td>
                    </tr>
                </table>

                <h4
                    :id="'typography-' + fontLabel + '-lineheight'"
                    class="mt-6"
                >
                    <a
                        :href="'#typography-' + fontLabel + '-lineheight'"
                        aria-hidden="true"
                        class="header-anchor"
                        >#</a
                    >Lineheight
                </h4>
                <table class="w-full table">
                    <tr v-for="(textSize, lineheightlabel) in lineheight">
                        <td
                            class="px-5 py-3 whitespace-no-wrap"
                            style="width: 1px;"
                        >
                            {{ lineheightlabel }}
                        </td>
                        <td
                            class="px-5 py-3 ellipsis"
                            :class="
                                'font-' +
                                fontLabel +
                                ' leading-' +
                                lineheightlabel
                            "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </td>
                    </tr>
                </table>
            </group-block>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: ['fonts', 'sizes', 'weights', 'spaces', 'lineheight'],
    computed: {
        weightKeys: function () {
            return _.keys(this.weights)
        },
        weightKeysRevered: function () {
            return _.reverse(this.weightKeys)
        },
    },
}
</script>

<style>
.ellipsis {
    position: relative;
}
.ellipsis:before {
    content: 'X';
    visibility: hidden;
}
.ellipsis span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
