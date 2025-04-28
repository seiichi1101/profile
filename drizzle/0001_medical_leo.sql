PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_Blog` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text(1000),
	`published` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_Blog`("id", "title", "content", "published") SELECT "id", "title", "content", "published" FROM `Blog`;--> statement-breakpoint
DROP TABLE `Blog`;--> statement-breakpoint
ALTER TABLE `__new_Blog` RENAME TO `Blog`;--> statement-breakpoint
PRAGMA foreign_keys=ON;