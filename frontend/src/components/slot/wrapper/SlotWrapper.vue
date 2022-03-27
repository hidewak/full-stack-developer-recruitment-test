<template>
    <div class="w-10/12 mx-auto">
        <div class="text-4xl font-bold mt-10 mb-6">
            AVAILABLE TIME SLOTS
        </div>
        <div class="flex flex-row flex-wrap ">
            <div
                v-for="(slot, index) in slots"
                :key="slot.slotId"
                class="m-1 cursor-pointer"
            >
                <single-slot
                    :single-slot="slot"
                    :selected="selected === slot.slotId"
                    @click="select(slot.slotId)"
                    v-if="index < 16 || show"
                />
            </div>

        </div>
        <div class="m-5 underline cursor-pointer text-right" v-if="!show && slots.length > 16">
            <a @click="show = true">Show all timeslots</a>
        </div>
    </div>
</template>

<script src="./SlotWrapper.ts" />