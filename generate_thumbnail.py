
import urllib.request
from PIL import Image, ImageDraw
import os

# Define paths
assets_dir = "assets"
original_thumb_path = os.path.join(assets_dir, "original_thumb.jpg")
final_thumb_path = os.path.join(assets_dir, "video_demo_with_play.jpg")
youtube_url = "https://img.youtube.com/vi/Ys-yf6mtv4s/hqdefault.jpg"

# Ensure assets directory exists
if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

# 1. Download the thumbnail
print(f"Downloading thumbnail from {youtube_url}...")
urllib.request.urlretrieve(youtube_url, original_thumb_path)

# 2. Open image and prepare for drawing
img = Image.open(original_thumb_path).convert("RGBA")
width, height = img.size
overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)

# 3. Define Button Dimensions (YouTube Style Rounded Rectangle)
# "Medium" size: Let's aim for the button width to be roughly 15% of image width
button_width = int(width * 0.18)  # Slightly larger than 15% for visibility, but "medium"
button_height = int(button_width * 0.7) # Aspect ratio roughly 1.4:1
center_x, center_y = width // 2, height // 2

x0 = center_x - button_width // 2
y0 = center_y - button_height // 2
x1 = center_x + button_width // 2
y1 = center_y + button_height // 2

# Corner radius (approx 20% of height)
radius = int(button_height * 0.2)

# 4. Draw Red Background (YouTube Red: #FF0000)
# We use a slightly transparent red to look nice, or fully opaque for "original" feel.
# Authentic YouTube is fully opaque usually, but on thumbnails, semi-transparent often looks better.
# User asked for "Original", so let's go with a very slightly transparent Red (90% opacity) or solid.
# Let's do solid standard Red (255, 0, 0)
draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=(255, 0, 0, 255))

# 5. Draw White Play Triangle
# Dimensions relative to button height
tri_height = int(button_height * 0.4)
tri_width = int(tri_height * 0.8) # Slightly narrower than equilateral

# Accurate centering for the triangle visual weight
# Move slightly to the right to look optically centered
tri_center_x = center_x + (tri_width // 8) 
tri_center_y = center_y

p1 = (tri_center_x - tri_width // 2, tri_center_y - tri_height // 2)
p2 = (tri_center_x - tri_width // 2, tri_center_y + tri_height // 2)
p3 = (tri_center_x + tri_width // 2, tri_center_y)

draw.polygon([p1, p2, p3], fill=(255, 255, 255, 255))

# 6. Composite
final_img = Image.alpha_composite(img, overlay)
final_img = final_img.convert("RGB")

# 7. Save
final_img.save(final_thumb_path, "JPEG", quality=95)

# Clean up
if os.path.exists(original_thumb_path):
    os.remove(original_thumb_path)

print(f"Success! Saved authentic video thumbnail to {final_thumb_path}")
