// For now, return empty data since we don't have a backend database
export default async function handler(req, res) {
  try {
    // Return empty data for production
    res.status(200).json([]);
  } catch (error) {
    console.error('Appointments API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
