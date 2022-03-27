<template>
    <div
        class="border-2 border-violet-600 flex flex-col justify-center text-center h-[180px] w-[180px] text-3xl font-bold"
        :class="{ 'bg-violet-600 text-white': selected }"
    >
        {{ singleSlot.slotStartTime }}
    </div>
</template>

<script src="./Slot.ts" />