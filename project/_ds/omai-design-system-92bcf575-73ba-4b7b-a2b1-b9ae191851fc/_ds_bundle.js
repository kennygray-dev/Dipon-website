/* @ds-bundle: {"format":3,"namespace":"OmaiVillasDesignSystem_92bcf5","components":[{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"VillaCard","sourcePath":"components/content/VillaCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"}],"sourceHashes":{"components/content/SectionHeading.jsx":"cf089d37f214","components/content/VillaCard.jsx":"a399214c4b45","components/core/Button.jsx":"25c4b492ddce","components/core/Eyebrow.jsx":"9eaad4e63485","components/forms/Input.jsx":"0346ab15f60f","components/navigation/Header.jsx":"d9e6d26c04bb","ui_kits/omai-villas-web/App.jsx":"4f48177c85fb","ui_kits/omai-villas-web/Destinations.jsx":"51e17f680ead","ui_kits/omai-villas-web/Enquiry.jsx":"a44074397bd1","ui_kits/omai-villas-web/Footer.jsx":"b176bccb701d","ui_kits/omai-villas-web/Hero.jsx":"97cd9b723d02","ui_kits/omai-villas-web/Philosophy.jsx":"66918c0288eb","ui_kits/omai-villas-web/Studio.jsx":"f0b27a10aa4d","ui_kits/omai-villas-web/VillaCollection.jsx":"54f9f8c790bb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OmaiVillasDesignSystem_92bcf5 = window.OmaiVillasDesignSystem_92bcf5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/VillaCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Omai Villas — VillaCard
 * Anatomy: media block → title → metadata line → optional action.
 * Full-bleed photography is the point; the card is restrained chrome
 * around it. Hover: image opacity 0.9, arrow scales/translates. The
 * media block always carries a real, descriptive accessible label.
 */

const STYLE_ID = 'omai-villacard-styles';
const css = `
.omai-vcard{display:block;text-decoration:none;color:inherit;
  background:transparent;border:none;}
.omai-vcard__media{position:relative;overflow:hidden;aspect-ratio:4/5;
  background:var(--color-bg-surface);}
.omai-vcard__img{width:100%;height:100%;object-fit:cover;display:block;
  transition:opacity var(--duration-standard) var(--ease-standard),
             transform var(--duration-standard) var(--ease-standard);}
.omai-vcard:hover .omai-vcard__img{opacity:.9;}
.omai-vcard__ph{width:100%;height:100%;display:flex;align-items:flex-end;
  padding:16px;box-sizing:border-box;
  background:linear-gradient(160deg,#EAE7E3 0%,#CEC9C4 60%,#9C938C 100%);}
.omai-vcard__ph span{font-family:var(--font-label);font-size:var(--size-label-sm);
  letter-spacing:1px;text-transform:uppercase;color:var(--color-text-secondary);}
.omai-vcard__body{display:flex;align-items:flex-start;justify-content:space-between;
  gap:var(--space-md);padding-top:16px;}
.omai-vcard__eyebrow{font-family:var(--font-label);font-weight:var(--weight-label);
  font-size:var(--size-label-sm);letter-spacing:1px;text-transform:uppercase;
  color:var(--color-text-tertiary);display:block;margin-bottom:6px;}
.omai-vcard__title{font-family:var(--font-display);font-weight:400;
  font-size:var(--size-heading-s);line-height:1.1;color:var(--color-text-primary);
  margin:0;}
.omai-vcard__meta{font-family:var(--font-body);font-size:var(--size-body-sm);
  color:var(--color-text-secondary);margin:6px 0 0;}
.omai-vcard__arrow{flex:none;width:30px;height:12px;color:var(--color-text-primary);
  margin-top:6px;transition:transform var(--duration-standard) var(--ease-standard);}
.omai-vcard:hover .omai-vcard__arrow{transform:scale(1.1) translateX(2px);}
`;
function useStyles() {
  React.useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = css;
    document.head.appendChild(el);
  }, []);
}
function VillaCard({
  image,
  alt = '',
  eyebrow,
  title,
  meta,
  href,
  withArrow = true,
  ...rest
}) {
  useStyles();
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "omai-vcard",
    href: href
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "omai-vcard__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    className: "omai-vcard__img",
    src: image,
    alt: alt || title || 'Villa photograph'
  }) : /*#__PURE__*/React.createElement("div", {
    className: "omai-vcard__ph",
    role: "img",
    "aria-label": alt || `${title || 'Villa'} — photography`
  }, /*#__PURE__*/React.createElement("span", null, "Photography"))), /*#__PURE__*/React.createElement("div", {
    className: "omai-vcard__body"
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "omai-vcard__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "omai-vcard__title"
  }, title), meta && /*#__PURE__*/React.createElement("p", {
    className: "omai-vcard__meta"
  }, meta)), withArrow && /*#__PURE__*/React.createElement("svg", {
    className: "omai-vcard__arrow",
    viewBox: "0 0 40 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "square",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "8",
    x2: "38",
    y2: "8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "31,1 38,8 31,15"
  }))));
}
Object.assign(__ds_scope, { VillaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VillaCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Omai Villas — Button
 * Three functional roles mapped to the brand skin:
 *   primary   → solid dark fill (#4D4945), light text
 *   secondary → solid light fill (#EAE7E3), dark text
 *   ghost     → transparent, hairline bottom-border (the signature CTA)
 * Zero radius. No shadow. Focus-visible is a mandatory visible outline.
 */

const STYLE_ID = 'omai-button-styles';
const css = `
.omai-btn{
  font-family:var(--font-label);font-weight:var(--weight-label);
  text-transform:uppercase;letter-spacing:var(--tracking-label);
  border-radius:0;border:none;cursor:pointer;display:inline-flex;
  align-items:center;justify-content:center;gap:var(--space-xs);
  transition:opacity var(--duration-standard) var(--ease-standard),
             background-color var(--duration-standard) var(--ease-standard),
             border-color var(--duration-standard) var(--ease-standard);
  text-decoration:none;line-height:1;
}
.omai-btn--lg{font-size:var(--size-label-lg);padding:16px 20px;}
.omai-btn--md{font-size:var(--size-label-md);padding:12px 16px;}
.omai-btn--primary{background:var(--color-text-secondary);color:var(--color-text-on-inverse);}
.omai-btn--primary:hover{opacity:.9;}
.omai-btn--secondary{background:var(--color-bg-surface);color:var(--color-text-primary);}
.omai-btn--secondary:hover{background:var(--color-bg-surface-alt);}
.omai-btn--ghost{background:transparent;color:var(--color-text-primary);
  padding-left:0;padding-right:0;border-bottom:var(--border-hairline) solid var(--color-border-default);
  padding-bottom:8px;}
.omai-btn--ghost:hover{border-color:var(--color-border-strong);}
.omai-btn:focus-visible{outline:1px solid var(--color-text-primary);outline-offset:3px;}
.omai-btn:disabled,.omai-btn[aria-disabled="true"]{opacity:.4;cursor:not-allowed;pointer-events:none;}
.omai-btn__arrow{display:inline-block;width:24px;height:10px;
  transition:transform var(--duration-standard) var(--ease-standard);}
.omai-btn:hover .omai-btn__arrow{transform:translateX(3px);}
`;
function useStyles() {
  React.useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = css;
    document.head.appendChild(el);
  }, []);
}
function Button({
  children,
  variant = 'primary',
  size = 'lg',
  withArrow = false,
  as,
  href,
  disabled = false,
  ...rest
}) {
  useStyles();
  const Tag = as || (href ? 'a' : 'button');
  const cls = `omai-btn omai-btn--${size} omai-btn--${variant}`;
  const arrow = withArrow ? /*#__PURE__*/React.createElement("svg", {
    className: "omai-btn__arrow",
    viewBox: "0 0 40 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "square",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "8",
    x2: "38",
    y2: "8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "31,1 38,8 31,15"
  })) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": Tag !== 'button' && disabled ? 'true' : undefined
  }, rest), children, arrow);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Omai Villas — Eyebrow
 * The short, spaced, uppercase context tag that opens the brand's
 * eyebrow → heading → body → action rhythm. Pure typography; the
 * geometric label face tracked wide. No fill, no border by default.
 */
function Eyebrow({
  children,
  as = 'span',
  tone = 'primary',
  ...rest
}) {
  const Tag = as;
  const color = tone === 'inverse' ? 'var(--color-text-on-inverse-muted)' : 'var(--color-text-tertiary)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 'var(--weight-label)',
      fontSize: 'var(--size-label-md)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      lineHeight: 1.18,
      color,
      display: 'inline-block'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
/**
 * Omai Villas — SectionHeading
 * The brand's core content rhythm rendered as one block:
 *   eyebrow (optional) → heading → body (one short paragraph) → action (optional).
 * Editorial left-offset by default; tone flips colours over dark/photo.
 */
function SectionHeading({
  eyebrow,
  heading,
  body,
  actionLabel,
  actionHref,
  tone = 'primary',
  align = 'left',
  maxWidth = 'var(--container-lg)'
}) {
  const onInverse = tone === 'inverse';
  const headColor = onInverse ? 'var(--color-text-on-inverse)' : 'var(--color-text-primary)';
  const bodyColor = onInverse ? 'var(--color-text-on-inverse-muted)' : 'var(--color-text-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      maxWidth,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone
  }, eyebrow), heading && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--size-heading-l)',
      lineHeight: 1.08,
      color: headColor,
      margin: 0,
      textWrap: 'pretty'
    }
  }, heading), body && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--size-body-lg)',
      lineHeight: 1.5,
      color: bodyColor,
      margin: 0,
      textWrap: 'pretty'
    }
  }, body), actionLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    href: actionHref,
    withArrow: true
  }, actionLabel)));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Omai Villas — Input
 * All-sides hairline border, zero radius, transparent fill — a
 * deliberate departure from the common bottom-border-only field.
 * Label is always present and programmatically associated. Error
 * colour is dedicated (#D45656) and used nowhere else.
 */

const STYLE_ID = 'omai-input-styles';
const css = `
.omai-field{display:flex;flex-direction:column;gap:var(--space-xs);}
.omai-field__label{font-family:var(--font-label);font-weight:var(--weight-label);
  font-size:var(--size-label-md);letter-spacing:var(--tracking-label);
  text-transform:uppercase;color:var(--color-text-secondary);}
.omai-field__input{font-family:var(--font-body);font-size:var(--size-body);
  line-height:1.5;color:var(--color-text-primary);background:transparent;
  border:var(--border-hairline) solid var(--color-border-default);border-radius:0;
  padding:12px 14px;width:100%;box-sizing:border-box;
  transition:border-color var(--duration-standard) var(--ease-standard);}
.omai-field__input::placeholder{color:var(--color-text-tertiary);}
.omai-field__input:focus{outline:none;border-color:var(--color-text-primary);}
.omai-field__input:focus-visible{outline:1px solid var(--color-text-primary);outline-offset:2px;}
.omai-field--error .omai-field__input{border-color:var(--color-error);}
.omai-field--error .omai-field__input:focus{border-color:var(--color-error);}
.omai-field__msg{font-family:var(--font-body);font-size:var(--size-body-sm);
  color:var(--color-error);}
.omai-field__input:disabled{opacity:.4;cursor:not-allowed;}
`;
let _id = 0;
function useStyles() {
  React.useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = css;
    document.head.appendChild(el);
  }, []);
}
function Input({
  label,
  id,
  error,
  type = 'text',
  multiline = false,
  rows = 4,
  ...rest
}) {
  useStyles();
  const fid = React.useMemo(() => id || `omai-input-${++_id}`, [id]);
  const msgId = `${fid}-msg`;
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: `omai-field${error ? ' omai-field--error' : ''}`
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "omai-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    id: fid,
    className: "omai-field__input",
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    "aria-invalid": error ? 'true' : undefined,
    "aria-describedby": error ? msgId : undefined
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    className: "omai-field__msg",
    id: msgId
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
/**
 * Omai Villas — Header
 * Three-zone navigation: menu trigger · typographic wordmark · primary
 * action. Transparent over hero imagery; pass variant="solid" for the
 * scrolled / on-page state. The primary action is a bounded, thin-
 * bordered box (the brand requires a weighted element, never bare text).
 */

const STYLE_ID = 'omai-header-styles';
const css = `
.omai-header{position:relative;display:flex;align-items:center;
  justify-content:space-between;gap:var(--space-md);
  padding:20px var(--space-gutter-desktop);box-sizing:border-box;width:100%;
  transition:background-color var(--duration-standard) var(--ease-standard),
             color var(--duration-standard) var(--ease-standard);}
.omai-header--transparent{background:transparent;color:var(--color-text-on-inverse);}
.omai-header--solid{background:var(--color-bg-page);color:var(--color-text-primary);
  border-bottom:var(--border-hairline) solid var(--color-border-default);}
.omai-header__zone{display:flex;align-items:center;gap:var(--space-lg);flex:1;}
.omai-header__zone--right{justify-content:flex-end;}
.omai-header__zone--center{flex:0 0 auto;justify-content:center;}
.omai-header__trigger{display:inline-flex;align-items:center;gap:10px;
  background:none;border:none;cursor:pointer;color:inherit;padding:0;
  font-family:var(--font-label);font-weight:var(--weight-label);
  font-size:var(--size-label-md);letter-spacing:var(--tracking-label);
  text-transform:uppercase;}
.omai-header__trigger svg{display:block;}
.omai-header__nav{display:flex;gap:var(--space-lg);}
.omai-header__link{font-family:var(--font-label);font-weight:var(--weight-label);
  font-size:var(--size-label-md);letter-spacing:var(--tracking-label);
  text-transform:uppercase;color:inherit;text-decoration:none;opacity:.85;
  transition:opacity var(--duration-standard) var(--ease-standard);}
.omai-header__link:hover{opacity:1;}
.omai-header__wordmark{font-family:var(--font-display);font-weight:300;
  font-size:26px;letter-spacing:4px;color:inherit;text-decoration:none;line-height:1;}
.omai-header__cta{font-family:var(--font-label);font-weight:var(--weight-label);
  font-size:var(--size-label-md);letter-spacing:var(--tracking-label);
  text-transform:uppercase;color:inherit;text-decoration:none;
  border:var(--border-hairline) solid currentColor;padding:12px 18px;
  transition:opacity var(--duration-standard) var(--ease-standard);}
.omai-header__cta:hover{opacity:.7;}
.omai-header__cta:focus-visible,.omai-header__trigger:focus-visible,
.omai-header__link:focus-visible{outline:1px solid currentColor;outline-offset:3px;}
.omai-header__menu-only{display:none;}
@media(max-width:860px){
  .omai-header{padding:16px var(--space-gutter-mobile);}
  .omai-header__nav{display:none;}
  .omai-header__menu-only{display:inline-flex;}
}
`;
function useStyles() {
  React.useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = css;
    document.head.appendChild(el);
  }, []);
}
function MenuGlyph() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "10",
    viewBox: "0 0 18 10",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "1",
    x2: "18",
    y2: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "9",
    x2: "18",
    y2: "9"
  }));
}
function Header({
  variant = 'transparent',
  links = [],
  ctaLabel = 'Enquire',
  ctaHref = '#enquire',
  wordmark = 'OMAI',
  onMenu
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("header", {
    className: `omai-header omai-header--${variant}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "omai-header__zone"
  }, /*#__PURE__*/React.createElement("button", {
    className: "omai-header__trigger",
    onClick: onMenu,
    "aria-label": "Open menu"
  }, /*#__PURE__*/React.createElement(MenuGlyph, null), " Menu"), /*#__PURE__*/React.createElement("nav", {
    className: "omai-header__nav",
    "aria-label": "Primary"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    className: "omai-header__link",
    href: l.href
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    className: "omai-header__zone omai-header__zone--center"
  }, /*#__PURE__*/React.createElement("a", {
    className: "omai-header__wordmark",
    href: "/",
    "aria-label": `${wordmark} — home`
  }, wordmark)), /*#__PURE__*/React.createElement("div", {
    className: "omai-header__zone omai-header__zone--right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "omai-header__cta",
    href: ctaHref
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/omai-villas-web/App.jsx
try { (() => {
// Omai Villas — homepage composition. Header switches transparent→solid
// once the hero scrolls past.
function App() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 120);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToEnquire = e => {
    if (e) e.preventDefault();
    const el = document.getElementById('villas');
    if (el) window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, solid && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(FixedHeader, null)), /*#__PURE__*/React.createElement(Hero, {
    solid: false,
    onEnquire: scrollToEnquire
  }), /*#__PURE__*/React.createElement(Philosophy, null), /*#__PURE__*/React.createElement(VillaCollection, null), /*#__PURE__*/React.createElement(Destinations, null), /*#__PURE__*/React.createElement(Studio, null), /*#__PURE__*/React.createElement(Enquiry, null), /*#__PURE__*/React.createElement(Footer, null));
}
function FixedHeader() {
  const {
    Header
  } = window.OmaiVillasDesignSystem_92bcf5;
  return /*#__PURE__*/React.createElement(Header, {
    variant: "solid",
    links: [{
      label: 'Villas',
      href: '#villas'
    }, {
      label: 'Destinations',
      href: '#destinations'
    }, {
      label: 'Studio',
      href: '#studio'
    }],
    ctaLabel: "Enquire",
    ctaHref: "#enquire"
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/omai-villas-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/omai-villas-web/Destinations.jsx
try { (() => {
// Omai Villas — Destinations. Full-bleed media panel with content layer
// and scrim above it. Two destinations, St Barth & Ibiza.
const {
  Eyebrow,
  Button
} = window.OmaiVillasDesignSystem_92bcf5;
const DESTS = [{
  name: 'St Barthélemy',
  note: 'Volcanic coastline, golden hour, absolute privacy.',
  ph: 'linear-gradient(160deg,#C9B79E,#8E7361 75%,#3E332D)'
}, {
  name: 'Ibiza',
  note: 'Cliff-edge architecture above the Mediterranean.',
  ph: 'linear-gradient(160deg,#CFC3B4,#7D6D67 75%,#3A332F)'
}];
function Destinations() {
  return /*#__PURE__*/React.createElement("section", {
    id: "destinations",
    "data-screen-label": "Destinations",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, DESTS.map(d => /*#__PURE__*/React.createElement("article", {
    key: d.name,
    style: {
      position: 'relative',
      minHeight: '560px',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": `${d.name} — photography`,
    "aria-hidden": "false",
    style: {
      position: 'absolute',
      inset: 0,
      background: d.ph
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(44,41,39,0) 40%, rgba(44,41,39,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: 'var(--space-gutter-desktop)',
      maxWidth: 'var(--container-md)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Destination"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: '40px',
      lineHeight: 1.05,
      color: 'var(--color-text-on-inverse)',
      margin: '14px 0 12px'
    }
  }, d.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      lineHeight: 1.5,
      color: 'var(--color-text-on-inverse-muted)',
      margin: '0 0 24px'
    }
  }, d.note), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    withArrow: true,
    href: "#enquire",
    style: {
      color: 'var(--color-text-on-inverse)',
      borderColor: 'rgba(245,244,241,0.5)'
    }
  }, "Discover ", d.name)))));
}
window.Destinations = Destinations;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/omai-villas-web/Destinations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/omai-villas-web/Enquiry.jsx
try { (() => {
// Omai Villas — Enquiry CTA. Real, simple interaction: submitting the
// form swaps to a quiet confirmation. No prices, "Enquire" not "Book".
const {
  Input,
  Button,
  Eyebrow
} = window.OmaiVillasDesignSystem_92bcf5;
function Enquiry() {
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState('');
  function submit(e) {
    e.preventDefault();
    const email = new FormData(e.target).get('email') || '';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setErr('Enter a valid email address');
      return;
    }
    setErr('');
    setSent(true);
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "enquire",
    "data-screen-label": "Enquiry",
    style: {
      background: 'var(--color-bg-surface)',
      padding: 'var(--space-section-y) var(--space-gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.42fr 0.58fr',
      gap: '64px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Enquiries"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--size-heading-l)',
      lineHeight: 1.08,
      color: 'var(--color-text-primary)',
      margin: '16px 0 0'
    }
  }, "Tell us about the stay you have in mind.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      borderTop: 'var(--border-hairline) solid var(--color-border-strong)',
      paddingTop: '28px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: '28px',
      color: 'var(--color-text-primary)',
      margin: 0
    }
  }, "Thank you. We will be in touch, quietly and personally."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      color: 'var(--color-text-secondary)',
      marginTop: '12px'
    }
  }, "A member of the studio responds to every enquiry within two days.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    name: "name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    name: "email",
    placeholder: "you@example.com",
    error: err
  })), /*#__PURE__*/React.createElement(Input, {
    label: "What are you looking for?",
    name: "message",
    multiline: true,
    rows: 4,
    placeholder: "Destination, dates, the kind of house\u2026"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    withArrow: true
  }, "Send enquiry"))))));
}
window.Enquiry = Enquiry;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/omai-villas-web/Enquiry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/omai-villas-web/Footer.jsx
try { (() => {
// Omai Villas — Footer. Dark, typographic wordmark, restrained links.
function Footer() {
  const cols = [['The collection', ['St Barthélemy', 'Ibiza', 'All houses']], ['Omai Studio', ['Our approach', 'Provenance', 'Journal']], ['Enquiries', ['Contact', 'By introduction', 'Private viewings']]];
  return /*#__PURE__*/React.createElement("footer", {
    "data-screen-label": "Footer",
    style: {
      background: 'var(--color-bg-inverse)',
      color: 'var(--color-text-on-inverse)',
      padding: '80px var(--space-gutter-desktop) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '48px',
      alignItems: 'start',
      borderBottom: 'var(--border-hairline) solid var(--color-border-strong)',
      paddingBottom: '56px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '36px',
      letterSpacing: '5px',
      color: 'var(--color-text-on-inverse)'
    }
  }, "OMAI ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: '13px',
      letterSpacing: '3.5px',
      verticalAlign: 'middle'
    }
  }, "VILLAS")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--color-text-on-inverse-muted)',
      maxWidth: 'var(--container-xs)',
      marginTop: '20px',
      lineHeight: 1.6
    }
  }, "A small, deliberate collection of architectural houses. By introduction.")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("nav", {
    key: title,
    "aria-label": title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 'var(--size-label-sm)',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--color-text-on-inverse-muted)',
      marginBottom: '18px'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#enquire",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--color-text-on-inverse)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '28px',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-label-sm)',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--color-text-on-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Omai Villas 2026"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/omai-villas-web/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/omai-villas-web/Hero.jsx
try { (() => {
// Omai Villas — Hero. Full-bleed photography with a scrim, transparent
// header over it, and a single ultra-thin headline. Photography is a
// warm-neutral placeholder until real imagery is supplied.
const {
  Header,
  Button,
  Eyebrow
} = window.OmaiVillasDesignSystem_92bcf5;
function Hero({
  solid,
  onEnquire
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(165deg, #C9B79E 0%, #A98E78 38%, #6F5B50 72%, #4A3D36 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(44,41,39,0.36) 0%, rgba(44,41,39,0.08) 32%, rgba(44,41,39,0.42) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Header, {
    variant: solid ? 'solid' : 'transparent',
    links: [{
      label: 'Villas',
      href: '#villas'
    }, {
      label: 'Destinations',
      href: '#destinations'
    }, {
      label: 'Studio',
      href: '#studio'
    }],
    ctaLabel: "Enquire",
    ctaHref: "#enquire"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 var(--space-gutter-desktop) 96px',
      maxWidth: '900px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "St Barth\xE9lemy \xB7 Ibiza"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'clamp(48px, 7vw, 96px)',
      lineHeight: 1.04,
      color: 'var(--color-text-on-inverse)',
      margin: '18px 0 32px',
      textWrap: 'balance'
    }
  }, "Houses that belong", /*#__PURE__*/React.createElement("br", null), "to their landscape."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    withArrow: true,
    onClick: onEnquire,
    style: {
      color: 'var(--color-text-on-inverse)',
      borderColor: 'rgba(245,244,241,0.5)'
    }
  }, "Explore the collection"))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 28,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2,
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'var(--color-text-on-inverse-muted)',
      opacity: 0.8
    }
  }, "Scroll"));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/omai-villas-web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/omai-villas-web/Philosophy.jsx
try { (() => {
// Omai Villas — Philosophy. Editorial two-column split with the brand's
// signature asymmetric left whitespace (text begins ~30% in).
const {
  SectionHeading
} = window.OmaiVillasDesignSystem_92bcf5;
function Philosophy() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Philosophy",
    style: {
      background: 'var(--color-bg-page)',
      padding: 'var(--space-section-y) var(--space-gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.42fr 0.58fr',
      gap: '64px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The philosophy",
    heading: "Quiet houses, considered in full.",
    maxWidth: "var(--container-md)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-lg)',
      lineHeight: 1.5,
      color: 'var(--color-text-secondary)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Each residence in the collection is chosen for its architecture first \u2014 a single, considered point of view rather than a portfolio of rooms. We look for houses that imply rather than announce."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      lineHeight: 1.5,
      color: 'var(--color-text-secondary)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Provenance matters: the architect, the studio, the year. These are the credentials we lead with \u2014 never a feature list, and never a price."))));
}
window.Philosophy = Philosophy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/omai-villas-web/Philosophy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/omai-villas-web/Studio.jsx
try { (() => {
// Omai Villas — Studio. The brand-credibility stage (dark panel).
const {
  SectionHeading
} = window.OmaiVillasDesignSystem_92bcf5;
function Studio() {
  return /*#__PURE__*/React.createElement("section", {
    id: "studio",
    "data-screen-label": "Omai Studio",
    style: {
      background: 'var(--color-bg-inverse)',
      padding: 'var(--space-section-y) var(--space-gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.42fr 0.58fr',
      gap: '64px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    eyebrow: "Omai Studio",
    heading: "A point of view, not a portfolio.",
    maxWidth: "var(--container-md)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-lg)',
      lineHeight: 1.5,
      color: 'var(--color-text-on-inverse-muted)',
      margin: '0 0 32px',
      textWrap: 'pretty'
    }
  }, "Behind every house is the studio's editorial eye \u2014 sourcing, curation, and a standard of provenance held in common across the collection. We work quietly, by introduction, with a small number of clients each season."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '32px',
      borderTop: 'var(--border-hairline) solid var(--color-border-strong)',
      paddingTop: '28px'
    }
  }, [['Nine', 'houses in the collection'], ['Two', 'island destinations'], ['By introduction', 'how we work']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: '34px',
      color: 'var(--color-text-on-inverse)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-label-sm)',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--color-text-on-inverse-muted)',
      marginTop: '10px'
    }
  }, l)))))));
}
window.Studio = Studio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/omai-villas-web/Studio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/omai-villas-web/VillaCollection.jsx
try { (() => {
// Omai Villas — Villa collection grid. Repeatable VillaCard items.
const {
  VillaCard,
  SectionHeading
} = window.OmaiVillasDesignSystem_92bcf5;
const VILLAS = [{
  eyebrow: 'St Barthélemy',
  title: 'Villa Lumière',
  meta: 'Six bedrooms · Studio KO',
  ph: 'linear-gradient(160deg,#D8C6AC,#A98E78 70%,#6F5B50)'
}, {
  eyebrow: 'Ibiza',
  title: 'Casa del Risco',
  meta: 'Five bedrooms · RCR Arquitectes',
  ph: 'linear-gradient(160deg,#CFC3B4,#9C938C 70%,#5F514B)'
}, {
  eyebrow: 'St Barthélemy',
  title: 'Maison Falaise',
  meta: 'Seven bedrooms · Studio Mumbai',
  ph: 'linear-gradient(160deg,#E0CBAE,#B79A7E 70%,#4A3D36)'
}];
function VillaCollection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "villas",
    "data-screen-label": "Villa collection",
    style: {
      background: 'var(--color-bg-page)',
      padding: '0 var(--space-gutter-desktop) var(--space-section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: '48px',
      flexWrap: 'wrap',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The collection",
    heading: "A small, deliberate portfolio.",
    maxWidth: "var(--container-md)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-label-md)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-text-tertiary)'
    }
  }, "Three of nine houses")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px'
    }
  }, VILLAS.map(v => /*#__PURE__*/React.createElement("a", {
    key: v.title,
    href: "#enquire",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(VillaCardWithBg, v)))));
}

// Wraps VillaCard but paints a distinct placeholder gradient into the media block.
function VillaCardWithBg({
  eyebrow,
  title,
  meta,
  ph
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ['--ph-bg']: ph
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '4 / 5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": `${title}, ${eyebrow} — photography`,
    style: {
      position: 'absolute',
      inset: 0,
      background: ph,
      transition: 'opacity var(--duration-standard) var(--ease-standard)'
    },
    className: "omai-ph-media"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '20px',
      paddingTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 'var(--size-label-sm)',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--color-text-tertiary)',
      display: 'block',
      marginBottom: '6px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--size-heading-s)',
      lineHeight: 1.1,
      color: 'var(--color-text-primary)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--color-text-secondary)',
      margin: '6px 0 0'
    }
  }, meta)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 16",
    width: "30",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "square",
    style: {
      color: 'var(--color-text-primary)',
      flex: 'none',
      marginTop: '6px'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "8",
    x2: "38",
    y2: "8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "31,1 38,8 31,15"
  }))));
}
window.VillaCollection = VillaCollection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/omai-villas-web/VillaCollection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.VillaCard = __ds_scope.VillaCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Header = __ds_scope.Header;

})();
