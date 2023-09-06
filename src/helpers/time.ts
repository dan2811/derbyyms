export const parseMinsPastMidnight = (minsPastMidnight: number): string => {
    const date = new Date();
    const hours = Math.floor(minsPastMidnight / 60);
    const mins = Math.floor(minsPastMidnight % 60);
    date.setHours(hours, mins);
    return date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
};

// Returns minsPastMidnight when passed a timeString e.g "12:03"
export const getMinsPastMidnight = (timeString: string): number => {
    const [hours, minutes] = timeString.split(":");
    if (!hours || !minutes) {
        throw new Error("Could not retrieve hours and minutes from time");
    }
    return (parseInt(hours) * 60) + parseInt(minutes);
};