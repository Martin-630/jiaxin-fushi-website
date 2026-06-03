# 产品图片命名与上传说明

本文档用于后续替换嘉鑫服装辅料有限公司官网的真实产品图。当前网站已经有首页、产品详情页、微信二维码和联系入口，替换图片时请只更新对应图片文件和页面引用，不要改动 CNAME、联系方式和 GitHub Pages 部署结构。

## 推荐目录结构

```text
assets/
  products/
    steel-hooks/
    bra-underwire/
    stainless-underwire/
    coated-underwire/
    boning/
    steel-strip/
  workshop/
  contact/
  brand/
```

现有图片仍保留在 `assets/products/` 根目录，避免破坏当前页面。后续新增真实产品图时，建议放入对应产品子目录，再同步修改首页和产品详情页中的图片路径。

## 命名规则

- 使用小写英文、数字和连字符，不建议使用空格。
- 不建议使用中文文件名，除非当前已有路径必须保留，例如 `assets/contact/微信二维码.jpg`。
- 同一类图片按用途命名，末尾用两位序号区分。
- 文件名应描述真实内容，不要使用 `new`、`final`、`image1` 这类不稳定命名。

推荐示例：

```text
steel-hooks-full-01.jpg
steel-hooks-detail-hook-01.jpg
steel-hooks-color-options-01.jpg
bra-underwire-full-01.jpg
bra-underwire-size-options-01.jpg
stainless-underwire-u-shape-01.jpg
coated-underwire-color-detail-01.jpg
boning-white-full-01.jpg
steel-strip-detail-01.jpg
```

## 每类产品建议拍摄图片

每个产品详情页建议至少准备 6 张图：

- 产品全貌图：完整展示产品形态，背景干净。
- 细节特写图：拍清扣位、钢圈弧度、包胶表面、胶骨纹理或钢条边缘。
- 多规格展示图：不同尺寸、排数、宽度或弧形规格放在同一画面中。
- 多颜色 / 多型号图：有颜色或型号差异时集中展示。
- 批量包装图：展示出货包装、扎带、袋装或箱装方式。
- 应用场景图：展示产品用于内衣、束身衣、泳衣或相关服装辅料的位置。

## 尺寸和格式建议

- 首页产品卡片：建议宽度 1200px 左右，比例接近 4:3。
- 产品详情页图片：建议宽度 1200px 至 1600px，比例尽量统一。
- 工厂图片：建议宽度 1600px 以上，横图优先。
- 微信二维码：保持正方形，不要压缩变形。
- 格式优先使用 `.jpg`，透明图或 logo 可使用 `.png`。

## 压缩建议

- 单张产品图建议控制在 200KB 至 500KB 之间。
- 大幅工厂图建议控制在 500KB 至 900KB 之间。
- 上传前可使用图片压缩工具处理，避免页面加载过慢。
- 不要过度锐化或加厚滤镜，图片应接近真实产品状态。

## 上传后需要同步修改

新增真实产品图后，通常需要同步修改：

- `index.html`：首页产品卡片图片和 alt 文案。
- `products/steel-hooks.html`
- `products/bra-underwire.html`
- `products/stainless-underwire.html`
- `products/coated-underwire.html`
- `products/boning.html`
- `products/steel-strip.html`

替换时请同时检查：

- 图片路径是否存在。
- alt 文案是否准确描述图片内容。
- 是否仍保留 `assets/contact/微信二维码.jpg`。
- 手机端图片是否不超出屏幕。
- 页面中是否还有“待补充真实图片”的占位卡片。
