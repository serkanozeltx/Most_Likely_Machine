import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace block
old_block = """#screen-1 {
  align-items: center;
  justify-content: center;
  display: block;
  background: linear-gradient(160deg, #fff 0%, var(--cream) 100%);
}"""

new_block = """#screen-1 {
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, #fff 0%, var(--cream) 100%);
}"""

css = css.replace(old_block, new_block)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
