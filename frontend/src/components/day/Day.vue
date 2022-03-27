<template>
    <div
        class="border-2 border-violet-600 h-[360px] w-[300px] flex flex-col justify-center text-center"
        :class="{ 'bg-violet-600 text-white': selected }"
    >
        <div class="text-4xl mb-5">{{ dayOfWeek }}</div>
        <div class="text-7xl mb-10 font-bold">{{ dayNumber }}</div>
        <div class="text-5xl mb-3 font-bold">{{ month }}</div>
        <div class="text-2xl font-bold">{{ year }}</div>        
    </div>
</template>

<script src="./Day.ts" />