import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix char-card padding
css = re.sub(
    r'\.char-card\s*\{[^}]*\}',
    '.char-card { background: var(--white); border-radius: 4px; padding: 12px 12px 42px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; cursor: pointer; transition: var(--transition); position: relative; }',
    css,
    count=1
)

# Fix char-img-wrap border radius
css = css.replace("border-radius: 12px;", "border-radius: 4px;")

# Fix char-bio
css = re.sub(
    r'\.char-bio\s*\{[^}]*\}',
    '.char-bio { font-size: .8rem; color: var(--muted); margin-top: 36px; margin-bottom: 12px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-align: left; }',
    css,
    count=1
)

# Fix final-points grid
css = re.sub(
    r'\.final-points\s*\{\s*display:\s*flex;\s*gap:\s*20px;\s*justify-content:\s*center;\s*flex-wrap:\s*wrap;\s*margin-bottom:\s*32px;\s*\}',
    '.final-points { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; width: 100%; margin-bottom: 8px; }',
    css
)

css = re.sub(
    r'\.final-point\s*\{\s*background:\s*rgba\(255,255,255,\.07\);\s*border:\s*1px\s*solid\s*rgba\(255,255,255,\.1\);\s*border-radius:\s*var\(--radius\);\s*padding:\s*32px\s*24px;\s*text-align:\s*center;\s*flex:\s*1;\s*min-width:\s*180px;\s*\}',
    '.final-point { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: var(--radius); padding: 16px 12px; text-align: center; }',
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

