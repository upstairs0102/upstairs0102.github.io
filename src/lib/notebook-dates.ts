/** Empty legacy dates stay null. YYYY-MM-DD also accepts YAML date objects. */
export function parseNoteDate(
  value: unknown,
  field: string,
  file: string,
): string | null {
  if (value === null || value === undefined || value === "") return null;
  const date = value instanceof Date ? value.toISOString().slice(0, 10) : value;
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date))
    throw new Error(
      `Invalid ${field} in ${file}: use YYYY-MM-DD or leave empty`,
    );
  const parsed = new Date(`${date}T00:00:00Z`);
  if (
    Number.isNaN(parsed.valueOf()) ||
    parsed.toISOString().slice(0, 10) !== date
  )
    throw new Error(`Invalid ${field} in ${file}`);
  return date;
}
