import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace block
css = re.sub(
    r'\.final-point\s*\{\s*background:\s*rgba\(255,255,255,\.07\);\s*border:\s*1px\s*solid\s*rgba\(255,255,255,\.12\);\s*border-radius:\s*var\(--radius\);\s*padding:\s*32px\s*24px;\s*text-align:\s*center;\s*flex:\s*1;\s*min-width:\s*180px;\s*\}',
    '.final-point { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: var(--radius); padding: 16px 12px; text-align: center; }',
    css
)

css = re.sub(
    r'\.fp-icon\s*\{\s*font-size:\s*2\.5rem;\s*margin-bottom:\s*16px;\s*\}',
    '.fp-icon { font-size: 1.6rem; margin-bottom: 8px; }',
    css
)

css = re.sub(
    r'\.final-point\s*h4\s*\{\s*font-size:\s*1\.1rem;\s*margin-bottom:\s*12px;\s*color:\s*white;\s*\}',
    '.final-point h4 { font-size: .9rem; margin-bottom: 6px; color: white; }',
    css
)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

