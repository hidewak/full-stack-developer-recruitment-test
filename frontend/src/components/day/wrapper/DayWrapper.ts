import { defineComponent, computed, ref, Ref } from 'vue'

import Day from '@/components/day/Day.vue'
import SlotWrapper from '@/components/slot/wrapper/SlotWrapper.vue'

import { Output } from '@/types/output'

export default defineComponent({
    components: {
        Day,
        SlotWrapper,
    },
    props: {
        calendar: {
            type: Object as () => Output,
            required: true,
        },
    },
    setup(props) {
        const days = computed(_ => Object.keys(props.calendar))
        const selectedDay = ref(0)
        const slots = computed(_ => props.calendar[days.value[selectedDay.value]])

        const previousAvailable = computed(_ => selectedDay.value > 0)
        const nextAvailable = computed(_ => selectedDay.value < days.value.length - 1)

        const dayRefs: Ref<any> = ref([])

        const select = (index: number) => {
            selectedDay.value = index

            console.log(dayRefs.value[index])
            dayRefs.value[index].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        }

        const nextDay = () => {
            if (selectedDay.value < days.value.length - 1) {
                select(selectedDay.value + 1)
            }
        }
        
        const previousDay = () => {
            if (selectedDay.value > 0) {
                select(selectedDay.value - 1)
            }
        }

        return {
            days,
            dayRefs,
            selectedDay,
            slots,
            previousAvailable,
            nextAvailable,
            select,
            nextDay,
            previousDay,
        }
    },
})