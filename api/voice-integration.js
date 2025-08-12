export default async function handler(req, res) {
  const { path } = req.query;
  
  try {
    // Handle root path - return service info
    if (!path || path === '/') {
      res.status(200).json({
        message: "Voice Integration API",
        version: "1.0.0",
        endpoints: [
          "/tokens/generate?agent_name=agent1",
          "/agents/all"
        ]
      });
      return;
    }
    
    // Handle token generation
    if (path === 'tokens/generate') {
      const agentName = req.query.agent_name || 'agent1';
      const apiKey = 'xpectrum-ai@123';
      const backendUrl = 'https://d1fs86umxjjz67.cloudfront.net';
      
      console.log(`Generating token for agent: ${agentName}`);
      
      const response = await fetch(`${backendUrl}/tokens/generate?agent_name=${agentName}`, {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      console.log(`Token generation response: ${response.status}`, data);
      
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json(data);
      }
      return;
    }
    
    // Handle agents endpoint
    if (path === 'agents/all') {
      const apiKey = 'xpectrum-ai@123';
      const backendUrl = 'https://d1fs86umxjjz67.cloudfront.net';
      
      const response = await fetch(`${backendUrl}/agents/all`, {
        headers: {
          'x-api-key': apiKey,
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json(data);
      }
      return;
    }
    
    // Default response for unknown paths
    res.status(404).json({ error: 'Not found', path });
  } catch (error) {
    console.error('Voice integration error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
