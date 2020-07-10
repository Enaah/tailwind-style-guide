<template>
    <table class="table table-fixed w-full">
        <tr>
            <td
                v-for="(color, index) in colorValues"
                :class="`bg${colorClass}-${index}`"
                class="h-16"
            ></td>
        </tr>
        <tr>
            <td
                v-for="(color, index) in colorValues"
                class="align-top text-center"
            >
                <span
                    class="inline-block whitespace-no-wrap"
                    style="writing-mode: tb-rl;"
                    >{{ index }}</span
                >
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    props: ['colors'],
    computed: {
        colorValues: function () {
            return this.colors[1]
        },
        colorClass: function () {
            let colorName = this.colors[0]
            return this.colors[1][`${colorName}`] !== undefined
                ? ''
                : `-${colorName}`
        },
    },
}
</script>
