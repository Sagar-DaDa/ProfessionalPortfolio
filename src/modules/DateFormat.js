const dateIsoToDMY = (isoDate) => {
    const date = new Date(isoDate)
    const options = {
        // weekday: 'long',    // full day name (e.g., Sunday)
        month: 'long',      // full month name (e.g., March)
        day: 'numeric',     // day of the month (e.g., 3)
        year: 'numeric',    // four-digit year (e.g., 2024)
    };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <span>{formattedDate}</span>
      );
}

export default dateIsoToDMY;