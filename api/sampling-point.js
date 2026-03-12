export default async function handler(req, res) {
  const { latitude, longitude, radius, skip, limit } = req.query

  const url = `https://environment.data.gov.uk/water-quality/sampling-point?` +
    `latitude=${latitude}&longitude=${longitude}&radius=${radius}` +
    `&skip=${skip || 0}&limit=${limit || 100}`

  const response = await fetch(url, {
    headers: {
      'accept': 'application/ld+json',
      'API-Version': '1'
    }
  })

  const data = await response.json()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(200).json(data)
}