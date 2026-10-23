# Harbour concept (working name)

A clickable concept for the commercial layer on top of the open [Lake](https://github.com/thelakeprotocol/lake) protocol. A person's house holds their records (health, money, home) and puts them to work without letting them go: offers from firms worked out inside the house, paid research, pledges with people like them, and their own AI agent keeping watch. We sell a hosted house with no setup, data connectors, real payouts, and one console for the firms and researchers who come to people's houses, with a marketplace of modules others build.

Plain HTML, CSS and a little JavaScript. No build step, no runtime, no dependencies.

```bash
open index.html            # or: python3 -m http.server 8000, then http://localhost:8000
```

| | |
|---|---|
| `index.html` | Overview of every screen; click one to use it |
| `app/` | The app for people (phone): welcome → connect → rules → home → offers → a request → a risky request → together → money → your data |
| `org/` | The console for organisations (desktop): home (credentials, modules, activity) and the marketplace of modules |
| `console/` | Its Studies module: studies → new study → results |
| `firms/` | Its Offers module: demand → pricing rule → accepted |
| `assets/` | Shared styles, the app's bottom navigation and the console's top bar |

## Open decisions marked in the screens

- The name ("Harbour" is a placeholder).
- Our fee: `[fee]%` on the Money screen.
- The results page's confidence interval: `[confidence interval from the estimator]`.
- Region: drafted for the UK (£, NHS App, GP records).

Sample data, rates, counts and organisations are invented, except the Results funnel (1,000 asked, 801 countered, 737 answered, £5 group price), which comes from a real 1,000-house run of the open Lake.
