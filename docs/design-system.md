# Tech Nest — Design System

Studio-grade, precise, dark. The visual language of professional audio hardware —
console desks, metering, machined controls — not a consumer study app.
**Single source of truth: the CSS custom properties in `src/app/globals.css`**
(`:root` block + Tailwind v4 `@theme inline` mapping). Nothing else defines colors.

## Principles

1. **Metering semantics.** Color is never decorative; it borrows the meaning audio
   engineers already know: green = signal present (success, progress, valid),
   amber = warm/nominal (brand, primary actions, in-progress), red = clip
   (errors, fail states), blue = cue (links, information).
2. **Machined, not rounded.** Small radii (4/8/12 px), 1 px hairline borders,
   subtle elevation. No soft blobs, no glassmorphism.
3. **Dark by default, print in light.** The app is a dark control room; the
   certificate is a physical document and renders as a light page (also for print).
4. **Data wears mono.** Anything that is a value — coefficients, scores, dates,
   codes, meta — is set in JetBrains Mono, small. Prose stays in Inter.

## Tokens

### Color (surfaces)
| Token | Value | Use |
|---|---|---|
| `--tn-bg` | `#0b0e13` | page background |
| `--tn-surface` | `#11151c` | cards, panels |
| `--tn-raised` | `#171c25` | headers inside cards, chips |
| `--tn-overlay` | `#1e242f` | hover states |
| `--tn-line` | `#232a36` | hairline borders |
| `--tn-line-strong` | `#303948` | emphasized borders |

### Color (ink)
| Token | Value | Use |
|---|---|---|
| `--tn-ink` | `#e9edf3` | primary text |
| `--tn-ink-mute` | `#9aa4b2` | body/secondary |
| `--tn-ink-faint` | `#626d7d` | captions, meta |

### Color (signal)
| Token | Value | Meaning |
|---|---|---|
| `--tn-amber` / `-bright` / `-dim` | `#e8b04b` | brand, CTAs, in-progress |
| `--tn-signal` / `-dim` | `#3ddc97` | success, completion, "officiel" |
| `--tn-clip` / `-dim` | `#f06a5d` | errors, fail, locked-by-error |
| `--tn-cue` / `-dim` | `#5aa9f2` | links, info notes |

Each signal color has a `-dim` rgba(≈12 %) for tinted backgrounds; text on a dim
background uses the full-strength color.

### Typography
| Role | Font | Tailwind |
|---|---|---|
| Display / headings | Space Grotesk | `font-display` |
| Body | Inter | default / `font-body` |
| Data & code | JetBrains Mono | `font-mono` |

Loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables.
Scale in practice: h1 30–60 px bold tracking-tight · h2 20–30 px semibold ·
body 14–16/1.65 · meta 11–12 mono.

### Spacing & radii
Tailwind default spacing scale. Containers: `max-w-6xl` (landing/catalog),
`max-w-4xl` (course detail), `max-w-3xl` (lesson/exam — reading measure).
Radii: `--tn-r-sm` 4 px (buttons, chips), `--tn-r-md` 8 px (cards), `--tn-r-lg` 12 px (hero panels).

### Motion
`--tn-fast` 120 ms (hover), `--tn-med` 220 ms (panels), easing `--tn-ease`
cubic-bezier(.25,.1,.25,1). One signature animation: the `tn-meter` VU-bar
keyframes on the landing hero. Everything else is color/border transitions only.
No parallax, no scroll-jacking.

## Recurring patterns

- **Épreuve chip**: `font-mono text-amber bg-raised` chip with the code (E3…),
  followed by faint mono meta (`coef. 4 · écrite · 6 h`). Used identically on
  path, course header, certificate.
- **Status ring**: circular step marker — amber ring/`E3` = available, green
  ring/`✓` = done, dim ring/`🔒` = locked.
- **Progress meter**: 1.5 px segmented bar (quiz) or continuous 1 px bar (course),
  green when passed, amber in progress, red segment = wrong answer.
- **Note blocks** in lessons: left-border 2 px + dim background, label uppercase
  mono — `Réflexe examen` (amber), `Attention` (red), `À savoir` (blue).
- **Trust badge**: pill `officiel` (green dim) vs `tiers` (amber dim) on annales.

## Accessibility
- Focus visible: 2 px amber outline (`:focus-visible` global).
- All interactive rows are real links/buttons; quizzes are radio fieldsets.
- Contrast: ink on bg ≈ 14:1; ink-mute on surface ≈ 7:1; amber on bg ≈ 8:1.
- `aria-` roles on progress bars, alerts and status messages.
