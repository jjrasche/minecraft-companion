# Minecraft Explorer's Companion

Offline-first PWA for Minecraft exploration — ore depths, resource values, recipes, progression tracking, loadout kits, and a world map with markers.

## Stack

- React + TypeScript + Vite
- CSS Modules + CSS custom properties (dark theme, no Tailwind)
- Auxi for behavioral analytics
- Supabase for auxi event capture only — no app data in Supabase
- Vitest + Testing Library
- PWA via vite-plugin-pwa

## Commands

```bash
npm run dev        # Start dev server
npm test           # Run tests
npm run test:watch # Watch mode
npm run build      # Typecheck + production build
npm run lint       # ESLint
```

## Architecture

Three-tier component hierarchy: Orchestrator → Concept → Leaf.
All game data in `src/data/` as typed constants extracted from the original HTML.
Auxi instrumentation: AuxiFlow/Page/Component/Element on every interactive element.
Anonymous Supabase auth before AuxiProvider mounts (auxi drops events without auth).

## Key Constraints

- Offline-first: no network after first load
- CSS Modules, not Tailwind
- No auth/accounts/server-side — Supabase is auxi-only
- Explorer/miner playstyle: Jim=explorer, family=homesteaders who won't kill animals

## References

- `~/.claude/references/coding-standards.md` — read before writing code
- `~/.claude/plans/greedy-riding-toucan.md` — 8-phase implementation plan
- `minecraft-companion.html` — legacy monolithic app (source of truth for data/styles)
