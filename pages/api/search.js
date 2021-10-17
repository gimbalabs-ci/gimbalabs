import { allContent } from "../../cache/data";

export default function search(req, res) {
  const results = req.query.q
    ? allContent.filter(
        (content) =>
          content.title.toLowerCase().includes(req.query.q) ||
          content.id.includes(req.query.q)
      )
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
}
