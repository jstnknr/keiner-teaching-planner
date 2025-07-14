export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: '1', title: 'Lesson 1', start: '2025-07-15', end: '2025-07-15' },
    ]);
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'Lessons saved!' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}