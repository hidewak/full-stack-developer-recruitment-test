import { Slot } from '@/types/output'
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        singleSlot: {
            type: Object as () => Slot,
            required: true,
        },
        selected: {
            type: Boolean,
            required: true,
        }
    },
})