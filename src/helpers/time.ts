export const parseMinsPastMidnight = (minsPastMidnight: number): string => {
    const hours = Math.floor(minsPastMidnight / 60);
    const mins = minsPastMidnight % 60;
    const hoursStr = hours.toString().padStart(2, '0');
    const minsStr = mins.toString().padStart(2, '0');
    return `${hoursStr}:${minsStr}`;
};