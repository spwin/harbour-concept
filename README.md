# Harbour concept (working name)

Confidential. A clickable concept for the commercial layer on top of the open [Lake](https://github.com/thelakeprotocol/lake) protocol: a hosted house with no setup, data connectors, real payouts, and a research console.

Plain HTML, CSS and a little JavaScript. No build step, no runtime, no dependencies.

```bash
open index.html            # or: python3 -m http.server 8000, then http://localhost:8000
```

| | |
|---|---|
| `index.html` | Overview of every screen; click one to use it |
| `app/` | The app for people (phone): welcome → connect → rules → home → request → money → your data |
| `console/` | The console for researchers (desktop): studies → new study → results |
| `assets/` | Shared styles and the app's bottom navigation |

## Open decisions marked in the screens

- The name ("Harbour" is a placeholder).
- Our fee: `[fee]%` on the Money screen.
- The results page's confidence interval: `[confidence interval from the estimator]`.
- Region: drafted for the UK (£, NHS App, GP records).

Sample data is invented, except the Results funnel (1,000 asked, 801 countered, 737 answered, £5 group price), which comes from a real 1,000-house run of the open Lake.
