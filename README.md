# Steffi's Haarstudio – Probewebsite

One-Page-Designstudie für den Friseursalon „Steffi's Haarstudio" in Flintsbach am Inn.
Referenzprojekt von **DT Webstudio** – keine offizielle Website des Salons.

## Lokal ansehen

```bash
cd steffis-haarstudio
python3 -m http.server 8080
# dann http://localhost:8080 öffnen
```

Oder `index.html` einfach im Browser öffnen.

## Aufbau

- `index.html` – komplette Seite (Hero, Über, Leistungen, Öffnungszeiten, Kontakt)
- `style.css` – Styles (warmes Papier + Pflaume-Akzent, Cormorant + Outfit)
- `script.js` – mobile Navigation, Scroll-Reveal
- `img/` – Platz für echte Salon-Fotos (Galerie nutzt aktuell lizenzfreie Beispielbilder per CDN)

## Noch zu ergänzen (echte Inhalte vom Salon)

- Fotos: echte Bilder von Außenansicht, Innenraum/Stuhl, Detail in `img/` legen und die drei Galerie-`<img>` in `index.html` umbiegen (Quelle z.B. haarstudio-steffi.de oder Instagram @steffis_haare)
- Tatsächliches Leistungs- und Preisangebot
- Ggf. Online-Terminbuchung verlinken
