import os
from PIL import Image

src_path = os.path.join('app', 'icon.png')
if not os.path.exists(src_path):
    src_path = os.path.join('public', 'favicon.png')

print(f"Loading source icon from: {src_path}")
img = Image.open(src_path).convert('RGBA')

# Generate multi-resolution ICO file
icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]

app_ico_path = os.path.join('app', 'favicon.ico')
public_ico_path = os.path.join('public', 'favicon.ico')

img.save(app_ico_path, format='ICO', sizes=icon_sizes)
print(f"Saved: {app_ico_path} ({os.path.getsize(app_ico_path)} bytes)")

img.save(public_ico_path, format='ICO', sizes=icon_sizes)
print(f"Saved: {public_ico_path} ({os.path.getsize(public_ico_path)} bytes)")

print("Successfully replaced all default Vercel/Next.js favicon.ico files with HireVoTech branding!")
