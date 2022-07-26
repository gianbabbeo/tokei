import {createSlice} from "@reduxjs/toolkit"

/**
 * maxed - 23oh59m59s blocca la possibilità di aggiungere tempo
 * seconds
 * minutes
 * hours
 * stop - raggiunto lo zero smette il countdown
 */
const initialState = {
    start: 0,
    milestone: 0,
    maxed: false,
    seconds: 3,
    minutes: 2,
    hours: 1,
    stop: false,
}

export const countdownSlice = createSlice({
    name: 'countdown',
    initialState,
    reducers: {
        addSecond: (state) => {
            if (state.seconds + 1 >= 60) {
                state.seconds = 0;
                if (state.minutes + 1 >= 60) {
                    state.minutes = 0;
                    if (state.hours + 1>= 24) {
                        //
                    }
                    else {
                        state.hours++;
                    }
                }
                else {
                    state.minutes++;
                }
            }
            else {
                state.seconds++;
            }
        },
        addMinute: (state) => {
            if (state.minutes + 1 >= 60) {
                state.minutes = 0;
                if (state.hours + 1 >= 24) {
                    //
                }
                else {
                    state.hours++;
                }
            }
            else {
                state.minutes++;
            }
        },
        addHour: (state) => {
            if (state.hours + 1 >= 24) {
                //
            }
            else {
                state.hours++;
            }
        },
        tick: (state) => {
            //if (state.hours != 0 && state.minutes != 0 && state.seconds != 0) {
                if (state.seconds <= 0) {
                    state.seconds = 60;
                    if (state.minutes - 1 <= 0) {
                        state.minutes = 60;
                        if (state.hours - 1 <= 0) {
                            state.hours = 0;
                        }
                        else {
                            state.hours--;
                        }
                    }
                    else {
                        state.minutes--;
                    }
                }
                else {
                    state.seconds--;
                }
            //} 
        },
        updateMilestone: (state, payload) => {
            state.milestone = parseInt(payload) - state.start;
        },
        startMilestone: (state) => {
            const d = new Date();
            state.start = state.milestone = d.getTime();
        }
    }
});

export const {addSecond, addMinute, addHour, tick, updateMilestone, startMilestone} = countdownSlice.actions;

export default countdownSlice.reducer;