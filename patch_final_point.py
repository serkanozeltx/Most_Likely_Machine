import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace block
old_block = """.final-point {
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--radius);
  padding: 32px 24px;
  text-align: center;
  flex: 1; min-width: 180px;
}
.fp-icon { font-size: 2.5rem; margin-bottom: 16px; }
.final-point h4 { font-size: 1.1rem; margin-bottom: 12px; color: white; }"""

new_block = """.final-point {
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--radius);
  padding: 16px 12px;
  text-align: center;
}
.fp-icon { font-size: 1.6rem; margin-bottom: 8px; }
.final-point h4 { font-size: .9rem; margin-bottom: 6px; color: white; }"""

css = css.replace(old_block, new_block)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

