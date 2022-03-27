import { defineComponent, ref, Ref } from 'vue'

import { Slot as SlotType } from '@/types/output'

import Slot from '@/components/slot/Slot.vue'

export default defineComponent({
    components: {
        SingleSlot: Slot,
    },
    props: {
        slots: {
            type: Array as () => SlotType[],
            required: true,
        },
    },
    setup() {
        const show = ref(false)
        const selected: Ref<number | undefined> = ref(undefined)

        const select = (id: number) => {
            selected.value = id
        }

        return {
            show,
            selected,
            select,
        }
    }
})