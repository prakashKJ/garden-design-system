# Garden Design System

Component library and design token reference for Garden's UI.

---

## Quick Access (no setup needed)

Browse the latest Storybook on Chromatic:
**https://www.chromatic.com/library?appId=69dcc0f1bdbb1fdfdcd3cf2c**

---

## Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/prakashKJ/garden-design-system.git
cd garden-design-system

# 2. Install dependencies
npm install

# 3. Start Storybook
npm run storybook
```

Opens at **http://localhost:6006/**

---

## What's Inside

### Components

| Component | Path | Variants |
|-----------|------|----------|
| **GardenButton** | `src/components/GardenButton/` | primary, ghost, icon / sm, md, lg / disabled |
| **SearchBar** | `src/components/SearchBar/` | empty, with value |
| **AssetSelect** | `src/components/AssetSelect/` | L1 (BTC), L2 (WBTC) |
| **Stats** | `src/components/Stats/` | with/without info icon |
| **AssetValue** | `src/components/AssetValue/` | active, inactive |
| **TabSwitch** | `src/components/TabSwitch/` | tab selection states |
| **ChainRow** | `src/components/ChainRow/` | row of chain icons |

### Design Tokens

All tokens live in **`src/styles/garden.css`** as CSS custom properties. Components reference these variables — never hardcoded hex values.

| Category | CSS Variable Prefix | Examples |
|----------|-------------------|----------|
| Surfaces | `--color-garden-surface-*` | `card` (70%), `nested` (50%), `subtle` (30%) |
| Brand | `--color-garden-brand*` | `brand`, `brand-hover`, `brand-purple`, `brand-secondary` |
| Text | `--color-garden-text-*` | `text-primary`, `text-secondary` |
| Status | `--color-garden-*` | `positive`, `negative` |
| Spacing | `--spacing-garden-*` | 1 (4px) through 20 (80px) |
| Radius | `--radius-garden-*` | `sm` (6px), `inner` (12px), `outer` (16px), `full` (9999px) |
| Type sizes | `--text-*` | `display-lg` (56px) down to `caption` (11px) |
| Blur | `--backdrop-blur-garden` | 150px |

Dark mode overrides are in the same file under `[data-theme="dark"]`.

### Storybook Documentation Pages

- **Tokens / Colors** — All semantic tokens with light & dark swatches
- **Tokens / Typography** — Type scale with live previews
- **Tokens / Spacing & Radii** — Visual spacing scale + radius demos
- **Guide / Cardinal Rules** — The 8 rules every contributor must follow

---

## Using Components in Your Project

```tsx
// 1. Copy src/styles/garden.css into your project and import it
import './styles/garden.css';

// 2. Import a component
import { GardenButton } from './components/GardenButton/GardenButton';

// 3. Use it
<GardenButton variant="primary" size="lg">Swap</GardenButton>
```

---

## Cardinal Rules (short version)

1. **No borders** — use opacity layers + blur instead
2. **No solid white** on containers — use `surface-card` / `surface-nested` / `surface-subtle`
3. **No hardcoded hex** — always use CSS variable tokens
4. **No box-shadow** — depth = opacity layering + blur
5. **`border-none`** on every container and interactive element
6. **Font weights: 430 / 570** — never 400 or 500
7. **Ask before creating new components** — if it's not in this Storybook, flag it with `// TODO: needs Garden DS component`

---

## Deploy Updates to Chromatic

```bash
npx chromatic --project-token=chpt_7688cc9ee23943c
```

---

## Figma Source

```
File: GARDEN_Product
Key:  0VNUXR0fhlJ3mA6OlndZNq
```
