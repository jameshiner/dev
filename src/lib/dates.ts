// Dates in the data read like "Mar 2022 – Dec 2023", or "Jul 2025 –" for a current role.

/** Years only: "Mar 2022 – Dec 2023" → "2022 – 2023", "Jul 2025 –" → "2025 –". */
export function yearsOnly(date: string): string {
  const years = date.match(/\d{4}/g) ?? [];
  const [start, end] = [years[0], years.at(-1)];
  if (!start) return date;
  if (date.trimEnd().endsWith('–')) return `${start} –`;
  return start === end ? start : `${start} – ${end}`;
}

/** Ranges on two lines for the date column: "Mar 2022 –\nDec 2023". Open ranges stay as is. */
export function stackedRange(date: string): string {
  return date.trimEnd().replace(' – ', ' –\n');
}
