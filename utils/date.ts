function formatDate(date: Date): string {
    const formattedDate = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const daySuffix = (day: number) => {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    const day = date.getDate();
    return formattedDate.replace(/\d+/, `${day}${daySuffix(day)}`);
}

export { formatDate };
