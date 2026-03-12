# Geolumen

England's river health, made visible.

Geolumen is an interactive web app that makes water quality data from the [Environment Agency](https://environment.data.gov.uk/water-quality/view/landing) accessible to everyone. Explore over 65,000 sampling points across every river, lake, and estuary in England — with decades of measurements visualised as interactive charts.

## Features

- **Interactive map** — Browse sampling locations with clustered markers powered by Leaflet
- **Time series charts** — View historical measurements for key pollutants like ammonia, phosphates, dissolved oxygen, and more
- **Water quality thresholds** — See how readings compare against official standards at a glance
- **Responsive design** — Works across desktop and mobile

## Tech stack

- React 19, React Router, Vite
- Leaflet + react-leaflet for mapping
- Recharts for data visualisation
- Tailwind CSS v4
- Environment Agency Water Quality API (proxied via Vite dev server)

## Getting started

```bash
npm install
npm run dev
```

The dev server proxies API requests to the Environment Agency's open data API — no keys required.

## Built by

[Laurence Wayne](https://laurence-wayne.com/about) — [hello@laurence-wayne.com](mailto:hello@laurence-wayne.com)

## License

Open-source and free to use. Data provided by the Environment Agency via their open data API.
