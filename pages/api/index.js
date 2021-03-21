const list = [
  { id: 1, title: "Node" },
  { id: 2, title: "React" },
  { id: 3, title: "Java" },
];

export default function handler(req, res) {
  res.status(200).json({ lista: list });
}
