from PIL import Image
from pathlib import Path
import os

# Get the folder where this script is located
BASE_DIR = Path(__file__).parent

# Image path
IMAGE_PATH = BASE_DIR / "hasan-sprite.png"

ROWS = 3
COLS = 6

OUTPUT_DIR = BASE_DIR / "frames"

img = Image.open(IMAGE_PATH).convert("RGBA")

w, h = img.size

cell_w = w // COLS
cell_h = h // ROWS

os.makedirs(OUTPUT_DIR, exist_ok=True)

count = 1

for r in range(ROWS):
    for c in range(COLS):

        left = c * cell_w
        upper = r * cell_h
        right = left + cell_w
        lower = upper + cell_h

        frame = img.crop((left, upper, right, lower))

        frame.save(OUTPUT_DIR / f"frame{count}.png")

        print(f"Saved frame{count}.png")

        count += 1

print("Done!")