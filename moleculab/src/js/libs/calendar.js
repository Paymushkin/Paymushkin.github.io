import VanillaCalendar from 'vanilla-calendar-pro';
import { IOptions } from 'vanilla-calendar-pro/types';

const options = {
    actions: {
        clickDay(event, self) {
            console.log(self.selectedDates);
        },
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#calendar');
    calendar.init();
});