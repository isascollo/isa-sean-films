// utils/dateUtils.ts
export function formatDate(date: Date | string | undefined): string {
  // First, check if 'date' is undefined or not an instance of Date
  if (!date || !(date instanceof Date)) {
    // Attempt to create a Date object if 'date' is a string
    if (typeof date === "string") {
      const parsedDate = new Date(date);
      // Check if the parsed date is valid
      if (!isNaN(parsedDate.getTime())) {
        return (
          parsedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
          " " +
          parsedDate.toLocaleTimeString("en-US")
        );
      }
    }
    return "Date not available";
  }

  // If 'date' is a valid Date object, format it
  return (
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    " " +
    date.toLocaleTimeString("en-US")
  );
}
