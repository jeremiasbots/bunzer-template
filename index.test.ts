import { expect, test } from "bun:test";

test("Get /indexService/index route", async() => {
	const fetch_route = await fetch("http://localhost:3000/indexService/index/devep")
	const text = await fetch_route.text()
	expect(text).toBe("Hello devep!")
})