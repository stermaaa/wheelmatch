/* @ds-bundle: {"format":3,"namespace":"WheelMatchAIDesignSystem_84fa8f","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ConfidenceBadge","sourcePath":"components/feedback/ConfidenceBadge.jsx"},{"name":"ScoreBar","sourcePath":"components/feedback/ScoreBar.jsx"},{"name":"ScoreGauge","sourcePath":"components/feedback/ScoreGauge.jsx"},{"name":"StatCard","sourcePath":"components/feedback/StatCard.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"c35ab062ad57","components/core/Badge.jsx":"4e21be95e23f","components/core/Button.jsx":"a9ae985c5075","components/core/Card.jsx":"857ada7c08bc","components/core/IconButton.jsx":"66a4f8380437","components/feedback/ConfidenceBadge.jsx":"a57810f5a89b","components/feedback/ScoreBar.jsx":"2218de3c0ca4","components/feedback/ScoreGauge.jsx":"e0d3cc394741","components/feedback/StatCard.jsx":"68e46b037841","components/forms/Checkbox.jsx":"188dabbbc20a","components/forms/Input.jsx":"35da1f5c07e1","components/forms/Select.jsx":"c4cb11b923a2","components/forms/Switch.jsx":"505fcf8b7245","components/forms/Textarea.jsx":"906241e90c7e","components/navigation/SidebarNav.jsx":"7188b09390a6","components/navigation/Tabs.jsx":"6fe735aa78ef","ui_kits/wheelmatch/App.jsx":"ade5ea5bff2b","ui_kits/wheelmatch/CVGenerator.jsx":"5cf3cdc8a130","ui_kits/wheelmatch/Dashboard.jsx":"6e3dc40ac270","ui_kits/wheelmatch/History.jsx":"e4a7679eb4ae","ui_kits/wheelmatch/Missions.jsx":"5bf84f4027b1","ui_kits/wheelmatch/Settings.jsx":"39daa45fcc99","ui_kits/wheelmatch/Shortlist.jsx":"175730b4fffa","ui_kits/wheelmatch/TalentDetail.jsx":"409e3eba17c7","ui_kits/wheelmatch/Templates.jsx":"1c40cf7ed70f","ui_kits/wheelmatch/data.jsx":"dbf7ef196a33","ui_kits/wheelmatch/icons.jsx":"93b601886d39","ui_kits/wheelmatch/shell.jsx":"f5039be9ebd0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WheelMatchAIDesignSystem_84fa8f = window.WheelMatchAIDesignSystem_84fa8f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48
};
const PALETTE = ['var(--primary-600)', 'var(--ai-600)', 'var(--success-600)', 'var(--info-600)', 'var(--warning-600)'];
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

/**
 * User / candidate avatar with deterministic color fallback.
 */
function Avatar({
  name = '',
  src,
  size = 'md',
  status,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const color = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];
  const statusColor = {
    available: 'var(--success-500)',
    busy: 'var(--warning-500)',
    off: 'var(--slate-400)'
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    width: dim,
    height: dim,
    style: {
      width: dim,
      height: dim,
      borderRadius: 999,
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      borderRadius: 999,
      background: color,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: dim * 0.38,
      letterSpacing: '-0.01em'
    }
  }, initials(name)), statusColor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: dim * 0.28,
      height: dim * 0.28,
      minWidth: 8,
      minHeight: 8,
      borderRadius: 999,
      background: statusColor,
      border: '2px solid var(--surface-card)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--slate-100)',
    fg: 'var(--slate-600)',
    bd: 'var(--slate-200)'
  },
  primary: {
    bg: 'var(--primary-50)',
    fg: 'var(--primary-700)',
    bd: 'var(--primary-100)'
  },
  ai: {
    bg: 'var(--ai-50)',
    fg: 'var(--ai-700)',
    bd: 'var(--ai-100)'
  },
  success: {
    bg: 'var(--success-50)',
    fg: 'var(--success-700)',
    bd: 'var(--success-100)'
  },
  warning: {
    bg: 'var(--warning-50)',
    fg: 'var(--warning-700)',
    bd: 'var(--warning-100)'
  },
  danger: {
    bg: 'var(--danger-50)',
    fg: 'var(--danger-700)',
    bd: 'var(--danger-100)'
  },
  info: {
    bg: 'var(--info-50)',
    fg: 'var(--info-600)',
    bd: 'var(--info-100)'
  }
};

/**
 * Compact status / category label.
 */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  dot = false,
  solid = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 10px';
  const fs = size === 'sm' ? 11 : 12;
  const base = solid ? {
    background: t.fg,
    color: '#fff',
    border: '1px solid transparent'
  } : {
    background: t.bg,
    color: t.fg,
    border: `1px solid ${t.bd}`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: pad,
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      fontWeight: 600,
      lineHeight: 1.3,
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...base,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: solid ? '#fff' : t.fg,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 12px',
    fontSize: 13,
    gap: 6,
    radius: 'var(--radius-md)'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 16px',
    fontSize: 14,
    gap: 7,
    radius: 'var(--radius-md)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 22px',
    fontSize: 15,
    gap: 8,
    radius: 'var(--radius-lg)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--primary-600)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--primary-600)',
    shadow: 'var(--shadow-xs)'
  },
  ai: {
    background: 'var(--ai-600)',
    color: '#fff',
    border: '1px solid var(--ai-600)',
    shadow: 'var(--shadow-xs)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
    shadow: 'var(--shadow-xs)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
    shadow: 'none'
  },
  subtle: {
    background: 'var(--primary-50)',
    color: 'var(--primary-700)',
    border: '1px solid transparent',
    shadow: 'none'
  },
  danger: {
    background: 'var(--danger-600)',
    color: '#fff',
    border: '1px solid var(--danger-600)',
    shadow: 'var(--shadow-xs)'
  }
};

/**
 * WheelMatch primary action button.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      lineHeight: 1,
      color: v.color,
      background: v.background,
      border: v.border,
      borderRadius: s.radius,
      boxShadow: v.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      transition: 'filter var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(0.5px) scale(0.99)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.96)';
    }
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. The base building block for panels & cards.
 */
function Card({
  children,
  padding = 'md',
  interactive = false,
  selected = false,
  style,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 14,
    md: 20,
    lg: 28
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--primary-600)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: selected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: pads[padding] ?? pads.md,
      transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'var(--border-default)';
      }
    },
    onMouseLeave: e => {
      if (interactive && !selected) {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 38,
  lg: 44
};

/**
 * Square icon-only button. Pass an SVG node as children.
 */
function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)'
    },
    subtle: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      padding: 0,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...v,
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === 'ghost') {
        e.currentTarget.style.background = 'var(--surface-sunken)';
        e.currentTarget.style.color = 'var(--text-strong)';
      }
    },
    onMouseLeave: e => {
      if (variant === 'ghost') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--text-muted)';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ConfidenceBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATES = {
  confirmed: {
    fg: 'var(--confidence-confirmed-fg)',
    bg: 'var(--confidence-confirmed-bg)',
    bd: 'var(--confidence-confirmed-bd)',
    dot: 'var(--success-500)',
    label: 'Confirmé dans le CV'
  },
  pending: {
    fg: 'var(--confidence-pending-fg)',
    bg: 'var(--confidence-pending-bg)',
    bd: 'var(--confidence-pending-bd)',
    dot: 'var(--warning-500)',
    label: 'À confirmer'
  },
  absent: {
    fg: 'var(--confidence-absent-fg)',
    bg: 'var(--confidence-absent-bg)',
    bd: 'var(--confidence-absent-bd)',
    dot: 'var(--slate-400)',
    label: 'Absent du CV'
  }
};
const ICONS = {
  confirmed: /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }),
  pending: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  })),
  absent: /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })
};

/**
 * Anti-hallucination confidence badge. The signature trust component.
 */
function ConfidenceBadge({
  state = 'pending',
  children,
  size = 'md',
  style,
  ...rest
}) {
  const s = STATES[state] || STATES.pending;
  const fs = size === 'sm' ? 11 : 12.5;
  const pad = size === 'sm' ? '3px 9px' : '4px 11px';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: pad,
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      fontWeight: 600,
      lineHeight: 1.25,
      color: s.fg,
      background: s.bg,
      border: `1px solid ${s.bd}`,
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: s.fg,
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[state]), children || s.label);
}
Object.assign(__ds_scope, { ConfidenceBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ConfidenceBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ScoreBar.jsx
try { (() => {
function barColor(v) {
  if (v >= 80) return 'var(--score-high)';
  if (v >= 65) return 'var(--score-mid)';
  return 'var(--score-low)';
}

/**
 * Labelled horizontal score bar — one criterion of a matching breakdown.
 */
function ScoreBar({
  label,
  value = 0,
  color,
  showValue = true,
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = color || barColor(pct);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)',
      width: 120,
      flex: 'none'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      borderRadius: 999,
      background: 'var(--score-track)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 999,
      background: fill,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-strong)',
      width: 34,
      textAlign: 'right',
      flex: 'none'
    }
  }, Math.round(pct)));
}
Object.assign(__ds_scope, { ScoreBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ScoreBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ScoreGauge.jsx
try { (() => {
function scoreColor(v) {
  if (v >= 80) return 'var(--score-high)';
  if (v >= 65) return 'var(--score-mid)';
  return 'var(--score-low)';
}

/**
 * Radial matching-score gauge. The product's hero data viz.
 */
function ScoreGauge({
  value = 0,
  size = 96,
  stroke,
  label,
  showValue = true
}) {
  const sw = stroke || Math.max(6, Math.round(size * 0.09));
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = pct / 100 * c;
  const color = scoreColor(pct);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--score-track)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${c}`,
    style: {
      transition: 'stroke-dasharray var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 0
    }
  }, showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: size * 0.28,
      color,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, Math.round(pct), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.15
    }
  }, "%")), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: Math.max(9, size * 0.1),
      fontWeight: 600,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, label)));
}
Object.assign(__ds_scope, { ScoreGauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ScoreGauge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatCard.jsx
try { (() => {
/**
 * Dashboard KPI tile with value, label, optional trend and icon.
 */
function StatCard({
  label,
  value,
  unit,
  icon,
  trend,
  trendDir = 'up',
  accent = 'primary',
  style
}) {
  const accents = {
    primary: 'var(--primary-600)',
    ai: 'var(--ai-600)',
    success: 'var(--success-600)',
    warning: 'var(--warning-600)',
    info: 'var(--info-600)',
    neutral: 'var(--slate-500)'
  };
  const tints = {
    primary: 'var(--primary-50)',
    ai: 'var(--ai-50)',
    success: 'var(--success-50)',
    warning: 'var(--warning-50)',
    info: 'var(--info-50)',
    neutral: 'var(--slate-100)'
  };
  const trendColor = trendDir === 'down' ? 'var(--danger-600)' : 'var(--success-600)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-md)',
      background: tints[accent],
      color: accents[accent],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 800,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, unit)), trend && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: trendColor,
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, trendDir === 'down' ? /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }) : /*#__PURE__*/React.createElement("polyline", {
    points: "18 15 12 9 6 15"
  })), trend), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "cette semaine")));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox with label — used in candidate question checklists.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  tone = 'primary',
  style,
  ...rest
}) {
  const accent = tone === 'success' ? 'var(--success-500)' : 'var(--primary-600)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked ? accent : 'var(--border-strong)'}`,
      background: checked ? accent : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, leading icon and hint/error.
 */
function Input({
  label,
  hint,
  error,
  leftIcon,
  size = 'md',
  id,
  style,
  containerStyle,
  ...rest
}) {
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--primary-600)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: heights[size],
      padding: '0 12px',
      background: 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? error ? 'var(--ring-danger)' : 'var(--ring-focus)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'inline-flex',
      flex: 'none'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'lg' ? 15 : 14,
      color: 'var(--text-strong)',
      minWidth: 0,
      ...style
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Native select styled to match the system. `options` = [{value,label}] or strings.
 */
function Select({
  label,
  options = [],
  size = 'md',
  id,
  value,
  onChange,
  style,
  containerStyle,
  ...rest
}) {
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    onChange: onChange
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: heights[size],
      padding: '0 34px 0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      outline: 'none',
      cursor: 'pointer',
      ...style
    }
  }), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 11,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Toggle switch — anonymisation, remote, premium options.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  tone = 'primary',
  style,
  ...rest
}) {
  const on = tone === 'ai' ? 'var(--ai-600)' : 'var(--primary-600)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      if (!disabled && onChange) onChange(!checked);
    },
    style: {
      width: 38,
      height: 22,
      flex: 'none',
      borderRadius: 999,
      position: 'relative',
      background: checked ? on : 'var(--slate-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: 999,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Multi-line text input — the mission-brief paste zone.
 */
function Textarea({
  label,
  hint,
  error,
  rows = 5,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--primary-600)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      padding: '11px 13px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-xs)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
/**
 * Vertical app navigation rail (dark navy). Items: [{id,label,icon,count}].
 */
function SidebarNav({
  items = [],
  active,
  onSelect,
  header,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 'var(--sidebar-w)',
      flex: 'none',
      height: '100%',
      boxSizing: 'border-box',
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)',
      display: 'flex',
      flexDirection: 'column',
      padding: '18px 14px',
      gap: 4,
      ...style
    }
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, items.map(it => {
    if (it.section) {
      return /*#__PURE__*/React.createElement("div", {
        key: it.section,
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 'var(--ls-caps)',
          textTransform: 'uppercase',
          color: 'rgba(220,228,251,0.45)',
          padding: '14px 12px 6px'
        }
      }, it.section);
    }
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onSelect && onSelect(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '9px 12px',
        border: 'none',
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        background: on ? 'rgba(74,111,240,0.18)' : 'transparent',
        color: on ? '#fff' : 'rgba(220,228,251,0.78)',
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!on) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.color = '#fff';
        }
      },
      onMouseLeave: e => {
        if (!on) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(220,228,251,0.78)';
        }
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 18,
        height: 18,
        flex: 'none',
        color: on ? 'var(--primary-400)' : 'currentColor'
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        padding: '1px 7px',
        borderRadius: 999,
        background: on ? 'var(--primary-600)' : 'rgba(255,255,255,0.10)',
        color: '#fff'
      }
    }, it.count));
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12
    }
  }, footer));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tab strip. `variant="underline"` (default) or `variant="segmented"` (pill group).
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'underline',
  size = 'md',
  style
}) {
  const norm = tabs.map(t => typeof t === 'string' ? {
    id: t,
    label: t
  } : t);
  const fs = size === 'sm' ? 13 : 14;
  if (variant === 'segmented') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        gap: 3,
        padding: 3,
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-lg)',
        ...style
      }
    }, norm.map(t => {
      const active = t.id === value;
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        type: "button",
        onClick: () => onChange && onChange(t.id),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '7px 14px',
          border: 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: fs,
          fontWeight: 600,
          cursor: 'pointer',
          borderRadius: 'var(--radius-md)',
          whiteSpace: 'nowrap',
          background: active ? 'var(--surface-card)' : 'transparent',
          color: active ? 'var(--text-strong)' : 'var(--text-muted)',
          boxShadow: active ? 'var(--shadow-xs)' : 'none',
          transition: 'all var(--dur-fast) var(--ease-out)'
        }
      }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: active ? 'var(--primary-600)' : 'var(--text-faint)'
        }
      }, t.count));
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, norm.map(t => {
    const active = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => onChange && onChange(t.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '11px 2px',
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: fs,
        fontWeight: 600,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        color: active ? 'var(--primary-700)' : 'var(--text-muted)',
        borderBottom: `2px solid ${active ? 'var(--primary-600)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        padding: '1px 6px',
        borderRadius: 999,
        background: active ? 'var(--primary-50)' : 'var(--surface-sunken)',
        color: active ? 'var(--primary-700)' : 'var(--text-faint)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/App.jsx
try { (() => {
// WheelMatch AI — App shell + router.
(function () {
  const {
    Sidebar,
    Topbar
  } = window.WMShell;
  const D = window.WMData;
  const META = {
    dashboard: {
      title: 'Dashboard',
      crumb: 'Vue d\'ensemble'
    },
    missions: {
      title: 'Missions',
      crumb: 'Pipeline'
    },
    shortlist: {
      title: 'Shortlist',
      crumb: 'Pipeline · Matching'
    },
    talents: {
      title: 'Talents',
      crumb: 'Base de talents'
    },
    talent: {
      title: 'Fiche talent',
      crumb: 'Pipeline · Shortlist'
    },
    cv: {
      title: 'CV Generator',
      crumb: 'Pipeline · CV mission-ready'
    },
    history: {
      title: 'Historique',
      crumb: 'Cabinet'
    },
    templates: {
      title: 'Templates',
      crumb: 'Cabinet'
    },
    settings: {
      title: 'Paramètres',
      crumb: 'Cabinet'
    }
  };
  function App() {
    const [page, setPage] = React.useState('dashboard');
    const [missionPhase, setMissionPhase] = React.useState('input');
    const [talentId, setTalentId] = React.useState('t1');
    const scrollRef = React.useRef(null);
    function nav(p) {
      setPage(p);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }
    const goMission = () => nav('missions');
    const goShortlist = () => nav('shortlist');
    const openTalent = id => {
      setTalentId(id);
      nav('talent');
    };
    const goCV = id => {
      if (id) setTalentId(id);
      nav('cv');
    };
    const goTalent = id => {
      if (id) setTalentId(id);
      nav('talent');
    };

    // sidebar active highlight maps sub-pages to their nav root
    const navActive = page === 'talent' ? 'shortlist' : page;
    const meta = META[page] || META.dashboard;
    let content;
    if (page === 'dashboard') content = /*#__PURE__*/React.createElement(window.WMDashboard, {
      goMission: goMission
    });else if (page === 'missions') content = /*#__PURE__*/React.createElement(window.WMMissions, {
      phase: missionPhase,
      setPhase: setMissionPhase,
      goShortlist: goShortlist
    });else if (page === 'shortlist' || page === 'talents') content = /*#__PURE__*/React.createElement(window.WMShortlist, {
      onOpen: openTalent
    });else if (page === 'talent') content = /*#__PURE__*/React.createElement(window.WMTalentDetail, {
      talentId: talentId,
      goShortlist: goShortlist,
      goCV: goCV
    });else if (page === 'cv') content = /*#__PURE__*/React.createElement(window.WMCVGenerator, {
      talentId: talentId,
      goTalent: goTalent
    });else if (page === 'history') content = /*#__PURE__*/React.createElement(window.WMHistory, null);else if (page === 'templates') content = /*#__PURE__*/React.createElement(window.WMTemplates, null);else if (page === 'settings') content = /*#__PURE__*/React.createElement(window.WMSettings, null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        background: 'var(--bg-app)'
      }
    }, /*#__PURE__*/React.createElement(Sidebar, {
      page: navActive,
      setPage: nav
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Topbar, {
      title: meta.title,
      crumb: meta.crumb
    }), /*#__PURE__*/React.createElement("main", {
      ref: scrollRef,
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '28px 32px 60px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto'
      }
    }, content))));
  }
  window.WMApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/CVGenerator.jsx
try { (() => {
// WheelMatch AI — CV Generator: options, preview, diff, pitch, questions.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    Card,
    Button,
    Badge,
    Switch,
    Tabs,
    Checkbox,
    ConfidenceBadge,
    Avatar,
    ScoreGauge
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const {
    PageHeader,
    SectionLabel
  } = window.WMShell;
  function OptionGroup({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, label), children);
  }

  // ---- CV preview (mission-ready) ----
  function CVPreview({
    t,
    anon,
    tone
  }) {
    const name = anon ? `Candidat ${t.name.split(' ')[0][0]}. ${t.name.split(' ')[1][0]}.` : t.name;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--navy-900)',
        padding: '22px 26px',
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, !anon ? /*#__PURE__*/React.createElement(Avatar, {
      name: t.name,
      size: "lg"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 999,
        background: 'rgba(255,255,255,0.12)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 800,
        color: '#fff',
        letterSpacing: '-0.01em'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--primary-400)',
        fontWeight: 600
      }
    }, t.title, " \xB7 ", t.seniority, " d'exp\xE9rience")), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark-light.svg",
      width: "30",
      height: "30",
      alt: "",
      style: {
        opacity: 0.95
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 26px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
        marginBottom: 7
      }
    }, "Synth\xE8se orient\xE9e mission"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 18px',
        fontSize: 13.5,
        color: 'var(--text-body)',
        lineHeight: 1.55
      }
    }, t.summary), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
        marginBottom: 9
      }
    }, "Comp\xE9tences cl\xE9s"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 18
      }
    }, t.stack.map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--primary-700)',
        background: 'var(--primary-50)',
        padding: '3px 9px',
        borderRadius: 'var(--radius-sm)'
      }
    }, s))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
        marginBottom: 9
      }
    }, "Exp\xE9riences pertinentes"), D.cvDiff.kept.map((k, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        paddingBottom: 12,
        marginBottom: 12,
        borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 999,
        background: 'var(--primary-500)',
        marginTop: 6,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, k.txt), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, k.note))))));
  }

  // ---- Diff panel ----
  function DiffPanel() {
    const Block = ({
      icon,
      color,
      bg,
      title,
      count,
      children
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 'var(--radius-sm)',
        background: bg,
        color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, title), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm",
      style: {
        marginLeft: 'auto'
      }
    }, count)), children);
    const row = (main, note, strike) => /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '9px 12px',
        background: 'var(--surface-inset)',
        borderRadius: 'var(--radius-sm)',
        marginBottom: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: strike ? 'var(--text-faint)' : 'var(--text-strong)',
        textDecoration: strike ? 'line-through' : 'none',
        fontWeight: 500
      }
    }, main), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, note));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Block, {
      icon: "check",
      color: "var(--success-700)",
      bg: "var(--success-50)",
      title: "\xC9l\xE9ments conserv\xE9s",
      count: D.cvDiff.kept.length
    }, D.cvDiff.kept.map((k, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, row(k.txt, k.note, false)))), /*#__PURE__*/React.createElement(Block, {
      icon: "edit",
      color: "var(--info-600)",
      bg: "var(--info-50)",
      title: "\xC9l\xE9ments reformul\xE9s",
      count: D.cvDiff.reworded.length
    }, D.cvDiff.reworded.map((k, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '9px 12px',
        background: 'var(--surface-inset)',
        borderRadius: 'var(--radius-sm)',
        marginBottom: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-faint)',
        textDecoration: 'line-through'
      }
    }, k.from), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-strong)',
        fontWeight: 600,
        marginTop: 3,
        display: 'flex',
        gap: 6,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 14,
      color: "var(--info-600)",
      style: {
        marginTop: 2,
        flex: 'none'
      }
    }), k.to)))), /*#__PURE__*/React.createElement(Block, {
      icon: "trash",
      color: "var(--danger-600)",
      bg: "var(--danger-50)",
      title: "\xC9l\xE9ments supprim\xE9s",
      count: D.cvDiff.removed.length
    }, D.cvDiff.removed.map((k, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, row(k.txt, k.note, true)))));
  }

  // ---- Pitch panel ----
  function PitchPanel() {
    const [v, setV] = React.useState('premium');
    const [copied, setCopied] = React.useState(false);
    const map = {
      short: D.pitch.short,
      premium: D.pitch.premium,
      linkedin: D.pitch.linkedin
    };
    function copy() {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: v,
      onChange: setV,
      tabs: [{
        id: 'short',
        label: 'Version courte'
      }, {
        id: 'premium',
        label: 'Premium'
      }, {
        id: 'linkedin',
        label: 'LinkedIn'
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      variant: copied ? 'primary' : 'secondary',
      size: "sm",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: copied ? 'check' : 'copy',
        size: 15
      }),
      onClick: copy
    }, copied ? 'Copié !' : 'Copier')), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-inset)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '18px 20px',
        fontSize: 13.5,
        color: 'var(--text-body)',
        lineHeight: 1.6,
        whiteSpace: 'pre-wrap',
        fontFamily: 'var(--font-sans)'
      }
    }, map[v]));
  }

  // ---- Questions panel ----
  function QuestionsPanel() {
    const [items, setItems] = React.useState(D.questions);
    const toggle = id => setItems(arr => arr.map(q => q.id === id ? {
      ...q,
      checked: !q.checked
    } : q));
    const done = items.filter(q => q.checked).length;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, "Questions \xE0 valider avant envoi"), /*#__PURE__*/React.createElement(Badge, {
      tone: done === items.length ? 'success' : 'warning',
      style: {
        marginLeft: 'auto'
      }
    }, done, " / ", items.length, " valid\xE9es")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, items.map(q => /*#__PURE__*/React.createElement("div", {
      key: q.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        background: q.checked ? 'var(--success-50)' : 'var(--surface-card)',
        border: `1px solid ${q.checked ? 'var(--success-100)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        transition: 'background .15s'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: q.checked,
      onChange: () => toggle(q.id),
      tone: "success"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-body)',
        flex: 1
      }
    }, q.txt), /*#__PURE__*/React.createElement(ConfidenceBadge, {
      state: q.state,
      size: "sm"
    }, q.state === 'confirmed' ? 'Validé' : 'À confirmer')))));
  }
  function CVGenerator({
    talentId,
    goTalent
  }) {
    const t = D.talents.find(x => x.id === talentId) || D.talents[0];
    const [len, setLen] = React.useState('one');
    const [tone, setTone] = React.useState('sobre');
    const [anon, setAnon] = React.useState(false);
    const [tab, setTab] = React.useState('cv');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "CV mission-ready",
      subtitle: `Dossier généré pour ${t.name} — ${D.currentMission.title} · ${D.currentMission.client}`,
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "chevronRight",
          size: 16,
          style: {
            transform: 'rotate(180deg)'
          }
        }),
        onClick: () => goTalent(t.id)
      }, "Retour au profil")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '290px 1fr',
        gap: 18,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 0
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "settings",
      accent: "var(--ai-600)"
    }, "Options de g\xE9n\xE9ration"), /*#__PURE__*/React.createElement(OptionGroup, {
      label: "Longueur"
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      size: "sm",
      value: len,
      onChange: setLen,
      tabs: [{
        id: 'one',
        label: '1 page'
      }, {
        id: 'two',
        label: '2 pages'
      }, {
        id: 'full',
        label: 'Dossier'
      }]
    })), /*#__PURE__*/React.createElement(OptionGroup, {
      label: "Ton"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 7
      }
    }, [['sobre', 'Sobre'], ['commercial', 'Commercial'], ['ao', 'Appel d\'offres'], ['grand', 'Grand compte']].map(([id, lb]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setTone(id),
      style: {
        padding: '6px 12px',
        fontSize: 12.5,
        fontWeight: 600,
        fontFamily: 'var(--font-sans)',
        cursor: 'pointer',
        borderRadius: 'var(--radius-full)',
        border: `1px solid ${tone === id ? 'var(--ai-600)' : 'var(--border-default)'}`,
        background: tone === id ? 'var(--ai-50)' : 'var(--surface-card)',
        color: tone === id ? 'var(--ai-700)' : 'var(--text-body)'
      }
    }, lb)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0 4px',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Anonymisation"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "Masquer nom & coordonn\xE9es")), /*#__PURE__*/React.createElement(Switch, {
      checked: anon,
      onChange: setAnon,
      tone: "ai"
    }))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "download"
    }, "Export"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "file",
        size: 16
      })
    }, "Exporter en PDF"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "file",
        size: 16
      })
    }, "Exporter en Word"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 16
      })
    }, "Envoyer au client")))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: 20
      },
      tabs: [{
        id: 'cv',
        label: 'CV shorté'
      }, {
        id: 'diff',
        label: 'Diff avant / après'
      }, {
        id: 'pitch',
        label: 'Pitch client'
      }, {
        id: 'questions',
        label: 'Questions candidat'
      }]
    }), tab === 'cv' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        maxWidth: 560,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(CVPreview, {
      t: t,
      anon: anon,
      tone: tone
    })), tab === 'diff' && /*#__PURE__*/React.createElement(DiffPanel, null), tab === 'pitch' && /*#__PURE__*/React.createElement(PitchPanel, null), tab === 'questions' && /*#__PURE__*/React.createElement(QuestionsPanel, null))));
  }
  window.WMCVGenerator = CVGenerator;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/CVGenerator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/Dashboard.jsx
try { (() => {
// WheelMatch AI — Dashboard screen.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    StatCard,
    Card,
    Button,
    Badge,
    Avatar,
    ScoreGauge
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const {
    PageHeader,
    SectionLabel
  } = window.WMShell;
  const ACT_ICON = {
    cv: {
      name: 'file',
      color: 'var(--ai-600)',
      bg: 'var(--ai-50)'
    },
    ai: {
      name: 'sparkles',
      color: 'var(--ai-600)',
      bg: 'var(--ai-50)'
    },
    send: {
      name: 'mail',
      color: 'var(--info-600)',
      bg: 'var(--info-50)'
    },
    win: {
      name: 'checkCircle',
      color: 'var(--success-600)',
      bg: 'var(--success-50)'
    }
  };
  function ActivityRow({
    a
  }) {
    const ic = ACT_ICON[a.kind] || ACT_ICON.cv;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        padding: '13px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        flex: 'none',
        borderRadius: 'var(--radius-md)',
        background: ic.bg,
        color: ic.color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic.name,
      size: 17
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-body)',
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-strong)',
        fontWeight: 600
      }
    }, a.who), " ", a.action, " ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-strong)',
        fontWeight: 600
      }
    }, a.target)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, a.ctx)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text-faint)',
        whiteSpace: 'nowrap',
        flex: 'none'
      }
    }, a.time));
  }
  function Dashboard({
    goMission
  }) {
    const m = D.currentMission;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: `Bonjour ${D.user.name.split(' ')[0]} 👋`,
      subtitle: "Voici l'\xE9tat de votre pipeline de placement cette semaine.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "ai",
        size: "lg",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 17
        }),
        onClick: goMission
      }, "Nouvelle mission")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 22
      }
    }, D.kpis.map(k => /*#__PURE__*/React.createElement(StatCard, {
      key: k.id,
      label: k.label,
      value: k.value,
      unit: k.unit,
      trend: k.trend,
      trendDir: k.dir,
      accent: k.accent,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: k.icon,
        size: 17
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.55fr 1fr',
        gap: 18,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "zap",
      accent: "var(--primary-600)"
    }, "Mission prioritaire"), /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      dot: true
    }, "Urgent \xB7 d\xE9marrage < 1 mois")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 20,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(ScoreGauge, {
      value: 91,
      size: 104,
      label: "Top match"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 4px',
        fontSize: 20,
        fontWeight: 700,
        color: 'var(--text-strong)',
        letterSpacing: '-0.01em'
      }
    }, m.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        color: 'var(--text-muted)',
        fontSize: 13.5,
        marginBottom: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "building",
      size: 14
    }), m.client), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 14
    }), m.location), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "euro",
      size: 14
    }), m.budget)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Thomas Martin",
      size: "sm",
      status: "available"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "Thomas Martin"), " \u2014 meilleur profil identifi\xE9"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 15
      }),
      onClick: goMission,
      style: {
        marginLeft: 'auto'
      }
    }, "Ouvrir"))))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "refresh"
    }, "Activit\xE9 r\xE9cente"), /*#__PURE__*/React.createElement("div", null, D.activity.map(a => /*#__PURE__*/React.createElement(ActivityRow, {
      key: a.id,
      a: a
    }))))));
  }
  window.WMDashboard = Dashboard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/History.jsx
try { (() => {
// WheelMatch AI — History: table of sent CVs with statuses.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    Card,
    Button,
    Badge,
    Avatar,
    Tabs
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const {
    PageHeader
  } = window.WMShell;
  function History() {
    const [filter, setFilter] = React.useState('all');
    const rows = filter === 'all' ? D.history : D.history.filter(r => r.status === filter);
    const th = {
      textAlign: 'left',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      padding: '0 16px 12px'
    };
    const td = {
      padding: '14px 16px',
      fontSize: 14,
      color: 'var(--text-body)',
      borderTop: '1px solid var(--border-subtle)'
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Historique des envois",
      subtitle: "Tous les CV envoy\xE9s aux clients, avec leur statut de suivi.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 16
        })
      }, "Exporter")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: filter,
      onChange: setFilter,
      tabs: [{
        id: 'all',
        label: 'Tous',
        count: D.history.length
      }, {
        id: 'sent',
        label: 'Envoyés'
      }, {
        id: 'interview',
        label: 'Entretiens'
      }, {
        id: 'placed',
        label: 'Placés'
      }, {
        id: 'rejected',
        label: 'Refusés'
      }]
    })), /*#__PURE__*/React.createElement(Card, {
      padding: "md"
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Candidat"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Mission"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Client"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Recruteur"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Date"), /*#__PURE__*/React.createElement("th", {
      style: {
        ...th,
        textAlign: 'right'
      }
    }, "Statut"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => {
      const st = D.historyStatus[r.status];
      return /*#__PURE__*/React.createElement("tr", {
        key: r.id
      }, /*#__PURE__*/React.createElement("td", {
        style: td
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.candidate,
        size: "sm"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)'
        }
      }, r.candidate))), /*#__PURE__*/React.createElement("td", {
        style: td
      }, r.mission), /*#__PURE__*/React.createElement("td", {
        style: {
          ...td,
          fontWeight: 600,
          color: 'var(--text-strong)'
        }
      }, r.client), /*#__PURE__*/React.createElement("td", {
        style: td
      }, r.recruiter), /*#__PURE__*/React.createElement("td", {
        style: {
          ...td,
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--text-muted)'
        }
      }, r.date), /*#__PURE__*/React.createElement("td", {
        style: {
          ...td,
          textAlign: 'right'
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: st.tone,
        dot: true
      }, st.label)));
    })))));
  }
  window.WMHistory = History;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/History.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/Missions.jsx
try { (() => {
// WheelMatch AI — Missions: paste brief → AI analysis → extracted criteria.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    Card,
    Button,
    Badge,
    Textarea,
    Input,
    Select
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const {
    PageHeader,
    SectionLabel
  } = window.WMShell;
  function Spinner() {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.6",
      strokeLinecap: "round",
      style: {
        animation: 'wm-spin 0.8s linear infinite'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 1 1-6.2-8.5"
    })));
  }
  function CriteriaChips({
    items,
    tone
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, items.map(c => /*#__PURE__*/React.createElement(Badge, {
      key: c,
      tone: tone
    }, c)));
  }
  function Field({
    icon,
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--text-faint)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 13
    }), label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, value));
  }
  function Missions({
    phase,
    setPhase,
    goShortlist
  }) {
    const m = D.currentMission;
    const [text, setText] = React.useState(m.raw);
    function analyze() {
      setPhase('analyzing');
      setTimeout(() => setPhase('result'), 1700);
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Nouvelle mission",
      subtitle: "Collez la fiche mission ou le brief client. L'IA en extrait les crit\xE8res structur\xE9s \u2014 sans rien inventer.",
      actions: phase === 'result' && /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "refresh",
          size: 16
        }),
        onClick: () => setPhase('input')
      }, "Nouvelle analyse")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: phase === 'result' ? '0.85fr 1.15fr' : '1fr',
        gap: 18,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "file"
    }, "Fiche mission"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Client",
      defaultValue: m.client
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Intitul\xE9 du poste",
      defaultValue: m.title
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Brief client",
      rows: phase === 'result' ? 8 : 12,
      value: text,
      onChange: e => setText(e.target.value)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ai",
      size: "lg",
      disabled: phase === 'analyzing',
      leftIcon: phase === 'analyzing' ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(Icon, {
        name: "sparkles",
        size: 17
      }),
      onClick: analyze
    }, phase === 'analyzing' ? 'Analyse en cours…' : 'Analyser avec l\'IA'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-faint)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 13,
      color: "var(--success-600)"
    }), " Aucune donn\xE9e invent\xE9e \u2014 extraction sourc\xE9e"))), phase === 'result' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "target",
      accent: "var(--ai-600)"
    }, "Crit\xE8res extraits"), /*#__PURE__*/React.createElement(Badge, {
      tone: "ai",
      dot: true
    }, "Analys\xE9 par IA \xB7 7 crit\xE8res")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Field, {
      icon: "users",
      label: "R\xF4le",
      value: m.role
    }), /*#__PURE__*/React.createElement(Field, {
      icon: "trendUp",
      label: "S\xE9niorit\xE9",
      value: m.seniority
    }), /*#__PURE__*/React.createElement(Field, {
      icon: "building",
      label: "Secteur",
      value: m.sector
    }), /*#__PURE__*/React.createElement(Field, {
      icon: "mapPin",
      label: "Localisation",
      value: m.location
    }), /*#__PURE__*/React.createElement(Field, {
      icon: "globe",
      label: "Remote",
      value: m.remote
    }), /*#__PURE__*/React.createElement(Field, {
      icon: "euro",
      label: "Budget",
      value: m.budget
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "checkCircle",
      accent: "var(--success-600)"
    }, "Comp\xE9tences obligatoires"), /*#__PURE__*/React.createElement(CriteriaChips, {
      items: m.mustHave,
      tone: "success"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "plus",
      accent: "var(--warning-600)"
    }, "Comp\xE9tences souhait\xE9es"), /*#__PURE__*/React.createElement(CriteriaChips, {
      items: m.niceToHave,
      tone: "warning"
    }))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        background: 'var(--surface-ai-tint)',
        borderColor: 'var(--ai-100)'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "alert",
      accent: "var(--warning-700)"
    }, "Points \xE0 clarifier avec le client"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, m.clarify.map((q, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 14,
        color: 'var(--text-body)',
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flex: 'none',
        borderRadius: 999,
        background: 'var(--warning-100)',
        color: 'var(--warning-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11,
        fontWeight: 700,
        marginTop: 1
      }
    }, i + 1), q)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 17
      }),
      onClick: goShortlist
    }, "Trouver les meilleurs profils")))));
  }
  window.WMMissions = Missions;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/Missions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/Settings.jsx
try { (() => {
// WheelMatch AI — Settings: team & permissions.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    Card,
    Button,
    Badge,
    Avatar,
    Switch,
    Select
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const {
    PageHeader,
    SectionLabel
  } = window.WMShell;
  const PERM = {
    Admin: 'primary',
    'Éditeur': 'info',
    Lecture: 'neutral'
  };
  function Settings() {
    const [aiCheck, setAiCheck] = React.useState(true);
    const [anonDefault, setAnonDefault] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Param\xE8tres de l'\xE9quipe",
      subtitle: "G\xE9rez les membres, les permissions et les r\xE9glages IA du cabinet.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 16
        })
      }, "Inviter un membre")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 18,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "users"
    }, "Membres de l'\xE9quipe \xB7 ", D.team.length), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, D.team.map((u, i) => /*#__PURE__*/React.createElement("div", {
      key: u.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 0',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: u.name,
      size: "md",
      status: u.status
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, u.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, u.role, " \xB7 ", u.email)), /*#__PURE__*/React.createElement(Badge, {
      tone: PERM[u.perm]
    }, u.perm), /*#__PURE__*/React.createElement("button", {
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-faint)',
        padding: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more",
      size: 18
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "shield",
      accent: "var(--success-600)"
    }, "Garde-fous IA"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
        padding: '10px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Mode anti-hallucination"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, "Signaler chaque comp\xE9tence non sourc\xE9e dans le CV.")), /*#__PURE__*/React.createElement(Switch, {
      checked: aiCheck,
      onChange: setAiCheck,
      tone: "ai"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
        padding: '10px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Anonymisation par d\xE9faut"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, "Masquer le candidat sur les premiers envois.")), /*#__PURE__*/React.createElement(Switch, {
      checked: anonDefault,
      onChange: setAnonDefault
    }))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "settings"
    }, "Pr\xE9f\xE9rences cabinet"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Langue des CV g\xE9n\xE9r\xE9s",
      options: ['Français', 'Anglais', 'Bilingue FR / EN']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Template par d\xE9faut",
      options: D.templates.map(t => t.name)
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Devise TJM",
      options: ['Euro (€)', 'Dollar ($)', 'Livre (£)']
    }))))));
  }
  window.WMSettings = Settings;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/Settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/Shortlist.jsx
try { (() => {
// WheelMatch AI — Shortlist: ranked profiles with scores + filters.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    Card,
    Button,
    Badge,
    Avatar,
    ScoreGauge,
    Select
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const {
    PageHeader,
    SectionLabel
  } = window.WMShell;
  const STATUS = {
    available: {
      label: 'Disponible',
      tone: 'success'
    },
    busy: {
      label: 'En mission',
      tone: 'warning'
    },
    off: {
      label: 'Indisponible',
      tone: 'neutral'
    }
  };
  function MiniBar({
    label,
    value
  }) {
    const color = value >= 80 ? 'var(--success-500)' : value >= 65 ? 'var(--warning-500)' : 'var(--danger-500)';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 11,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, value)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        borderRadius: 999,
        background: 'var(--score-track)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${value}%`,
        height: '100%',
        borderRadius: 999,
        background: color
      }
    })));
  }
  function ProfileCard({
    t,
    rank,
    onOpen
  }) {
    const st = STATUS[t.status];
    const top3 = Object.entries(t.breakdown).slice(0, 4);
    return /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      padding: "md",
      onClick: () => onOpen(t.id),
      style: {
        display: 'flex',
        gap: 18,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        width: 108,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(ScoreGauge, {
      value: t.score,
      size: 84
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--text-faint)',
        letterSpacing: '0.04em'
      }
    }, "#", rank, " MATCH")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.name,
      size: "md",
      status: t.status
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, t.name), /*#__PURE__*/React.createElement(Badge, {
      tone: st.tone,
      size: "sm",
      dot: true
    }, st.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, t.title, " \xB7 ", t.seniority, " \xB7 ", t.contract)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 15,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, t.tjm, " \u20AC"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--text-faint)'
      }
    }, t.avail))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 10
      }
    }, top3.map(([k, v]) => /*#__PURE__*/React.createElement(MiniBar, {
      key: k,
      label: k,
      value: v
    })))), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 20,
      color: "var(--text-faint)"
    }));
  }
  function FilterBar() {
    const wrap = {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      alignItems: 'center'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(Select, {
      options: ['Disponibilité : toutes', 'Disponible', 'Sous 1 mois'],
      containerStyle: {
        minWidth: 170
      }
    }), /*#__PURE__*/React.createElement(Select, {
      options: ['Stack : Java', 'Toutes stacks', 'DevOps', 'Frontend'],
      containerStyle: {
        minWidth: 150
      }
    }), /*#__PURE__*/React.createElement(Select, {
      options: ['Localisation : Lille', 'Toutes', 'Remote'],
      containerStyle: {
        minWidth: 160
      }
    }), /*#__PURE__*/React.createElement(Select, {
      options: ['TJM : ≤ 700 €', 'Tous', '≤ 600 €'],
      containerStyle: {
        minWidth: 130
      }
    }), /*#__PURE__*/React.createElement(Select, {
      options: ['Statut : tous', 'Freelance', 'CDI'],
      containerStyle: {
        minWidth: 130
      }
    }));
  }
  function Shortlist({
    onOpen
  }) {
    const m = D.currentMission;
    const talents = [...D.talents].sort((a, b) => b.score - a.score);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Shortlist",
      subtitle: `${talents.length} profils classés pour la mission. Le score combine 7 dimensions pondérées.`,
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 16
        })
      }, "Exporter la shortlist")
    }), /*#__PURE__*/React.createElement(Card, {
      padding: "md",
      style: {
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        background: 'var(--navy-900)',
        borderColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flex: 'none',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(74,111,240,0.22)',
        color: 'var(--primary-400)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "briefcase",
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: '#fff'
      }
    }, m.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'rgba(220,228,251,0.7)'
      }
    }, m.client, " \xB7 ", m.location, " \xB7 ", m.budget)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        maxWidth: 320,
        justifyContent: 'flex-end'
      }
    }, m.mustHave.slice(0, 4).map(s => /*#__PURE__*/React.createElement(Badge, {
      key: s,
      tone: "primary",
      size: "sm"
    }, s)), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm"
    }, "+", m.mustHave.length - 4))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(FilterBar, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, talents.map((t, i) => /*#__PURE__*/React.createElement(ProfileCard, {
      key: t.id,
      t: t,
      rank: i + 1,
      onOpen: onOpen
    }))));
  }
  window.WMShortlist = Shortlist;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/Shortlist.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/TalentDetail.jsx
try { (() => {
// WheelMatch AI — Talent detail: score breakdown + confidence (anti-hallucination).
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    Card,
    Button,
    Badge,
    Avatar,
    ScoreGauge,
    ScoreBar,
    ConfidenceBadge
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const {
    PageHeader,
    SectionLabel
  } = window.WMShell;
  function Meta({
    icon,
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 15,
      color: "var(--text-faint)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        flex: 1
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, value));
  }
  function ConfidenceList({
    title,
    state,
    items,
    icon,
    accent
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: icon,
      accent: accent
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ConfidenceBadge, {
      state: state,
      size: "sm"
    }, state === 'confirmed' ? 'Confirmé' : state === 'pending' ? 'À confirmer' : 'Absent'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-body)',
        flex: 1
      }
    }, it), state !== 'absent' && /*#__PURE__*/React.createElement("a", {
      style: {
        fontSize: 12,
        color: 'var(--text-link)',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        cursor: 'pointer',
        textDecoration: 'none',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "link",
      size: 12
    }), " source CV")))));
  }
  function TalentDetail({
    talentId,
    goShortlist,
    goCV
  }) {
    const t = D.talents.find(x => x.id === talentId) || D.talents[0];
    const bd = Object.entries(t.breakdown);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: goShortlist,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-muted)',
        fontSize: 13,
        fontWeight: 600,
        padding: 0,
        marginBottom: 14,
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 15,
      style: {
        transform: 'rotate(180deg)'
      }
    }), " Retour \xE0 la shortlist"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 18,
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.name,
      size: "lg",
      status: t.status
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 26,
        fontWeight: 700,
        color: 'var(--text-strong)',
        letterSpacing: '-0.02em'
      }
    }, t.name), /*#__PURE__*/React.createElement(Badge, {
      tone: t.status === 'available' ? 'success' : 'warning',
      dot: true
    }, t.avail)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '4px 0 0',
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, t.title, " \xB7 ", t.seniority, " d'exp\xE9rience \xB7 ", t.contract)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 16
      })
    }, "Contacter"), /*#__PURE__*/React.createElement(Button, {
      variant: "ai",
      size: "md",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "sparkles",
        size: 16
      }),
      onClick: () => goCV(t.id)
    }, "G\xE9n\xE9rer CV mission-ready"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 18,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(ScoreGauge, {
      value: t.score,
      size: 150,
      label: "Matching global"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-body)',
        lineHeight: 1.5,
        margin: '14px 0 0',
        textAlign: 'left'
      }
    }, t.summary)), /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "layers"
    }, "Stack principale"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 18
      }
    }, t.stack.map(s => /*#__PURE__*/React.createElement(Badge, {
      key: s,
      tone: "primary"
    }, s))), /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "briefcase"
    }, "Profil"), /*#__PURE__*/React.createElement(Meta, {
      icon: "euro",
      label: "TJM",
      value: `${t.tjm} € / jour`
    }), /*#__PURE__*/React.createElement(Meta, {
      icon: "mapPin",
      label: "Localisation",
      value: t.location
    }), /*#__PURE__*/React.createElement(Meta, {
      icon: "globe",
      label: "Mobilit\xE9",
      value: t.remote
    }), /*#__PURE__*/React.createElement(Meta, {
      icon: "message",
      label: "Langues",
      value: t.languages.join(', ')
    }), /*#__PURE__*/React.createElement(Meta, {
      icon: "history",
      label: "Historique",
      value: `${t.missionsCount} missions · ${t.placements} placements`
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "target",
      accent: "var(--primary-600)"
    }, "D\xE9tail du score \xB7 7 dimensions"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 11
      }
    }, bd.map(([k, v]) => /*#__PURE__*/React.createElement(ScoreBar, {
      key: k,
      label: k,
      value: v
    })))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 17,
      color: "var(--success-600)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, "Lecture anti-hallucination"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm",
      style: {
        marginLeft: 'auto'
      }
    }, "Sourc\xE9 depuis le CV")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(ConfidenceList, {
      title: "Comp\xE9tences prouv\xE9es",
      state: "confirmed",
      items: t.proven,
      icon: "checkCircle",
      accent: "var(--success-700)"
    }), /*#__PURE__*/React.createElement(ConfidenceList, {
      title: "\xC0 confirmer avec le candidat",
      state: "pending",
      items: t.confirm,
      icon: "alert",
      accent: "var(--warning-700)"
    }), t.absent.length > 0 && /*#__PURE__*/React.createElement(ConfidenceList, {
      title: "Absent du CV",
      state: "absent",
      items: t.absent,
      icon: "x",
      accent: "var(--text-muted)"
    }))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        background: 'var(--warning-50)',
        borderColor: 'var(--warning-100)'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "alert",
      accent: "var(--warning-700)"
    }, "Points de vigilance"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, t.vigilance.map((v, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 9,
        alignItems: 'flex-start',
        fontSize: 14,
        color: 'var(--text-body)',
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 16,
      color: "var(--warning-600)",
      style: {
        flex: 'none',
        marginTop: 1
      }
    }), v)))))));
  }
  window.WMTalentDetail = TalentDetail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/TalentDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/Templates.jsx
try { (() => {
// WheelMatch AI — Templates: cabinet charte editor + preview.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    Card,
    Button,
    Badge,
    Switch
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const {
    PageHeader,
    SectionLabel
  } = window.WMShell;
  const COLORS = ['#2A52E0', '#0B1330', '#7C3AED', '#14945A', '#B42318', '#0E7CC0'];
  function Templates() {
    const [active, setActive] = React.useState(D.templates[0].id);
    const [color, setColor] = React.useState('#2A52E0');
    const tpl = D.templates.find(t => t.id === active);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Templates & charte graphique",
      subtitle: "D\xE9finissez vos mod\xE8les de CV. Tous les dossiers g\xE9n\xE9r\xE9s respecteront la charte du cabinet.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 16
        })
      }, "Nouveau template")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gap: 18,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, D.templates.map(t => /*#__PURE__*/React.createElement(Card, {
      key: t.id,
      interactive: true,
      selected: t.id === active,
      padding: "md",
      onClick: () => {
        setActive(t.id);
        setColor(t.primary);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        background: t.primary,
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "template",
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, t.name), t.active && /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      size: "sm"
    }, "Par d\xE9faut")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, t.desc)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "edit",
      accent: "var(--primary-600)"
    }, "Personnalisation"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, "Logo du cabinet"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1.5px dashed var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: '20px',
        textAlign: 'center',
        marginBottom: 18,
        background: 'var(--surface-inset)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 22,
      color: "var(--text-faint)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, "Glissez votre logo ici \xB7 PNG, SVG")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, "Couleur de marque"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 18
      }
    }, COLORS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setColor(c),
      style: {
        width: 30,
        height: 30,
        borderRadius: 999,
        background: c,
        cursor: 'pointer',
        border: color === c ? '2px solid var(--text-strong)' : '2px solid transparent',
        outline: color === c ? '2px solid #fff' : 'none',
        outlineOffset: -4
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, "Structure obligatoire"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, tpl.sections.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '8px 11px',
        background: 'var(--surface-inset)',
        borderRadius: 'var(--radius-sm)',
        fontSize: 13.5,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more",
      size: 14,
      color: "var(--text-faint)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 999,
        background: 'var(--primary-50)',
        color: 'var(--primary-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10.5,
        fontWeight: 700
      }
    }, i + 1), s)))), /*#__PURE__*/React.createElement(Card, {
      padding: "md"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      icon: "eye"
    }, "Aper\xE7u du rendu"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: color,
        padding: '18px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(255,255,255,0.18)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "building",
      size: 17,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 9,
        width: 120,
        background: 'rgba(255,255,255,0.92)',
        borderRadius: 3,
        marginBottom: 6
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        width: 80,
        background: 'rgba(255,255,255,0.55)',
        borderRadius: 3
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 18px'
      }
    }, tpl.sections.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color,
        marginBottom: 6
      }
    }, s), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--slate-200)',
        borderRadius: 3,
        marginBottom: 5
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        width: '85%',
        background: 'var(--slate-200)',
        borderRadius: 3,
        marginBottom: 5
      }
    }), i === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        width: '70%',
        background: 'var(--slate-200)',
        borderRadius: 3
      }
    }))))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      style: {
        marginTop: 14
      },
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      })
    }, "Enregistrer le template")))));
  }
  window.WMTemplates = Templates;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/Templates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/data.jsx
try { (() => {
// WheelMatch AI — realistic French mock data. Shared via window.WMData.
const WMData = {
  user: {
    name: 'Camille Aubert',
    role: 'Consultante recrutement IT',
    firm: 'Talent Partners'
  },
  kpis: [{
    id: 'missions',
    label: 'Missions actives',
    value: '14',
    trend: '+3',
    dir: 'up',
    accent: 'primary',
    icon: 'briefcase'
  }, {
    id: 'profils',
    label: 'Profils proposés',
    value: '23',
    unit: '',
    trend: '+8',
    dir: 'up',
    accent: 'info',
    icon: 'users'
  }, {
    id: 'matching',
    label: 'Matching moyen',
    value: '82',
    unit: '%',
    trend: '+4',
    dir: 'up',
    accent: 'success',
    icon: 'target'
  }, {
    id: 'cv',
    label: 'CV générés',
    value: '47',
    trend: '+12',
    dir: 'up',
    accent: 'ai',
    icon: 'file'
  }, {
    id: 'entretiens',
    label: 'Entretiens obtenus',
    value: '9',
    trend: '+2',
    dir: 'up',
    accent: 'warning',
    icon: 'message'
  }, {
    id: 'attente',
    label: 'Missions en attente',
    value: '5',
    trend: '-1',
    dir: 'down',
    accent: 'neutral',
    icon: 'clock'
  }],
  activity: [{
    id: 1,
    who: 'Camille Aubert',
    action: 'a généré un CV shorté pour',
    target: 'Thomas Martin',
    ctx: 'Tech Lead Java — BNP Paribas',
    time: 'il y a 12 min',
    kind: 'cv'
  }, {
    id: 2,
    who: 'IA WheelMatch',
    action: 'a analysé la mission',
    target: 'Data Engineer Azure',
    ctx: 'Décathlon — 7 critères extraits',
    time: 'il y a 38 min',
    kind: 'ai'
  }, {
    id: 3,
    who: 'Léa Fontaine',
    action: 'a envoyé un profil à',
    target: 'Société Générale',
    ctx: 'Mehdi Roux — DevOps AWS',
    time: 'il y a 1 h',
    kind: 'send'
  }, {
    id: 4,
    who: 'Société Générale',
    action: 'a demandé un entretien avec',
    target: 'Sarah Benali',
    ctx: 'Lead Backend — démarrage rapide',
    time: 'il y a 2 h',
    kind: 'win'
  }, {
    id: 5,
    who: 'Camille Aubert',
    action: 'a anonymisé le dossier de',
    target: 'Clara Moreau',
    ctx: 'PO Salesforce — grand compte',
    time: 'il y a 3 h',
    kind: 'cv'
  }],
  currentMission: {
    title: 'Tech Lead Java / Spring Boot',
    client: 'BNP Paribas',
    sector: 'Banque / Finance',
    location: 'Lille (59)',
    remote: '2 j sur site / 3 j télétravail',
    start: 'Sous 1 mois',
    budget: '600–680 € / jour',
    urgency: 'high',
    raw: "Nous recherchons un Tech Lead Java / Spring Boot senior pour accompagner la modernisation d'une plateforme bancaire. Expérience microservices, Kubernetes, CI/CD et architecture cloud souhaitée. Contexte agile, équipe de 8 développeurs, 2 jours sur site à Lille, démarrage sous 1 mois.",
    role: 'Tech Lead',
    seniority: 'Senior (8+ ans)',
    mustHave: ['Java 17', 'Spring Boot', 'Microservices', 'Kubernetes', 'CI/CD', 'Architecture cloud'],
    niceToHave: ['Kafka', 'Terraform', 'AWS', 'Leadership d\'équipe', 'Secteur bancaire'],
    softSkills: ['Leadership', 'Communication client', 'Agilité'],
    clarify: ['Le budget 600–680 € couvre-t-il un profil 10+ ans d\'expérience ?', 'La présence sur site Lille est-elle négociable les premières semaines ?', 'Une habilitation bancaire (KYC) est-elle requise au démarrage ?', 'Le périmètre inclut-il du management hiérarchique ou uniquement technique ?']
  },
  talents: [{
    id: 't1',
    name: 'Thomas Martin',
    title: 'Tech Lead Java',
    score: 91,
    status: 'available',
    avail: 'Disponible sous 2 sem.',
    tjm: 650,
    contract: 'Freelance',
    location: 'Lille',
    remote: 'Hybride',
    seniority: '11 ans',
    languages: ['Français', 'Anglais (C1)'],
    stack: ['Java 17', 'Spring Boot', 'Kubernetes', 'Kafka', 'CI/CD', 'AWS'],
    summary: "Tech Lead avec 11 ans d'expérience sur des plateformes Java à forte volumétrie, dont 4 ans en environnement bancaire. A piloté la migration microservices d'un core banking.",
    breakdown: {
      'Compétences techniques': 94,
      'Séniorité': 92,
      'Secteur': 88,
      'Disponibilité': 85,
      'Mobilité': 90,
      'Soft skills': 89,
      'TJM / budget': 96
    },
    proven: ['Java 17', 'Spring Boot', 'Microservices', 'CI/CD', 'Secteur bancaire'],
    confirm: ['Kubernetes (mentionné Docker Swarm)', 'Leadership de 8+ devs'],
    absent: ['Terraform'],
    vigilance: ['Préavis freelance de 2 semaines', 'Souhaite max 2 j sur site'],
    missionsCount: 12,
    placements: 8
  }, {
    id: 't2',
    name: 'Sarah Benali',
    title: 'Lead Backend Engineer',
    score: 84,
    status: 'available',
    avail: 'Disponible immédiatement',
    tjm: 600,
    contract: 'CDI (en poste)',
    location: 'Paris',
    remote: 'Full remote souhaité',
    seniority: '9 ans',
    languages: ['Français', 'Anglais (C1)', 'Arabe'],
    stack: ['Java', 'Spring', 'PostgreSQL', 'Docker', 'Kafka', 'GCP'],
    summary: "Lead Backend orientée systèmes distribués, 9 ans d'expérience. Forte culture qualité et mentoring. Cherche un contexte technique exigeant.",
    breakdown: {
      'Compétences techniques': 90,
      'Séniorité': 85,
      'Secteur': 72,
      'Disponibilité': 95,
      'Mobilité': 60,
      'Soft skills': 88,
      'TJM / budget': 92
    },
    proven: ['Java', 'Spring', 'Microservices', 'Kafka', 'CI/CD'],
    confirm: ['Kubernetes (GKE en contexte perso)', 'Expérience bancaire'],
    absent: ['Architecture cloud AWS'],
    vigilance: ['Souhaite full remote — incompatible 2 j sur site', 'Actuellement en poste, préavis 3 mois'],
    missionsCount: 7,
    placements: 4
  }, {
    id: 't3',
    name: 'Mehdi Roux',
    title: 'DevOps AWS / Kubernetes',
    score: 78,
    status: 'busy',
    avail: 'Disponible sous 6 sem.',
    tjm: 620,
    contract: 'Freelance',
    location: 'Lyon',
    remote: 'Hybride',
    seniority: '8 ans',
    languages: ['Français', 'Anglais (B2)'],
    stack: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Docker', 'Go'],
    summary: "DevOps senior spécialisé Kubernetes et infrastructure as code. A industrialisé des chaînes CI/CD pour des plateformes financières.",
    breakdown: {
      'Compétences techniques': 82,
      'Séniorité': 80,
      'Secteur': 78,
      'Disponibilité': 60,
      'Mobilité': 70,
      'Soft skills': 80,
      'TJM / budget': 90
    },
    proven: ['Kubernetes', 'CI/CD', 'AWS', 'Terraform', 'Secteur bancaire'],
    confirm: ['Java backend (profil orienté infra)', 'Leadership technique'],
    absent: ['Spring Boot'],
    vigilance: ['Profil DevOps, pas Tech Lead applicatif', 'Disponibilité différée 6 semaines'],
    missionsCount: 9,
    placements: 5
  }, {
    id: 't4',
    name: 'Clara Moreau',
    title: 'Product Owner Salesforce',
    score: 72,
    status: 'available',
    avail: 'Disponible sous 3 sem.',
    tjm: 550,
    contract: 'Freelance',
    location: 'Lille',
    remote: 'Hybride',
    seniority: '7 ans',
    languages: ['Français', 'Anglais (C1)', 'Espagnol'],
    stack: ['Salesforce', 'Agile', 'Product', 'JIRA', 'SQL'],
    summary: "Product Owner certifiée Salesforce, 7 ans en pilotage produit dans la banque et l'assurance. Excellente interface métier / technique.",
    breakdown: {
      'Compétences techniques': 55,
      'Séniorité': 78,
      'Secteur': 90,
      'Disponibilité': 80,
      'Mobilité': 92,
      'Soft skills': 94,
      'TJM / budget': 88
    },
    proven: ['Agilité', 'Secteur bancaire', 'Communication client'],
    confirm: ['Compétences Java (profil non technique)'],
    absent: ['Java', 'Spring Boot', 'Kubernetes', 'Microservices'],
    vigilance: ['Profil PO — ne correspond pas au besoin Tech Lead', 'Stack technique éloignée'],
    missionsCount: 6,
    placements: 3
  }, {
    id: 't5',
    name: 'Julien Perrin',
    title: 'Fullstack React / Node',
    score: 69,
    status: 'available',
    avail: 'Disponible immédiatement',
    tjm: 520,
    contract: 'Freelance',
    location: 'Remote',
    remote: 'Full remote',
    seniority: '6 ans',
    languages: ['Français', 'Anglais (B2)'],
    stack: ['React', 'Node.js', 'TypeScript', 'Docker', 'MongoDB'],
    summary: "Développeur fullstack JS, 6 ans d'expérience produit. Autonome, forte capacité de livraison. Peu d'exposition Java.",
    breakdown: {
      'Compétences techniques': 60,
      'Séniorité': 68,
      'Secteur': 55,
      'Disponibilité': 95,
      'Mobilité': 50,
      'Soft skills': 82,
      'TJM / budget': 85
    },
    proven: ['Docker', 'CI/CD', 'TypeScript'],
    confirm: ['Java (1 projet il y a 4 ans)'],
    absent: ['Spring Boot', 'Kubernetes', 'Secteur bancaire'],
    vigilance: ['Stack JS, pas Java/Spring', 'Full remote uniquement'],
    missionsCount: 4,
    placements: 2
  }],
  // CV diff for the generator (Thomas Martin)
  cvDiff: {
    kept: [{
      txt: 'Tech Lead — CGI Finance (2020–2024)',
      note: 'Expérience la plus pertinente pour la mission'
    }, {
      txt: 'Migration microservices d\'un core banking Java',
      note: 'Match direct avec le besoin client'
    }, {
      txt: 'Java 17, Spring Boot, CI/CD (GitLab)',
      note: 'Compétences obligatoires confirmées'
    }],
    reworded: [{
      from: 'A travaillé sur le déploiement conteneurisé',
      to: 'A industrialisé le déploiement conteneurisé (Docker, orchestration)',
      note: 'Reformulé pour la lisibilité client'
    }, {
      from: 'Encadrement de développeurs',
      to: 'Leadership technique d\'une équipe de 8 développeurs',
      note: 'Précisé d\'après le CV'
    }],
    removed: [{
      txt: 'Stage de fin d\'études (2013)',
      note: 'Non pertinent pour un profil senior'
    }, {
      txt: 'Compétences bureautiques (Excel, PowerPoint)',
      note: 'Hors périmètre technique'
    }, {
      txt: 'Centres d\'intérêt : course à pied, photographie',
      note: 'Retiré pour la version client'
    }]
  },
  pitch: {
    short: "Bonjour,\n\nPour votre besoin de Tech Lead Java / Spring Boot à Lille, je vous propose Thomas Martin (11 ans d'expérience, dont 4 en environnement bancaire). Il a piloté la migration microservices d'un core banking et correspond à 91 % de vos critères.\n\nDisponible sous 2 semaines, TJM 650 €. Je vous transmets son dossier mission-ready en pièce jointe.\n\nBien à vous,\nCamille Aubert",
    premium: "Bonjour,\n\nDans le cadre de la modernisation de votre plateforme bancaire, j'ai le plaisir de vous présenter Thomas Martin, Tech Lead Java / Spring Boot avec 11 ans d'expérience.\n\nPourquoi ce profil :\n• Migration microservices d'un core banking (contexte identique au vôtre)\n• Maîtrise Java 17, Spring Boot, CI/CD — compétences obligatoires confirmées\n• Leadership d'une équipe de 8 développeurs en contexte agile\n• 4 ans en environnement bancaire réglementé\n\nMatching mission : 91 %. Disponible sous 2 semaines, TJM 650 €.\nDeux points à confirmer ensemble : la maîtrise Kubernetes (Docker Swarm au CV) et la présence sur site.\n\nJe reste à votre disposition pour un échange.\n\nCordialement,\nCamille Aubert — Talent Partners",
    linkedin: "Thomas, j'ai une mission Tech Lead Java / Spring Boot qui colle à 91 % à ton profil : modernisation d'une plateforme bancaire à Lille, microservices, démarrage sous 1 mois, TJM autour de 650 €. Dispo pour en parler 15 min cette semaine ?"
  },
  questions: [{
    id: 'q1',
    txt: 'Confirmer la maîtrise de Kubernetes (le CV mentionne Docker Swarm).',
    state: 'pending',
    checked: false
  }, {
    id: 'q2',
    txt: 'Valider la disponibilité réelle et le préavis freelance.',
    state: 'pending',
    checked: true
  }, {
    id: 'q3',
    txt: 'Vérifier l\'acceptation de 2 jours sur site à Lille.',
    state: 'pending',
    checked: false
  }, {
    id: 'q4',
    txt: 'Confirmer le TJM 650 € (hors frais).',
    state: 'confirmed',
    checked: true
  }, {
    id: 'q5',
    txt: 'Niveau d\'anglais professionnel pour échanges avec l\'équipe ?',
    state: 'pending',
    checked: false
  }, {
    id: 'q6',
    txt: 'Expérience confirmée en environnement bancaire réglementé.',
    state: 'confirmed',
    checked: true
  }],
  history: [{
    id: 'h1',
    candidate: 'Thomas Martin',
    mission: 'Tech Lead Java',
    client: 'BNP Paribas',
    recruiter: 'Camille Aubert',
    date: '06/06/2026',
    status: 'interview'
  }, {
    id: 'h2',
    candidate: 'Sarah Benali',
    mission: 'Lead Backend',
    client: 'Société Générale',
    recruiter: 'Léa Fontaine',
    date: '04/06/2026',
    status: 'sent'
  }, {
    id: 'h3',
    candidate: 'Mehdi Roux',
    mission: 'DevOps AWS',
    client: 'Décathlon',
    recruiter: 'Camille Aubert',
    date: '02/06/2026',
    status: 'placed'
  }, {
    id: 'h4',
    candidate: 'Clara Moreau',
    mission: 'PO Salesforce',
    client: 'AXA',
    recruiter: 'Karim Sayad',
    date: '29/05/2026',
    status: 'rejected'
  }, {
    id: 'h5',
    candidate: 'Julien Perrin',
    mission: 'Fullstack React',
    client: 'Leboncoin',
    recruiter: 'Léa Fontaine',
    date: '27/05/2026',
    status: 'sent'
  }, {
    id: 'h6',
    candidate: 'Thomas Martin',
    mission: 'Architecte Java',
    client: 'Crédit Agricole',
    recruiter: 'Camille Aubert',
    date: '21/05/2026',
    status: 'placed'
  }, {
    id: 'h7',
    candidate: 'Sarah Benali',
    mission: 'Backend Lead',
    client: 'Worldline',
    recruiter: 'Karim Sayad',
    date: '18/05/2026',
    status: 'archived'
  }],
  historyStatus: {
    sent: {
      label: 'Envoyé',
      tone: 'info'
    },
    interview: {
      label: 'Entretien obtenu',
      tone: 'warning'
    },
    placed: {
      label: 'Placé',
      tone: 'success'
    },
    rejected: {
      label: 'Refusé',
      tone: 'danger'
    },
    archived: {
      label: 'Archivé',
      tone: 'neutral'
    }
  },
  templates: [{
    id: 'tpl1',
    name: 'Charte Talent Partners',
    desc: 'Modèle premium grand compte',
    primary: '#2A52E0',
    active: true,
    sections: ['Synthèse', 'Compétences clés', 'Expériences', 'Formations', 'Langues']
  }, {
    id: 'tpl2',
    name: 'Appel d\'offres ESN',
    desc: 'Dossier de compétences détaillé',
    primary: '#0B1330',
    active: false,
    sections: ['Synthèse', 'Matrice de compétences', 'Références projets', 'Certifications']
  }, {
    id: 'tpl3',
    name: 'One-pager commercial',
    desc: 'Format court orienté pitch',
    primary: '#7C3AED',
    active: false,
    sections: ['Pitch', 'Top 5 compétences', 'Dernière mission']
  }],
  team: [{
    id: 'u1',
    name: 'Camille Aubert',
    role: 'Consultante recrutement IT',
    email: 'c.aubert@talent-partners.fr',
    perm: 'Admin',
    status: 'available'
  }, {
    id: 'u2',
    name: 'Léa Fontaine',
    role: 'Business Manager ESN',
    email: 'l.fontaine@talent-partners.fr',
    perm: 'Éditeur',
    status: 'available'
  }, {
    id: 'u3',
    name: 'Karim Sayad',
    role: 'Talent Manager',
    email: 'k.sayad@talent-partners.fr',
    perm: 'Éditeur',
    status: 'busy'
  }, {
    id: 'u4',
    name: 'Nadia Lemoine',
    role: 'Resource Manager',
    email: 'n.lemoine@talent-partners.fr',
    perm: 'Lecture',
    status: 'off'
  }]
};
window.WMData = WMData;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/icons.jsx
try { (() => {
// WheelMatch AI — Lucide-style stroke icon set (24x24, 2px). Shared via window.WMIcon.
const WM_ICON_PATHS = {
  dashboard: 'M3 13h7V3H3v10zM14 21h7V3h-7v18zM3 21h7v-6H3v6z',
  briefcase: 'M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  shortlist: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
  template: 'M3 3h18v18H3zM3 9h18M9 21V9',
  history: 'M3 3v5h5M3.05 13a9 9 0 1 0 .49-4.36M12 7v5l3 3',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  sparkles: 'M12 3l1.6 4.3L18 9l-4.4 1.7L12 15l-1.6-4.3L6 9l4.4-1.7zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54z',
  plus: 'M12 5v14M5 12h14',
  chevronRight: 'M9 18l6-6-6-6',
  chevronDown: 'M6 9l6 6 6-6',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  copy: 'M9 9h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6',
  euro: 'M18 7a6 6 0 1 0 0 10M5 10h7M5 14h7',
  mapPin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  check: 'M20 6L9 17l-5-5',
  checkCircle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12l3 3 5-6',
  alert: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4M12 16h.01',
  x: 'M18 6L6 18M6 6l12 12',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  arrowRight: 'M5 12h14M12 5l7 7-7 7',
  arrowUp: 'M12 19V5M5 12l7-7 7 7',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z',
  building: 'M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  link: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  edit: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z',
  trash: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
  upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
  more: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  layers: 'M12 2l9 5-9 5-9-5 9-5zM3 17l9 5 9-5M3 12l9 5 9-5',
  trendUp: 'M22 7l-8.5 8.5-5-5L2 17M16 7h6v6',
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z',
  message: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  refresh: 'M3 2v6h6M21 22v-6h-6M21 8a9 9 0 0 0-15-3L3 8m18 8a9 9 0 0 1-15 3l-3-3'
};
function WMIcon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = WM_ICON_PATHS[name];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  }, React.createElement('path', {
    d
  }));
}
window.WMIcon = WMIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wheelmatch/shell.jsx
try { (() => {
// WheelMatch AI — App shell: Sidebar, Topbar, PageHeader, helpers.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const {
    SidebarNav,
    Avatar,
    IconButton,
    Badge
  } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const NAV = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "dashboard"
    })
  }, {
    section: 'Pipeline'
  }, {
    id: 'missions',
    label: 'Missions',
    count: 14,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "briefcase"
    })
  }, {
    id: 'shortlist',
    label: 'Shortlist',
    count: 5,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shortlist"
    })
  }, {
    id: 'talents',
    label: 'Talents',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users"
    })
  }, {
    id: 'cv',
    label: 'CV Generator',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles"
    })
  }, {
    section: 'Cabinet'
  }, {
    id: 'history',
    label: 'Historique',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "history"
    })
  }, {
    id: 'templates',
    label: 'Templates',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "template"
    })
  }, {
    id: 'settings',
    label: 'Paramètres',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "settings"
    })
  }];
  function Logo() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '4px 8px 2px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark-light.svg",
      width: "34",
      height: "34",
      alt: "WheelMatch AI"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 800,
        letterSpacing: '-0.02em',
        color: '#fff'
      }
    }, "WheelMatch ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary-400)'
      }
    }, "AI")));
  }
  function SidebarFooter() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 10px',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: D.user.name,
      size: "sm",
      status: "available"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: '#fff',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, D.user.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'rgba(220,228,251,0.55)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, D.user.firm)));
  }
  function Sidebar({
    page,
    setPage
  }) {
    return /*#__PURE__*/React.createElement(SidebarNav, {
      items: NAV,
      active: page,
      onSelect: setPage,
      header: /*#__PURE__*/React.createElement(Logo, null),
      footer: /*#__PURE__*/React.createElement(SidebarFooter, null)
    });
  }
  function Topbar({
    title,
    crumb
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 'var(--topbar-h)',
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '0 28px',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, crumb && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-faint)',
        fontWeight: 600,
        marginBottom: 2
      }
    }, crumb), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 19,
        fontWeight: 700,
        color: 'var(--text-strong)',
        letterSpacing: '-0.01em'
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 38,
        padding: '0 12px',
        width: 260,
        background: 'var(--surface-inset)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      color: "var(--text-faint)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-faint)'
      }
    }, "Rechercher un talent, une mission\u2026")), /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifications"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 19
    })), /*#__PURE__*/React.createElement(Avatar, {
      name: D.user.name,
      size: "md",
      status: "available"
    }));
  }
  function PageHeader({
    title,
    subtitle,
    actions
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        color: 'var(--text-strong)',
        letterSpacing: '-0.02em'
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '6px 0 0',
        fontSize: 14.5,
        color: 'var(--text-muted)',
        maxWidth: 620
      }
    }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flex: 'none'
      }
    }, actions));
  }

  // Section title used inside cards
  function SectionLabel({
    icon,
    children,
    accent = 'var(--text-faint)'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        marginBottom: 12
      }
    }, icon && /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 15,
      color: accent
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: 'var(--ls-caps)',
        textTransform: 'uppercase',
        color: accent
      }
    }, children));
  }
  window.WMShell = {
    Sidebar,
    Topbar,
    PageHeader,
    SectionLabel,
    NAV
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wheelmatch/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ConfidenceBadge = __ds_scope.ConfidenceBadge;

__ds_ns.ScoreBar = __ds_scope.ScoreBar;

__ds_ns.ScoreGauge = __ds_scope.ScoreGauge;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
