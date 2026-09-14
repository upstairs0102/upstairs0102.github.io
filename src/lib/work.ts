import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export function getWorkSections() {
  const directory = path.join(process.cwd(), "content/work");
  return readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(
        readFileSync(path.join(directory, file), "utf8"),
      );
      if (
        typeof data.id !== "string" ||
        !/^[a-z-]+$/.test(data.id) ||
        typeof data.title !== "string" ||
        !Number.isInteger(data.order)
      )
        throw new Error(`Invalid Work metadata: ${file}`);
      return {
        id: data.id as string,
        title: data.title as string,
        order: data.order as number,
        body: content,
        file,
      };
    })
    .sort((a, b) => a.order - b.order);
}
