interface Day {
    name: string;
    openingTime: number;
    closingTime: number;
};

interface DayWithPosition extends Day { position?: number; };

export const sortDaysOfWeek = (days: Day[]): Day[] => {
    const daysWithPostion = days.map(day => ({ ...day, position: day.name === 'Monday' ? 0 : day.name === 'Tuesday' ? 1 : day.name === 'Wednesday' ? 2 : day.name === 'Thursday' ? 3 : day.name === 'Friday' ? 4 : day.name === 'Saturday' ? 5 : 6 }));
    const sortedDays: DayWithPosition[] = daysWithPostion.sort((a, b) => a.position - b.position);
    const newDays = sortedDays.map(day => {
        if (Object.hasOwn(day, 'position')) {
            delete day.position;
        }
        return day;
    });
    return newDays;
};