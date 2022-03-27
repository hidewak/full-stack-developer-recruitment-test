<template>
    <div class="w-11/12 mx-auto mb-10">
        <div class="text-4xl font-bold ml-32 my-10">
            CALENDAR <i class="fa-solid fa-calendar ml-2"></i>
        </div>
        <div class="flex">
            <div class="flex self-center pl-10 pr-5">
                <i
                    class="fa-solid fa-arrow-left-long text-5xl cursor-pointer"
                    :class="{ 'text-gray-300 cursor-default': !previousAvailable }"
                    @click="previousAvailable && previousDay()"
                />
            </div>
            <div class="flex flex-nowrap overflow-x-scroll">
                <div
                    v-for="(day, index) in days"
                    :key="day"
                    :ref="div => dayRefs[index] = div"
                    class="mr-2 mb-2 cursor-pointer"
                >
                    <day
                        :date="day"
                        :selected="selectedDay === index"
                        @click="select(index)"
                    />
                </div>
            </div>
            <div class="flex self-center pl-5 pr-10">
                <i
                    class="fa-solid fa-arrow-right-long text-5xl cursor-pointer"
                    :class="{ 'text-gray-300 cursor-default': !nextAvailable }"
                    @click="nextAvailable && nextDay()"
                />
            </div>
        </div>
        <div v-if="slots.length">
            <slot-wrapper :slots="slots" />
        </div>
        <div v-else class="my-10 text-2xl font-bold text-center">No available timeslots</div>
    </div>
</template>

<script src="./DayWrapper.ts" />