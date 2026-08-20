import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace block
old_block = """/* Final screen */
#screen-11 {
  align-items: center; justify-content: center;
  display: block;
  background: linear-gradient(160deg, var(--dark) 0%, #334155 100%);
  color: white;
}"""

new_block = """/* Final screen */
#screen-11 {
  align-items: center; justify-content: center;
  background: linear-gradient(160deg, var(--dark) 0%, #334155 100%);
  color: white;
}"""

css = css.replace(old_block, new_block)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
