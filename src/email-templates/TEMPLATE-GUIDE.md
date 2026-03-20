# Purl of Wisdom — Email Template Guide

## Templates

| Template | File | Use Case |
|----------|------|----------|
| **Weekly Newsletter** | `weekly-newsletter.html` | Standard Thursday issue — sections, technique tips, yarn spotlight, community corner |
| **Welcome** | `welcome.html` | Sent immediately on subscribe — onboarding steps + lead magnet download |
| **Promotional** | `promotional.html` | Announcements, special content, sponsor spotlights, product launches |

## Brand Palette (Email-Safe)

| Token | Hex | Usage |
|-------|-----|-------|
| Cream | `#FDF6EC` | Email body background, tip box background |
| Cream Medium | `#F8EFE3` | Nav bar, social proof bar backgrounds |
| Cream Dark | `#F5EBD8` | Footer background, yarn spotlight box, secondary boxes |
| Cream Border | `#F0E4D2` | Borders, dividers, step box outlines |
| Rose | `#C4727F` | Primary CTA buttons, accent text, links, urgency badges |
| Rose Light | `#E8A5AE` | Subtitle text on dark backgrounds |
| Rose Dark | `#A35563` | Button hover state (CSS clients only) |
| Plum | `#4A2040` | Header background, headings, brand name, step numbers |
| Plum Mid | `#5C2D50` | Header gradient end |
| Plum Light | `#6B3A5E` | Footer links, secondary headings, gradient end |
| Sage | `#8BA888` | Sponsor/secondary CTA button, yarn label accent |
| Sage Dark | `#7A9676` | Secondary button hover (CSS clients only) |
| Sage Light | `#B5CFAF` | Supporting accent |
| Text | `#2D2A26` | Body copy |
| Text Muted | `#6B6560` | Dates, captions, secondary text |
| Text Light | `#9B9590` | Legal text, footer fine print |
| White | `#FFFFFF` | Email container background, button text |

### Dark Mode Tokens

| Light | Dark | Element |
|-------|------|---------|
| `#FDF6EC` | `#1a1614` | Email body |
| `#FFFFFF` | `#2D2A26` | Email container |
| `#4A2040` | `#3a2234` | Header |
| `#2D2A26` | `#E8E0D8` | Body text |
| `#4A2040` | `#E8A5AE` | Headings |
| `#F5EBD8` | `#342e2a` | Yarn box, feature boxes |
| `#FDF6EC` | `#3a2234` | Tip box |
| `#F0E4D2` | `#4A4540` | Borders, dividers |

## Typography

- **Headings:** Georgia, 'Times New Roman', serif (web-safe fallback for Playfair Display)
- **Body:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- **Body size:** 16px / 28px line-height
- **Small text:** 13px (dates, captions), 12px (badges), 11px (labels, legal/footer)
- **MSO fallback:** Arial, sans-serif (set via `<!--[if mso]>` style block)

## Reusable Components

### Decorative Divider (triple star)

```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
  <tr>
    <td style="border-top: 1px solid #F0E4D2; font-size: 0; line-height: 0;">&nbsp;</td>
    <td style="width: 60px; text-align: center; font-size: 13px; color: #C4727F; padding: 0 12px; white-space: nowrap;" valign="middle">&#10022; &#10022; &#10022;</td>
    <td style="border-top: 1px solid #F0E4D2; font-size: 0; line-height: 0;">&nbsp;</td>
  </tr>
</table>
```

### Simple Divider

```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
  <tr>
    <td class="divider-line" style="border-top: 1px solid #F0E4D2; font-size: 0; line-height: 0;">&nbsp;</td>
  </tr>
</table>
```

### Primary CTA Button

```html
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
  href="{{URL}}" style="height:50px;v-text-anchor:middle;width:260px;" arcsize="12%" strokeweight="0" fillcolor="#C4727F">
  <w:anchorlock/>
  <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;">Button Text</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<a href="{{URL}}" target="_blank" class="cta-link"
   style="display: inline-block; padding: 15px 40px; background-color: #C4727F; color: #FFFFFF;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
   font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 6px; transition: background-color 0.2s;">
  Button Text
</a>
<!--<![endif]-->
```

### Secondary CTA Button (Sage)

```html
<a href="{{URL}}" target="_blank" class="secondary-cta"
   style="display: inline-block; padding: 12px 32px; background-color: #8BA888; color: #FFFFFF;
   font-size: 15px; font-weight: 600; text-decoration: none; border-radius: 6px; transition: background-color 0.2s;">
  Button Text
</a>
```

### Tip Box (Technique of the Week)

```html
<td class="tip-box" style="background-color: #FDF6EC; border-left: 4px solid #C4727F; border-radius: 0 8px 8px 0; padding: 28px;">
  <p style="margin: 0 0 10px; font-family: Georgia, serif; font-size: 11px; font-weight: 700; color: #C4727F; text-transform: uppercase; letter-spacing: 0.15em;">
    &#9997;&#65039; Technique of the Week
  </p>
  <h4 style="margin: 0 0 12px; font-family: Georgia, serif; font-size: 20px; line-height: 26px; font-weight: 700; color: #4A2040;">
    Title Here
  </h4>
  <p class="content-text" style="margin: 0; font-size: 15px; line-height: 26px; color: #2D2A26;">
    Content here.
  </p>
</td>
```

### Yarn Spotlight Box

```html
<td class="yarn-box" style="background-color: #F5EBD8; border-radius: 8px; padding: 28px;">
  <p style="margin: 0 0 10px; font-family: Georgia, serif; font-size: 11px; font-weight: 700; color: #8BA888; text-transform: uppercase; letter-spacing: 0.15em;">
    &#129526; Yarn We Love
  </p>
  <h4 style="margin: 0 0 6px; font-family: Georgia, serif; font-size: 20px; line-height: 26px; font-weight: 700; color: #4A2040;">
    Yarn Name
  </h4>
  <p style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #8BA888;">
    Colorway &middot; Weight &middot; Fiber
  </p>
  <p class="content-text" style="margin: 0; font-size: 15px; line-height: 26px; color: #2D2A26;">
    Description here.
  </p>
</td>
```

### Community Corner

```html
<td class="community-box" style="background-color: #FFFFFF; border: 1px solid #F0E4D2; border-radius: 8px; padding: 28px; text-align: center;">
  <p style="margin: 0 0 8px; font-size: 22px;">&#128172;</p>
  <p style="margin: 0 0 6px; font-family: Georgia, serif; font-size: 11px; font-weight: 700; color: #C4727F; text-transform: uppercase; letter-spacing: 0.15em;">
    Community Corner
  </p>
  <h4 style="margin: 0 0 12px; font-family: Georgia, serif; font-size: 19px; line-height: 26px; font-weight: 700; color: #4A2040;">
    Question here?
  </h4>
  <p class="content-text" style="margin: 0; font-size: 15px; line-height: 24px; color: #6B6560;">
    Hit reply and tell me — I feature reader answers in upcoming issues!
  </p>
</td>
```

### Coming Next Week Teaser

```html
<td class="teaser-box" style="background: linear-gradient(135deg, #4A2040 0%, #6B3A5E 100%); border-radius: 8px; padding: 24px 28px; text-align: center;">
  <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; color: #E8A5AE; text-transform: uppercase; letter-spacing: 0.15em;">
    Coming Next Week
  </p>
  <p style="margin: 0; font-family: Georgia, serif; font-size: 17px; line-height: 24px; color: #FFFFFF;">
    Teaser text here.
  </p>
</td>
```

### Pull Quote

```html
<td class="quote-text" style="border-left: 3px solid #C4727F; padding: 4px 0 4px 24px;">
  <p style="margin: 0; font-family: Georgia, serif; font-size: 19px; line-height: 30px; font-style: italic; color: #4A2040;">
    Quote text here.
  </p>
</td>
```

### Testimonial Box

```html
<td class="testimonial-box" style="background-color: #FDF6EC; border: 1px solid #F0E4D2; border-radius: 8px; padding: 24px; text-align: center;">
  <p style="margin: 0 0 4px; font-size: 24px;">&#10024;</p>
  <p class="content-text" style="margin: 0 0 12px; font-family: Georgia, serif; font-size: 17px; line-height: 28px; font-style: italic; color: #4A2040;">
    "Testimonial text here."
  </p>
  <p style="margin: 0; font-size: 13px; font-weight: 600; color: #6B3A5E;">
    — Author Name
  </p>
</td>
```

### Numbered Step

```html
<td class="step-box" style="border: 1px solid #F0E4D2; border-radius: 8px; padding: 18px 20px;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td width="36" valign="top" style="padding-right: 14px;">
        <div class="step-number" style="width: 28px; height: 28px; background-color: #4A2040; border-radius: 14px; text-align: center; line-height: 28px; font-size: 14px; font-weight: 700; color: #FFFFFF;">1</div>
      </td>
      <td valign="top" class="content-text" style="font-size: 15px; line-height: 24px; color: #2D2A26;">
        <strong style="color: #4A2040;">Step title</strong> — step description.
      </td>
    </tr>
  </table>
</td>
```

### Badge / Pill

```html
<span class="badge" style="display: inline-block; background-color: #FDF6EC; border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 600; color: #6B3A5E; letter-spacing: 0.04em;">
  Label text
</span>
```

### Sign-off Block

```html
<p class="content-text" style="margin: 0 0 4px; font-size: 16px; line-height: 28px; color: #2D2A26;">Happy knitting,</p>
<p style="margin: 0; font-family: Georgia, serif; font-size: 18px; font-weight: 700; color: #4A2040;">Inna</p>
<p class="muted-text" style="margin: 4px 0 0; font-size: 13px; color: #6B6560; font-style: italic;">The Purl of Wisdom Team</p>
```

## Template Variables

All templates use `{{VARIABLE}}` placeholders. Replace before sending.

### Common (all templates)

| Variable | Description |
|----------|-------------|
| `{{PREVIEW_TEXT}}` | Hidden preview text shown in inbox |
| `{{WEBSITE_URL}}` | Link to purlofwisdom.com |
| `{{INSTAGRAM_URL}}` | Instagram profile link |
| `{{RAVELRY_URL}}` | Ravelry group link |
| `{{REFERRAL_URL}}` | Beehiiv referral link |
| `{{PREFERENCES_URL}}` | Email preferences page |
| `{{UNSUBSCRIBE_URL}}` | One-click unsubscribe |

### Weekly Newsletter

| Variable | Description |
|----------|-------------|
| `{{ISSUE_NUMBER}}` | e.g. "23" |
| `{{ISSUE_DATE}}` | e.g. "March 20, 2026" |
| `{{READING_TIME}}` | Estimated reading time in minutes, e.g. "4" |
| `{{ISSUE_TITLE}}` | Main headline |
| `{{INTRO_TEXT}}` | Opening paragraph |
| `{{SECTION_TITLE}}` | Content section heading (repeat block) |
| `{{SECTION_CONTENT}}` | Content section body (repeat block) |
| `{{TIP_TITLE}}` | Technique of the Week title |
| `{{TIP_CONTENT}}` | Technique description |
| `{{YARN_NAME}}` | Featured yarn name |
| `{{YARN_COLORWAY}}` | Featured colorway |
| `{{YARN_WEIGHT}}` | Yarn weight (e.g. "DK", "Worsted") |
| `{{YARN_FIBER}}` | Fiber content (e.g. "100% Merino") |
| `{{YARN_DESCRIPTION}}` | Yarn review text |
| `{{CTA_URL}}` / `{{CTA_TEXT}}` | Call-to-action button |
| `{{COMMUNITY_QUESTION}}` | Weekly reader engagement question |
| `{{NEXT_WEEK_TEASER}}` | Preview of next week's content |
| `{{HERO_IMAGE_URL}}` / `{{HERO_IMAGE_ALT}}` | Optional hero image (uncomment block) |
| `{{SECTION_IMAGE_*}}` | Optional section images (uncomment block) |
| `{{QUOTE_TEXT}}` | Optional pull quote (uncomment block) |
| `{{READER_RESPONSE}}` / `{{READER_NAME}}` | Optional featured reader response |

### Welcome

| Variable | Description |
|----------|-------------|
| `{{LEAD_MAGNET_URL}}` | Download link for The Everyday Market Bag pattern |
| `{{SUBSCRIBER_COUNT}}` | Current subscriber count for social proof (e.g. "2,500") |

### Promotional

| Variable | Description |
|----------|-------------|
| `{{EMAIL_TITLE}}` | Browser tab title |
| `{{PROMO_LABEL}}` | Small uppercase label (e.g. "New Pattern", "Special Announcement") |
| `{{HEADLINE}}` | Main promotional headline |
| `{{SUBHEADLINE}}` | Supporting description |
| `{{BODY_CONTENT}}` | HTML body content |
| `{{CTA_URL}}` / `{{CTA_TEXT}}` | Primary action button |
| `{{URGENCY_TEXT}}` | Optional urgency badge (uncomment block, e.g. "Ends Sunday") |
| `{{PROMO_IMAGE_URL}}` / `{{PROMO_IMAGE_ALT}}` | Optional hero image (uncomment block) |
| `{{TESTIMONIAL_TEXT}}` / `{{TESTIMONIAL_AUTHOR}}` | Optional testimonial (uncomment block) |
| `{{SECONDARY_CTA_URL}}` / `{{SECONDARY_CTA_TEXT}}` | Optional second button (uncomment block) |
| `{{SPONSOR_*}}` | Sponsor spotlight fields (uncomment block) |

## Email Client Compatibility

- **Outlook (Windows):** VML roundrect buttons, MSO conditional comments, 96 DPI fix, Arial font fallback via `<!--[if mso]>` style block
- **Gmail:** Inline styles only (media queries stripped in some views), hover states ignored
- **Apple Mail:** Full CSS support including dark mode, hover states, transitions
- **Yahoo:** Inline styles, table layout
- **Dark mode:** `prefers-color-scheme: dark` media query with comprehensive class overrides for all custom sections

## Design Rules

1. Max width: 600px (email standard)
2. Mobile breakpoint: 600px
3. All CSS inlined on elements (media queries in `<style>` block for supporting clients)
4. Table-based layout for Outlook compatibility
5. `role="presentation"` on all layout tables for accessibility
6. Web-safe font stack (Georgia for headings, system sans-serif for body)
7. All content signed as "Inna" or "The Purl of Wisdom Team"
8. Gradients use `linear-gradient()` with solid-color fallback via inline `background-color`
9. Interactive states (hover) degrade gracefully — non-supporting clients show default state
10. Optional sections wrapped in HTML comments for easy activation
11. Box shadow uses rgba with low opacity for subtle depth
