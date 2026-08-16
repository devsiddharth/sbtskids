# 📸 Adding Real Photos

This folder is where your real school photos go. Drop your images into the right
subfolder below, then update the paths in `src/data/*.js` (look for the
`// e.g. '/images/...'` comments).

| Subfolder            | Used for                              |
| -------------------- | ------------------------------------- |
| `campus/`            | Hero photo, school building, About    |
| `classrooms/`        | Smart classrooms, library, art corner |
| `teachers/`          | Teacher circular photos               |
| `gallery/`           | Gallery carousel images               |
| `events/`            | Annual day, sports day photos         |
| `activities/`        | Daily activity photos                 |
| `play-area/`         | Playground photos                     |
| `cctv/`              | CCTV / control room photos            |

## Recommended sizes

- **Hero / large banners:** 1200 × 900px (4:3)
- **Gallery:** 800 × 600px (4:3)
- **Teacher photos:** 400 × 400px (square, faces centered)
- Keep files under ~300 KB — Vite serves them fast.

## How it works

Every image in the site goes through the `SmartImage` component. While a path is
empty (or the file is missing), it shows a pretty colour placeholder with the
photo label — so the site looks intentional even before photos arrive. Fill in
the `src` field and the real photo replaces the placeholder automatically.
