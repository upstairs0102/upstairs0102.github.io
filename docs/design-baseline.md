# Prototype baseline

Source branch: prototype/static-photo-homepage, commit 1ff9e35b83bec2a61d1b8a41ef4d39178c52b32b.
Original Site source: bce85d06ec625df49c8b99928071fdafbe3d9992.
All four original files are preserved verbatim in reference/prototype/.

| Token / behavior | Baseline |
| --- | --- |
| Paper / text / muted / rule | #f4f4f2 / #171717 / #6b6b67 / #d9d9d4 |
| Display font | Arial, Helvetica, sans-serif |
| Header | 96px desktop / 78px mobile |
| Hero margin | 5.3% desktop / 6% mobile |
| Hero type | clamp(140px,20.7vw,330px); tracking -.083em; line height .77 |
| Responsive boundaries | 370 / 700 / 1100 / 1700 px |
| Desktop title / portrait scroll factors | +0.16 / −0.04 |
| Mobile title / portrait scroll factors | +0.085 / −0.025 |
| Reduced motion | No parallax; no smooth scrolling |

Preserve photo, blending, layers and geometry. Tailwind preflight and prose must not alter homepage geometry. Inner pages use the same visual language; Chinese articles use comfortable line height without negative tracking.

Compare identical viewports and scroll offsets: 1440×900, 1024×768, 390×844, 360×800. Check the 700px boundary, table/code overflow, keyboard focus and reduced motion. Font rasterization may differ across platforms.

Sample routes use /notebook/<existing slug>/. Preserve slug spellings. Full /docs/ compatibility awaits stage 4 and deployment planning.
