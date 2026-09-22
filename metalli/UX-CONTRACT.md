# Landing Page UX Contract

This contract defines durable behavior for public landing pages and brand sites. Visual intent and token values belong in [`DESIGN.md`](./DESIGN.md). For authenticated product, admin, dashboard, CRUD, or payment flows, create a route-specific product UX contract instead of stretching this marketing contract beyond its register.

## Product context

At project start, replace the bracketed fields and cite maintained sources:

- **Audience:** compradores, produtores, indústrias, construtoras e profissionais avaliando fabricação metálica compatível com o portfólio confirmado.
- **Primary job:** entender capacidades e iniciar uma conversa de orçamento pelo WhatsApp.
- **Business outcome:** gerar contatos comerciais qualificados sem promessas, urgência ou provas fictícias.
- **Target market(s):** Lages, Santa Catarina; nenhuma área de atendimento adicional é afirmada.
- **Active locales:** `pt-BR`.
- **Content ownership:** a Metalli Steel aprova portfólio, imagens, dados legais e copy antes de publicação.
- **Timezone/calendar policy:** não aplicável; a página não agenda nem exibe datas operacionais.
- **Accessibility target:** WCAG 2.2 AA
- **Performance target:** project-owned budgets; establish LCP, CLS, INP, page-weight, and third-party-script limits before implementation

If a high-risk area—money, privacy, consent, legal terms, permissions, irreversible action, or regulated claims—lacks an authoritative source, stop and escalate. Do not fill the gap with a template default.

## Source and decision ledger

| Scope | Authoritative source | Owner | Reviewed | UI consequence |
|---|---|---|---|---|
| Offer and primary CTA | Brief fornecido nesta tarefa | Solicitante / Metalli Steel | 22/09/2026 | Hero, navegação e CTAs de WhatsApp |
| Claims and proof | Brief + Instagram oficial `@metalli.steel` | Metalli Steel | 22/09/2026 | Somente serviços e imagens verificados; sem métricas ou depoimentos |
| Brand and media rights | Logo fornecida + publicações oficiais | Metalli Steel | 22/09/2026 | Paleta monocromática, acento térmico e fotografia real |
| Lead data and retention | Não aplicável — handoff externo para WhatsApp | Metalli Steel / WhatsApp | 22/09/2026 | Nenhum formulário ou armazenamento de dados na página |
| Analytics and consent | Não fornecido | Pendente do proprietário | 22/09/2026 | Nenhum script de analytics ou banner implementado |
| Legal or regulated copy | CNPJ e endereço informados no brief | Metalli Steel | 22/09/2026 | Apenas identificação factual no rodapé e localização |
| Locale and translation | Brief em português | Solicitante | 22/09/2026 | Interface e metadados em `pt-BR` |

Implementation evidence may clarify how the site currently behaves, but it cannot overrule these sources. Record conflicts rather than silently choosing one.

## Visual contract

- **Design source:** [`DESIGN.md`](./DESIGN.md), customized for the active project.
- **Token model:** for new projects, `DESIGN.md → semantic runtime variables → shared primitives`; for established projects, runtime tokens stay canonical and `DESIGN.md` mirrors accepted values.
- **No duplication:** this file owns behavior, state, navigation, feedback, accessibility, resilience, and verification—not palette or style rationale.
- **Drift policy:** update documentation and runtime implementation together for approved durable changes. A one-off campaign section does not redefine the system.

## Information and conversion architecture

- The page has one primary action. Secondary actions may support evaluation but must not create competing conversion paths.
- The hero identifies the offering, intended audience, primary value, and next action without relying on animation or imagery alone.
- Section order follows the visitor's decision sequence, not a fixed template. Each section answers one clear question.
- Repeat the primary CTA only at genuine decision points. The label remains identical unless the outcome genuinely changes.
- Pricing, commitments, limitations, and qualification criteria are visible before the visitor commits. Do not use disguised ads, forced continuity, fake urgency, preselected paid options, or misleading button hierarchy.
- Proof is traceable to an approved source. Missing proof remains visibly pending and is never generated as fact.

## Canonical interaction map

Resolve each applicable owner before implementation. Use shared primitives when the behavior recurs.

| Capability | Canonical owner | Allowed variant | Required verification |
|---|---|---|---|
| Primary CTA | shared Button/Link | navigation / form submit / external handoff | label, destination, analytics, keyboard |
| Header navigation | shared site Header | static / sticky / mobile disclosure | focus order, anchor offset, scroll, Escape |
| Form | shared Form + Field | lead / contact / newsletter | validation, failure, duplicate submit, recovery |
| Select/date control | maintained accessible primitive | native only when platform UI is accepted | open state, keyboard, locale, zoom |
| Dialog | maintained Dialog | modal / consent-specific | focus, inert background, Escape, restoration |
| Status feedback | inline Status + shared Toast | success / info / warning / error | live region, deduplication, persistence |
| Media | shared responsive Media | image / video / embed | dimensions, fallback, alt/captions, loading |
| Consent | approved consent manager | region/policy-specific | default state, revocation, script gating |

“None yet” is not an owner. If a behavior will recur and the project has no canonical primitive, create one shared primitive and record its location.

## Interaction states

| Element | Default | Hover/pointer | Focus/keyboard | Busy | Disabled | Error/recovery |
|---|---|---|---|---|---|---|
| Button/link | clear label and destination/action | deliberate visual change and pointer cursor | visible focus; Enter/Space per native semantics | stable dimensions; progress announced | no handler; reason available if not obvious | inline or destination-level recovery |
| Text field | persistent label, hint when useful | border/surface cue | label association and visible focus | preserved value | non-interactive and visually distinct | text error, `aria-invalid`, described hint |
| Search/filter | clear control when non-empty | same as input | IME-safe; Escape only if documented | stale work cancelled | reason when unavailable | preserve query; retry without re-entry |
| Disclosure/menu | state visible | target remains discoverable | native key behavior; Escape closes | n/a | no activation | focus returns to trigger |
| Media | reserved geometry and fallback | no hidden essential action | controls reachable and named | placeholder matches footprint | n/a | meaningful fallback, not broken layout |

Use native semantic elements. A clickable `div` is not an acceptable shortcut. Hover never carries unique content or the only action.

## Navigation and route behavior

- Every route has a unique, localized document title and meaningful meta description. Canonical and social metadata reflect the real route.
- Internal navigation uses links and preserves expected browser behavior, including open-in-new-tab. Actions use buttons.
- Same-page anchors update the URL when useful, move focus when necessary, and respect sticky-header offsets via `scroll-margin` or an equivalent canonical rule.
- Back/forward restores route, relevant query state, and scroll position where the platform supports it.
- External links are labeled by destination or context. New tabs are rare, intentional, and communicated when surprising.
- A mobile menu uses an accessible disclosure or dialog pattern; opening it manages focus and scroll without layout jump, and closing restores focus.
- 404 and route errors preserve site navigation, explain what happened, and offer a useful next step. Authorization-sensitive routes never expose restricted details through fallback copy.
- Sticky or fixed elements must not cover focused elements, in-page targets, cookie controls, or the final CTA at 200% zoom.

## Form and lead-flow ledger

Complete a row for every form or external conversion handoff.

| Operation | Trigger | Pending | Success | Failure recovery | Focus outcome | Analytics event | Source |
|---|---|---|---|---|---|---|---|
| Primary CTA navigation | click/activation | immediate visual feedback | correct destination/section | remain on page with useful fallback | destination heading or native navigation | [event] | [brief] |
| Lead/contact submit | explicit submit | lock duplicate submit; stable button | durable confirmation + next step | preserve values; map field/global errors; retry | first invalid field or confirmation heading | [event] | [data contract] |
| Newsletter submit | explicit submit | same as above | confirm subscription state honestly | preserve email; actionable error | status/field | [event] | [provider contract] |
| Scheduler/checkout handoff | explicit CTA | loading only if needed | verified external/internal destination | explain failed handoff and allow retry | destination or error | [event] | [integration contract] |

### Validation

- Add `noValidate` and own the validation experience. Keep semantic types, autocomplete, input modes, and constraints that help keyboards, autofill, and parsing.
- Validate on submit first. After a failed submit, revalidate corrected fields at a helpful time; do not punish typing with premature errors.
- Associate every error with its field, preserve entered data, and focus/scroll to the first invalid field without hiding it behind sticky UI.
- Map known server errors to fields; use a form-level error for unknown failures. Explain how to recover.
- Do not ask for data that is not needed for the stated purpose. Sensitive fields are masked by default, excluded from URLs, analytics, logs, and toast text, and governed by an approved data policy.
- Prevent duplicate submission. Mutation ownership lives in one form/controller, not both the button and page.

### Success and failure

- Success is a persistent inline confirmation or destination state when the visitor needs next steps. A transient toast may supplement it but never replace it.
- State what was received, what happens next, expected timing only when verified, and a safe fallback contact path when approved.
- Never claim “sent,” “booked,” “paid,” or “subscribed” until the authoritative service confirms it.
- Preserve user input on recoverable failure. Do not clear the form until success is authoritative.

## Async, network, and third parties

- Default to pessimistic confirmation for lead submission, booking, payment, and any external side effect. Optimistic UI is allowed only when reversal and reconciliation are real.
- Cancel superseded fetches or ignore stale responses. Search defaults to a 300 ms debounce, never fires during IME composition, and clears immediately.
- Define timeouts and error states for every third-party embed or handoff. The core proposition and contact path remain usable when maps, video, chat, analytics, or schedulers fail.
- Load nonessential third-party scripts after consent and/or user intent as policy requires. They must not block the primary content or action.
- Use retry only for operations safe to repeat. Idempotency requirements come from the integration contract, not frontend hope.
- Offline behavior: static content remains readable when cached; mutations do not pretend to succeed. Explain connectivity loss and preserve input for retry where safe.

## Overlays, feedback, and layers

- Never use browser `alert`, `confirm`, or `prompt` for product UI.
- Dialogs have an accessible name and description, initial focus, contained focus, inert background, Escape behavior, and focus restoration. Serious confirmations initially focus the least destructive action.
- Marketing modals do not interrupt first paint, obscure essential content, or reopen after dismissal without a documented reason. Avoid exit-intent traps.
- Toasts use a shared placement, semantic tone, deduplication, and accessible live region. Critical information stays inline.
- Consent controls remain accessible and reversible. Rejecting nonessential tracking must be as understandable and operable as accepting it, subject to the approved policy.
- Maintain one layer scale. Document any project-specific order; never solve conflicts with arbitrary extreme `z-index` values.

## Responsive, content, and media resilience

- DOM order follows reading and focus order. CSS reordering cannot create a contradictory keyboard experience.
- No horizontal page scroll at supported widths or 200% zoom, except an intentionally scrollable data/code region with clear ownership.
- Content survives long names, translated labels, large text, missing media, slow media, and realistic validation messages without clipping or overlap.
- Reserve image/video/embed dimensions. Keep layout stable during font loading, consent changes, status feedback, and sticky-header transitions.
- Touch targets are comfortably operable and do not depend on hover. Gestures have a non-gesture alternative.
- Global scrollbars stay visible, themed consistently, and usable in forced-colors mode. Ordinary landing pages keep document scrolling rather than nested vertical scroll regions.

## Locale and content policy

- All visible copy, metadata, validation, accessible names, dates, times, numbers, currency, and third-party widgets follow the active locale.
- Locale does not prove market. Record market-specific address, consent, payment, identity, and legal behavior from authoritative evidence.
- Keep translations outside component logic and allow for expansion. Never truncate legal, error, or primary-action text merely to preserve a composition.
- IME composition safety applies to Enter submission, search, keyboard shortcuts, validation, autosave, and character counters.
- Every public release with translated copy receives native-language review appropriate to the domain; machine translation alone is not final approval.

## Accessibility contract

- Target WCAG 2.2 AA. Prefer native semantics, a logical heading outline, landmarks, skip navigation, visible focus, descriptive links, and accessible status announcements.
- The page and all tasks work by keyboard alone. Focus is never trapped except in a true modal and is never obscured by sticky UI.
- Text and non-text contrast meet the target in default, hover, focus, disabled, image-overlay, and error states.
- Images follow the informative/decorative alt policy. Video with speech has captions; audio has an equivalent; autoplay with sound is prohibited.
- Respect `prefers-reduced-motion`, high contrast/forced colors, text spacing, browser zoom, and user font scaling.
- Icon-only controls have accessible names. Tooltips are not the sole carrier of required information.
- Authentication, if introduced, must support paste and password managers and requires a product-specific contract.

## Analytics and privacy

- Track only approved events with stable, semantic names. The tracking plan defines purpose, trigger, properties, consent category, owner, and retention.
- Do not place free-form field values, email addresses, phone numbers, secrets, or full URLs containing sensitive parameters in analytics.
- A click event does not equal a successful conversion. Distinguish intent, submit attempt, authoritative success, and failure.
- Analytics failure never blocks navigation, form completion, or confirmation.
- Consent and privacy behavior comes from the approved policy. This contract records frontend consequences but does not invent policy.

## Verification gate

Do not mark a page complete from code inspection alone. Record actual results for:

1. **Static quality:** formatter, lint, typecheck, unit/component tests, production build, and the Frontend Design Premium project audit when applicable.
2. **Rendered viewports:** approximately 320, 375, 768, 1024, and 1440 CSS pixels, plus an awkward intermediate width and a short viewport.
3. **Interaction:** primary CTA, all navigation, menu/disclosures, every form's success and failure, validation, duplicate submission, third-party failure, and back/forward behavior.
4. **Accessibility:** keyboard-only flow, focus visibility/order/restoration, landmarks/headings, accessible names, live regions, contrast, 200% zoom, forced colors where supported, and reduced motion.
5. **Resilience:** slow network, missing/failed media, long/translated content, blocked third-party scripts, offline/read-stale behavior where supported, and stale-request prevention.
6. **Performance:** production build in a realistic browser; Core Web Vitals and project budgets on representative mobile and desktop conditions. Verify the hero/LCP resource and cumulative layout shift directly.
7. **Content integrity:** all claims, testimonials, logos, credentials, prices, availability, and legal copy traced to approved sources; image/font licenses recorded.
8. **Cross-browser/device:** current project support matrix, including at least one touch device or faithful touch test.

### Required evidence record

| Check | Command/device/viewport | Result | Evidence or issue |
|---|---|---|---|
| Design context lint | Inspeção do `DESIGN.md`; linter dedicado indisponível | Revisado | Estrutura e mapeamento de tokens verificados manualmente |
| Project audit | `audit_project.py --mode strict` | Pass | 0 findings, 0 warnings |
| Build and tests | `pnpm run lint`, `pnpm run test`, `pnpm run build` | Pass | ESLint limpo; Vitest sem casos e exit 0; build Vite concluído |
| Mobile render | Edge/Chromium 390×844, 360×800 e 430×900 | Pass | `qa/mobile-390.png`; sem overflow horizontal |
| Desktop render | Edge/Chromium 1440×900, 1280×800 e 1024×768 | Pass | `qa/desktop-1440.png`; sem overflow horizontal |
| Keyboard/zoom/reduced motion | Foco por teclado + captura reduced motion | Parcial | Foco visível e semântica de botões verificados; zoom 200% não automatizado |
| Form success/failure | Não aplicável | N/A | Conversão é link externo para WhatsApp |
| Performance budgets | Build e inspeção de mídia | Parcial | Bundle JS 71,93 kB gzip; CWV de rede/dispositivo real não medidos |
| Claims and rights review | `DESIGN.md` e fontes públicas | Parcial | Conteúdo verificado; autorização final de mídia cabe à Metalli Steel |

Any failed or unverified row remains an explicit release risk. Do not infer a pass from absence of an error.
