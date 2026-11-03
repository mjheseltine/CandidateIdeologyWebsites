# Candidate Campaign Website — Democratic and Republican profiles

Static GitHub Pages experiment site. No build step or backend required. Upload the **contents** of this directory to the root of a separate GitHub repository.

## Preview URLs

- `?party=dem&condition=policy`
- `?party=dem&condition=partisan`
- `?party=dem&condition=general`
- `?party=rep&condition=policy`
- `?party=rep&condition=partisan`
- `?party=rep&condition=general`

Missing parameters default to `dem` and `policy` **for local previews only**. For the experiment, Qualtrics should explicitly supply both.

## Experiment design

Both parties use the **same 32-post stimulus bank** as the companion social-media repository (`data/posts.js`), tagged with `party` and `type`. `assets/feed-generator.js` filters by both and displays ten posts with fixed, interleaved order:

| Treatment | Policy | Partisan | General |
|---|---:|---:|---:|
| policy | 5 | 2 | 3 |
| partisan | 2 | 5 | 3 |
| general | 2 | 2 | 6 |

`data/website-config.js` holds two candidate identities and six biographies (party x condition). The website bio **and** the updates change by condition. The website and social-media versions use the same post text, but different presentation.

## Qualtrics

Assign one `condition` per respondent and keep it the same for both parties (Option A). Counterbalance `party_order`, then display the first candidate and collect ideology ratings, followed by the second candidate and ratings. Use a separate page for each candidate so the same iframe can be initialized independently. A Qualtrics iframe might use:

```html
<iframe id="candidateWebsiteFrame" title="Candidate campaign website" src="https://YOUR-USERNAME.github.io/YOUR-REPO/?party=${e://Field/party}&amp;condition=${e://Field/condition}&amp;parentOrigin=https%3A%2F%2FYOUR-QUALTRICS-DOMAIN" width="100%" height="850" style="border:0" loading="eager"></iframe>
```

Replace `YOUR-USERNAME`, `YOUR-REPO`, and `YOUR-QUALTRICS-DOMAIN`. `parentOrigin` must be the actual origin of the Qualtrics parent page, URL-encoded. `qualtrics-example.js` is **example code for the Qualtrics question editor**, not a script loaded by the website. Declare Embedded Data fields in Survey Flow before collecting responses. In particular, avoid overwriting first-candidate event logs with second-candidate logs: use distinct fields or persist an array keyed by party.

## Logging

The app emits `CANDIDATE_EXPERIMENT_EVENT` with `platform`, `party`, `condition`, `postId`, and `postType` when relevant. It supports an origin-checked `CANDIDATE_EXPERIMENT_REQUEST_SUMMARY` message from the parent iframe. If `parentOrigin` is not provided, it will not send cross-frame messages; the website still works as a standalone preview.

## Important research notes

- Draft stimuli and biography language are **not validated** for equivalence in ideological strength, length, or tone.
- Republican avatar is an **explicit placeholder**, not a realistic candidate portrait. Replace `images/republican_avatar_placeholder.svg` before fielding.
- Buttons for donating and volunteering are simulated and collect no information.
- Fixed selection is intentional for initial experimental control; update the bank and templates deliberately and version the resulting stimuli.
- The two candidate websites are *separate views* within this one repository. Respondents can see both by changing the URL parameter through Qualtrics.
