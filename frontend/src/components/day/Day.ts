import { defineComponent } from 'vue'
import moment from 'moment'

export default defineComponent({
    props: {
        date: {
            type: String,
            required: true,
        },
        selected: {
            type: Boolean,
            required: true,
        },
    },
    setup(props) {
        const momentDate = moment(props.date)
        const dayOfWeek = momentDate.format('ddd')
        const dayNumber = momentDate.format('D')
        const month = momentDate.format('MMMM').toUpperCase()
        const year = momentDate.format('YYYY')

        return {
            momentDate,
            dayOfWeek,
            dayNumber,
            month,
            year,
        }
    },
})