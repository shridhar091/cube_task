#!/bin/bash
# Automatic Image Renaming Script for GTG Perfumes Website

echo "🚀 Starting image renaming process..."
echo ""

cd "$(dirname "$0")"

# Check if we have the required source images
if [ ! -f "Rectangle 6723.jpg" ]; then
    echo "❌ Error: Required images not found!"
    exit 1
fi

# Hero Section
echo "📸 Copying hero image..."
cp "Rectangle 6723.jpg" hero-perfume.png

# Product Gallery
echo "📸 Copying product gallery images..."
cp "Image_fx (14)-Photoroom 1.jpg" product-main.png
cp "Rectangle 6723.jpg" product-2.png
cp "Image_fx (14)-Photoroom 1.jpg" product-3.png
cp "Image_fx (14)-Photoroom 1.jpg" product-4.png

# Thumbnails
echo "📸 Copying thumbnail images..."
cp "Image_fx (14)-Photoroom 1-1.jpg" thumb-1.png
cp "Image_fx (14)-Photoroom 2.jpg" thumb-2.png
cp "Image_fx (14)-Photoroom 3.jpg" thumb-3.png
cp "Image_fx (14)-Photoroom 1-1.jpg" thumb-4.png

# Fragrances
echo "📸 Copying fragrance images..."
cp "Image_fx (14)-Photoroom 1-1.jpg" fragrance-1.png
cp "Image_fx (14)-Photoroom 2.jpg" fragrance-2.png
cp "Image_fx (14)-Photoroom 3.jpg" fragrance-3.png

# Included (reuse fragrances)
echo "📸 Copying included items (reusing fragrances)..."
cp fragrance-1.png included-1.png
cp fragrance-2.png included-2.png
cp fragrance-3.png included-3.png
cp fragrance-1.png included-4.png

# Collection
echo "📸 Copying collection image..."
cp "pexels-cottonbro-4659793 1.jpg" collection.png

# Brands
echo "📸 Copying brand logos..."
cp "pexels-artempodrez-6801177 1.jpg" gtg-logo.png
cp "pexels-pixabay-264870 1.jpg" brand-2.png
cp "pexels-rethaferguson-3059609 2.jpg" brand-3.png
cp "pexels-valeriya-1961782 1.jpg" brand-4.png

echo ""
echo "✅ All images renamed successfully!"
echo ""

# Count and display
PNG_COUNT=$(ls -1 *.png 2>/dev/null | wc -l)
echo "📊 Total PNG files created: $PNG_COUNT"

if [ $PNG_COUNT -eq 22 ]; then
    echo "🎉 Perfect! All 22 images are ready!"
    echo ""
    echo "You can now open index.html in your browser to see the website!"
else
    echo "⚠️  Expected 22 images, but found $PNG_COUNT"
fi

echo ""
echo "Created images:"
ls -1 *.png
