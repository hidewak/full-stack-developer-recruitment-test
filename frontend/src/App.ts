import { defineComponent } from 'vue'
import calendarJSON from './../calendar.json'

import DayWrapper from '@/components/day/wrapper/DayWrapper.vue'
import { Output } from '@/types/output'

export default defineComponent({
    components: {
        DayWrapper,
    },
    setup() {
        const calendar = calendarJSON as Output

        return {
            calendar,
        }
    },
})