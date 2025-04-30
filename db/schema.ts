import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const Blog = sqliteTable('Blog', {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text({ length: 1000 }),
  published: int().notNull().default(0),
  externalLink: text(),
});
