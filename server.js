import express from "express"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve static assets
app.use("/assets", express.static(path.resolve(__dirname, "dist/client/assets")))

// Load SSR bundle
const { render } = await import("./dist/server/entry-server.js")

app.get("*", async (req, res) => {
  const url = req.originalUrl

  const template = fs.readFileSync(
    path.resolve(__dirname, "dist/client/index.html"),
    "utf-8"
  )

  const appHtml = await render(url)

  const html = template.replace("<!--app-html-->", appHtml)

  res.status(200).set({ "Content-Type": "text/html" }).end(html)
})

app.listen(3000, () => {
  console.log("🚀 SSR running on port 3000")
})
