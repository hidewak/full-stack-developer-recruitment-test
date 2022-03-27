export interface Input {
    opening_time: OpeningTime
    terrains: Terrain[]
    session_duration: string
}

export interface OpeningTime {
    [day: string]: TimeSlot[]
}

export interface TimeSlot {
    from: string
    to: string
}

export interface Terrain {
    name: string
    players: number
}

export const isTerrain = (value: any): value is Terrain => typeof value === 'object' && value.name !== undefined && typeof value.name === 'string' && value.players !== undefined && typeof value.players === 'number'
export const isTimeSlot = (value: any): value is TimeSlot => typeof value === 'object' && value.from !== undefined && typeof value.from === 'string' && value.to !== undefined && typeof value.to === 'string'

export const isOpeningTime = (value: any): value is OpeningTime =>
    typeof value === 'object'
    && Object.keys(value).reduce((acc: boolean, key: string) =>
        acc && Array.isArray(value[key]) && value[key].reduce((accNext: boolean, val: any) => accNext && isTimeSlot(val), true)
    , true)

export const isInput = (value: any): value is Input => 
    typeof value === 'object'
    && isOpeningTime(value.opening_time)
    && Array.isArray(value.terrains) && value.terrains.reduce((acc: boolean, terrain: any) => isTerrain(terrain), true)
    && value.session_duration !== undefined && typeof value.session_duration === 'string'