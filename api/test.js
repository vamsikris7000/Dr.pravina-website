export default async function handler(req, res) {
  res.status(200).json({ 
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    functionCount: 5 // Including this test function
  });
}
