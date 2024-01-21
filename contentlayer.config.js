import { makeSource, defineDatabase } from "contentlayer-source-notion";
import { Client } from "@notionhq/client";

const client = new Client({ auth: process.env.NOTION_TOKEN });

export default makeSource({
	client,
	databaseTypes: [],
});
