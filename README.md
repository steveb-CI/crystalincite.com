# crystalincite.com

Public marketing site for CrystalIncite Labs, served by GitHub Pages at
https://crystalincite.com. Replaces the GoDaddy "Launching Soon" holding page
(FY2027 operating plan §3.4 / claims-register row 5 — that row expires when this ships).

Static site, no build step: `index.html` + `assets/`. Palette and tokens mirror the
product app's `ci-shared-ui.css` so site and app read as one system.

## Claim discipline

This is an outward-facing artifact and is bound by the GTM guardrails
(`CrystalIncite-GTM/COMPANY-FACTS.md` and `CLAIMS-REGISTER.md`). In particular:

- **No pricing anywhere.** The $500/month band is ruled internal-only and not quotable
  externally. Do not add a pricing page without an SB ruling.
- **No patent or IP-protection claims.** The patent drafts are not filed.
- **No "SDK in any language" claims and no shipped-SDK claims.** The SDK copy describes
  what the SDK *is* (specifications, rules, test cases) and design intent only.
- **No connector/feature enumeration.** Copy says "the documents your team already keeps"
  rather than naming integrations that may not be reachable by customers.
- The deterministic-reasoning line matches architecture doctrine exactly: no LLM in the
  reasoning path; an LLM formats the final response only.

Any copy change that adds a factual claim should be checked against those two files first.

## Deployment (GitHub Pages)

Deployed 2026-08-13 from `steveb-CI/crystalincite.com` (temporary home — planned
transfer to `jonathans-crystalincite` later; a repo transfer keeps Pages and the
custom domain intact). Pages source: branch `main`, folder `/`. The `CNAME` file
sets the custom domain.

Remaining go-live steps:

1. GoDaddy DNS for `crystalincite.com` (currently points at GoDaddy forwarding):
   - Four `A` records on `@`: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record: `www` → `steveb-ci.github.io`
   - Remove the GoDaddy "Launching Soon" forwarding/parking entry.
2. After DNS propagates and the certificate issues, enable **Enforce HTTPS**:
   `gh api -X PUT repos/steveb-CI/crystalincite.com/pages -F https_enforced=true`
3. Verify: `curl -sSL https://crystalincite.com | grep -i "audit"`.

## Contact address

All CTAs point at `hello@crystalincite.com` (confirmed live, 2026-08-13).
