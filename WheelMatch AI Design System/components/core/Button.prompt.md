Primary action button — use `variant="ai"` (violet) for IA-generation actions, `primary` for standard commits, `secondary`/`ghost` for lower emphasis.

```jsx
<Button variant="ai" size="lg" leftIcon={<SparkIcon/>}>Générer CV mission-ready</Button>
<Button variant="secondary">Annuler</Button>
```

Variants: primary · ai · secondary · ghost · subtle · danger. Sizes: sm · md · lg. Pass `leftIcon`/`rightIcon` as SVG nodes (Lucide), `fullWidth` to stretch.
