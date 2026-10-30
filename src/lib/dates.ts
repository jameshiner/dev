/**
 * Years only, for compact rows: "Mar 2022 – Dec 2023" → "2022 – 2023", "Jan 2024 – Present" →
 * "2024 – Present", "May 2015" → "2015". Full dates stay in the data for the Experience page.
 */
export function yearsOnly(date: string): string {
  const parts = date.match(/\d{4}|Present/g) ?? [];
  const [start, end] = [parts[0], parts.at(-1)];
  if (!start) return date;
  return start === end ? start : `${start} – ${end}`;
}
