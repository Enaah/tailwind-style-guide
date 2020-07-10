<template>
    <div>
        <div v-for="(groupColors, groupKey) in groupedColors">
            <group-block group-name="color" :heading="groupKey">
                <color-spread :colors="[groupKey, groupColors]" />
            </group-block>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: ['colors'],
    computed: {
        groupedColors: function () {
            for (let element in this.colors) {
                if (typeof this.colors[`${element}`] !== 'object') {
                    let key = element
                    let object = {}
                    object[`${element}`] = this.colors[`${element}`]
                    this.colors[`${element}`] = object
                }
            }
            return this.colors
        },
    },
}
</script>
