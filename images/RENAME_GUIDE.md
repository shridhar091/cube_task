# Image Renaming Guide

## Current Status
✅ **Found: 10 images**
❌ **Required: 22 images**
⚠️ **Missing: 12 images** (but some can be reused/duplicated)

---

## 📸 Images Currently in Folder

Based on dimensions, here's what each image likely represents:

1. **Rectangle 6723.jpg** (610x673) - Large product/hero image
2. **pexels-cottonbro-4659793 1.jpg** (587x711) - Hands with perfume (collection)
3. **Image_fx (14)-Photoroom 1.jpg** (85x144) - Perfume bottle (purple/gradient)
4. **Image_fx (14)-Photoroom 1-1.jpg** (55x94) - Small perfume bottle
5. **Image_fx (14)-Photoroom 2.jpg** (55x94) - Small perfume bottle (pink)
6. **Image_fx (14)-Photoroom 3.jpg** (55x94) - Small perfume bottle (orange)
7. **pexels-artempodrez-6801177 1.jpg** (88x87) - Product box/package
8. **pexels-pixabay-264870 1.jpg** (100x88) - Product box/package
9. **pexels-rethaferguson-3059609 2.jpg** (100x88) - Product box/package
10. **pexels-valeriya-1961782 1.jpg** (108x88) - Product box/package

---

## 🔧 Suggested Renaming & Duplication

### Hero Section (1 image)
```bash
cp "Rectangle 6723.jpg" hero-perfume.png
```

### Product Gallery (4 images needed)
```bash
cp "Image_fx (14)-Photoroom 1.jpg" product-main.png
cp "Rectangle 6723.jpg" product-2.png
cp "Image_fx (14)-Photoroom 1.jpg" product-3.png
cp "Image_fx (14)-Photoroom 1.jpg" product-4.png
```

### Thumbnails (4 images - REUSE product images)
```bash
cp "Image_fx (14)-Photoroom 1-1.jpg" thumb-1.png
cp "Image_fx (14)-Photoroom 2.jpg" thumb-2.png
cp "Image_fx (14)-Photoroom 3.jpg" thumb-3.png
cp "Image_fx (14)-Photoroom 1-1.jpg" thumb-4.png
```

### Fragrance Options (3 images needed)
```bash
cp "Image_fx (14)-Photoroom 1-1.jpg" fragrance-1.png
cp "Image_fx (14)-Photoroom 2.jpg" fragrance-2.png
cp "Image_fx (14)-Photoroom 3.jpg" fragrance-3.png
```

### What's Included (4 images - REUSE fragrances)
```bash
cp fragrance-1.png included-1.png
cp fragrance-2.png included-2.png
cp fragrance-3.png included-3.png
cp fragrance-1.png included-4.png
```

### Collection Section (1 image)
```bash
cp "pexels-cottonbro-4659793 1.jpg" collection.png
```

### Comparison Table Brands (4 images needed)
```bash
cp "pexels-artempodrez-6801177 1.jpg" gtg-logo.png
cp "pexels-pixabay-264870 1.jpg" brand-2.png
cp "pexels-rethaferguson-3059609 2.jpg" brand-3.png
cp "pexels-valeriya-1961782 1.jpg" brand-4.png
```

---

## 🚀 Quick Rename Script

Run this in the images folder:

```bash
cd /home/srajan/Desktop/task/images

# Hero
cp "Rectangle 6723.jpg" hero-perfume.png

# Product Gallery
cp "Image_fx (14)-Photoroom 1.jpg" product-main.png
cp "Rectangle 6723.jpg" product-2.png
cp "Image_fx (14)-Photoroom 1.jpg" product-3.png
cp "Image_fx (14)-Photoroom 1.jpg" product-4.png

# Thumbnails
cp "Image_fx (14)-Photoroom 1-1.jpg" thumb-1.png
cp "Image_fx (14)-Photoroom 2.jpg" thumb-2.png
cp "Image_fx (14)-Photoroom 3.jpg" thumb-3.png
cp "Image_fx (14)-Photoroom 1-1.jpg" thumb-4.png

# Fragrances
cp "Image_fx (14)-Photoroom 1-1.jpg" fragrance-1.png
cp "Image_fx (14)-Photoroom 2.jpg" fragrance-2.png
cp "Image_fx (14)-Photoroom 3.jpg" fragrance-3.png

# Included (reuse fragrances)
cp fragrance-1.png included-1.png
cp fragrance-2.png included-2.png
cp fragrance-3.png included-3.png
cp fragrance-1.png included-4.png

# Collection
cp "pexels-cottonbro-4659793 1.jpg" collection.png

# Brands
cp "pexels-artempodrez-6801177 1.jpg" gtg-logo.png
cp "pexels-pixabay-264870 1.jpg" brand-2.png
cp "pexels-rethaferguson-3059609 2.jpg" brand-3.png
cp "pexels-valeriya-1961782 1.jpg" brand-4.png

echo "✅ All images renamed successfully!"
ls -1 *.png | wc -l
```

---

## ❌ What's Missing (if you want unique images)

If you want all unique images instead of reusing:

1. **3 more product variations** (currently reusing product-main for 3 & 4)
2. That's it! The rest can be legitimately reused

---

## ✅ After Renaming

You should have these 22 .png files:
- ✓ hero-perfume.png
- ✓ product-main.png, product-2.png, product-3.png, product-4.png
- ✓ thumb-1.png, thumb-2.png, thumb-3.png, thumb-4.png
- ✓ fragrance-1.png, fragrance-2.png, fragrance-3.png
- ✓ included-1.png, included-2.png, included-3.png, included-4.png
- ✓ collection.png
- ✓ gtg-logo.png, brand-2.png, brand-3.png, brand-4.png

Then you can open **index.html** and see your website fully working! 🎉
