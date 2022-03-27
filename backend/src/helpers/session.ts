import moment, { Moment } from "moment"

import {
    Input,
    TimeSlot,
    Terrain as TerrainInput
} from "../types/input"
import {
    Slot,
    Output,
    MOMENT_TO_DAY,
    Terrain,
    OUTPUT_DATE_FORMAT
} from "../types/output"

let GLOBAL_SLOT_ID = 0

export const generate = (input: Input, nbDays: number): Output => {
    const date = moment()
    const sessionDuration = moment.duration(input.session_duration).asMinutes()

    let output = {}

    for (let index = 0; index < nbDays; index++) {
        output = {
            ...output,
            [ date.format(OUTPUT_DATE_FORMAT) ]: getSlots(date, input, sessionDuration),
        }

        date.add(1, 'd')
    }

    return output
}

const getSlots = (date: Moment, input: Input, sessionDuration: number): Slot[] => {
    const timeslots: TimeSlot[] | undefined = input.opening_time[MOMENT_TO_DAY[date.day()]]

    if (timeslots === undefined) {
        return []
    }

    return timeslots.reduce((acc: Slot[], timeslot: TimeSlot) => acc.concat(createSlots(timeslot, date, sessionDuration, input.terrains)), [])
}

const createSlots = (timeslot: TimeSlot, date: Moment, sessionDuration: number, terrains: TerrainInput[]): Slot[] => {
    const [ startHour, startMinutes ] = timeslot.from.split(':')
    const start = date.clone().set('hour', parseInt(startHour)).set('minute', parseInt(startMinutes))
    const [ endHour, endMinutes ] = timeslot.to.split(':')
    const end = date.clone().set('hour', parseInt(endHour)).set('minute', parseInt(endMinutes))

    if (endHour < startHour) {
        end.add(1, 'd')
    }

    const slots: Slot[] = []

    while (start.clone().add(sessionDuration, 'minutes').isSameOrBefore(end)) {
        let sessionEnd = start.clone().add(sessionDuration, 'minutes')

        slots.push(createSlot(date, start.format('HH:mm'), sessionEnd.format('HH:mm'), terrains))
        start.add(sessionDuration, 'minutes')
    }

    return slots
}

const createSlot = (date: Moment, start: string, end: string, terrains: TerrainInput[]): Slot => {
    return {
        slotId: ++GLOBAL_SLOT_ID,
        date: date.format(OUTPUT_DATE_FORMAT),
        slotStartTime: start,
        slotEndTime: end,
        weekDay: MOMENT_TO_DAY[date.day()],
        totalAvailablePlaces: terrains.reduce((acc: number, terrain: TerrainInput) => terrain.players + acc, 0),
        terrains: terrains.map((terrain, index) => getTerrains(terrain, index + 1)),
        isPremium: false,
    }
}

const getTerrains = (terrain: TerrainInput, id: number): Terrain => ({
    terrainId: id,
    availablePlaces: terrain.players,
    gameId: null,
    isPremium: false,
    isTerrainFree: true,
})