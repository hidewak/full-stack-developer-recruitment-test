export const OUTPUT_DATE_FORMAT = 'YYYY-MM-DD'

export interface Output {
    [date: string]: Slot[]
}

export enum DAY {
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday',
    THURSDAY = 'thursday',
    FRIDAY = 'friday',
    SATURDAY = 'saturday',
    SUNDAY = 'sunday',
}

export interface Slot {
    slotId: number
    date: string
    slotStartTime: string
    slotEndTime: string
    weekDay: DAY
    totalAvailablePlaces: number
    terrains: Terrain[]
    isPremium: boolean
}

export interface Terrain {
    terrainId: number
    availablePlaces: number
    gameId: null
    isPremium: boolean
    isTerrainFree: boolean
}

export const MOMENT_TO_DAY: { [ momentDay: number ]: DAY } = {
    0: DAY.SUNDAY,
    1: DAY.MONDAY,
    2: DAY.TUESDAY,
    3: DAY.WEDNESDAY,
    4: DAY.THURSDAY,
    5: DAY.FRIDAY,
    6: DAY.SATURDAY,
}