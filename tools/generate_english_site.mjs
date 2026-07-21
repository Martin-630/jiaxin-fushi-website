import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const productRoot = path.join(siteRoot, "products");
const englishRoot = path.join(siteRoot, "en");
const englishProductRoot = path.join(englishRoot, "products");
const today = "2026-07-21";

const products = [
  {
    slug: "steel-hooks",
    name: "Hook & Eye Tape / Corset Hooks",
    shortName: "Hook & Eye Tape",
    meta: "Hook and eye tape for bras, lingerie, corsetry, and shapewear. Row count, size, color, hook spacing, base fabric, and packing can be discussed against samples.",
    description: "Designed for bras, lingerie, corsetry, and shapewear closures. Row count, length, width, color, hook spacing, base fabric, and packing can be discussed against samples or specifications.",
    tags: ["Direct Manufacturer", "Custom Options", "Sample-Based Development", "Batch Supply"],
    featureTitle: "Closure components for lingerie and shaping garments",
    featureIntro: "Confirm the configuration against the garment structure, sample, dimensions, and color requirements.",
    features: [
      ["Multiple Configurations", "Discuss row count, length, width, and hook spacing according to the required closure."],
      ["Color Matching", "Base fabric and component colors can be discussed against fabric swatches or samples."],
      ["Broad Applications", "Suitable for bras, lingerie, corsetry, shapewear, and other closure positions."],
      ["Sample-Based Development", "Share images, dimension drawings, or physical samples to confirm the required construction."],
      ["Direct Factory Communication", "Discuss specifications, sampling, pricing, packing, and delivery directly with the manufacturer."],
    ],
    applications: "Bras, lingerie, corsetry, shapewear, and back closures",
    customization: "Color, row count, length, width, hook spacing, base fabric, and packing",
    uses: "Back closures, corset closures, and lingerie components",
    processNote: "Send a sample image or specification so we can confirm configuration, color, quantity, and packing.",
    faq: [
      ["Can the color and row count be customized?", "Yes. Color, row count, length, width, and hook spacing can be discussed against your sample or dimensions."],
      ["Can I send only a product image?", "Yes. Send the image through WeChat and include any known dimensions, quantity, and application details."],
      ["Who typically purchases this product?", "Lingerie factories, bra factories, corsetry and shapewear manufacturers, wholesalers, and sourcing teams."],
      ["How is pricing confirmed?", "Pricing depends on configuration, color, quantity, customization, and packing requirements."],
    ],
  },
  {
    slug: "bra-underwire",
    name: "Bra Underwire",
    shortName: "Bra Underwire",
    meta: "Bra underwires for cup support. Size, curvature, wire diameter, tips, and packing can be discussed against samples or specifications.",
    description: "For cup support in bras and lingerie. Size, curvature, wire diameter, tip treatment, and packing can be discussed according to the cup shape and product requirements.",
    tags: ["Direct Manufacturer", "Custom Options", "Sample Review", "Batch Purchasing"],
    featureTitle: "Cup-support components for bra production",
    featureIntro: "Specifications can be discussed against samples, dimensions, and cup-shape requirements.",
    features: [
      ["Cup Support", "Used in bra and lingerie cup structures, with curvature and size confirmed for the pattern."],
      ["Multiple Specifications", "Discuss size, curvature, wire diameter, tips, and packing according to the product."],
      ["For Bra Production", "Suitable for lingerie factories, bra factories, and garment-accessory sourcing teams."],
      ["Sample Review", "Send sample images, dimension drawings, or physical samples to confirm the specification."],
    ],
    applications: "Bras, lingerie, and cup-support structures",
    customization: "Size, curvature, tips, wire diameter, specification, and packing",
    uses: "Cup support and lingerie structural components",
    processNote: "Send a sample image or specification so we can confirm size, curvature, quantity, and packing.",
    faq: [
      ["Can this be made against a sample?", "Yes. Size, curvature, wire diameter, and tip treatment can be discussed against images, drawings, or physical samples."],
      ["Who typically purchases bra underwires?", "Lingerie factories, bra factories, wholesalers, pattern studios, and garment-accessory sourcing teams."],
      ["Can I send only a product image?", "Yes. Send the product image and any known dimensions or cup-shape requirements through WeChat."],
      ["How is pricing confirmed?", "Pricing depends on the specification, quantity, customization, and packing requirements."],
    ],
  },
  {
    slug: "stainless-underwire",
    name: "Stainless Steel Underwire",
    shortName: "Stainless Underwire",
    meta: "Stainless steel underwires for bras, lingerie, and shapewear. Size, curvature, wire diameter, tip color, and packing can be customized.",
    description: "For structural support in bras, lingerie, and shapewear. Cup shape, curvature, size, wire diameter, tip color, and packing can be discussed according to the application.",
    tags: ["Direct Manufacturer", "Custom Options", "Sample Review", "Pattern Development"],
    featureTitle: "Structural support for bras and lingerie",
    featureIntro: "Size, curvature, wire diameter, and tip treatment can be discussed for different cup structures.",
    features: [
      ["Stable Structure", "Suitable for structural support in bras, lingerie, and shapewear."],
      ["Specification Options", "Discuss cup shape, size, curvature, wire diameter, and tip requirements."],
      ["Pattern Development", "Suitable for pattern development, sample review, and subsequent batch purchasing."],
      ["Sample Confirmation", "Confirm the shape and curvature with images, dimension drawings, or physical samples."],
    ],
    applications: "Bras, lingerie, shapewear, and structural support positions",
    customization: "Size, curvature, wire diameter, tip color, tip treatment, and packing",
    uses: "Bra support, lingerie positioning, and garment structural components",
    processNote: "Send a sample image or specification so we can confirm size, curvature, quantity, and packing.",
    faq: [
      ["Can the size and curvature be customized?", "Yes. Specific dimensions and curvature can be discussed against samples, images, or application requirements."],
      ["Is it suitable for pattern development?", "Yes. Start with sample and specification confirmation before arranging batch production."],
      ["Can I send only a product image?", "Yes. Send the product image and any known dimensions through WeChat."],
      ["How is pricing confirmed?", "Pricing depends on size, wire diameter, quantity, customization, and packing requirements."],
    ],
  },
  {
    slug: "coated-underwire",
    name: "Coated Underwire",
    shortName: "Coated Underwire",
    meta: "Coated underwires for bras, lingerie, and shapewear. Coating color, size, curvature, wire diameter, tip treatment, and packing can be discussed.",
    description: "A metal underwire with an outer coating for bra, lingerie, and shapewear structures. Coating color, size, curvature, wire diameter, tips, and packing can be discussed.",
    tags: ["Coated Finish", "Custom Options", "Sample Review", "Batch Supply"],
    featureTitle: "Supportive underwire with a coated outer finish",
    featureIntro: "Discuss the coating color, dimensions, curvature, and application against the actual garment structure.",
    features: [
      ["Coated Surface", "The outer coating supports product protection and appearance requirements."],
      ["Color Options", "Coating color can be discussed against samples, fabric colors, or product requirements."],
      ["Structural Support", "Suitable for support positions in bras, lingerie, and shapewear."],
      ["Custom Specifications", "Discuss size, curvature, wire diameter, tips, and packing according to the application."],
    ],
    applications: "Bras, lingerie, shapewear, and coated support structures",
    customization: "Coating color, size, curvature, wire diameter, tips, and packing",
    uses: "Cup support, lingerie structures, and coated underwire applications",
    processNote: "Send a sample image or specification so we can confirm coating, size, quantity, and packing.",
    faq: [
      ["Can the coating color be customized?", "Yes. Coating color can be discussed against your sample, fabric, or color requirement."],
      ["Can the size and curvature be adjusted?", "Yes. Dimensions and curvature can be discussed against samples, drawings, and application positions."],
      ["Can I send only a product image?", "Yes. Send the image and any known size or color requirements through WeChat."],
      ["How is pricing confirmed?", "Pricing depends on coating, specification, quantity, customization, and packing."],
    ],
  },
  {
    slug: "boning",
    name: "Plastic Boning",
    shortName: "Plastic Boning",
    meta: "Plastic boning for lingerie, corsetry, and shapewear support. Length, width, color, flexibility, curvature, and packing can be discussed.",
    description: "For support and positioning in lingerie, corsetry, and shapewear. Length, width, color, flexibility, curvature, and packing can be discussed according to the application.",
    tags: ["Lightweight Support", "Custom Options", "Structural Positioning", "Batch Supply"],
    featureTitle: "Structural support for lingerie and shapewear",
    featureIntro: "Discuss length, width, flexibility, color, and curvature according to the application position.",
    features: [
      ["Support and Positioning", "Used in structural support and positioning areas of lingerie, corsetry, and shapewear."],
      ["Specification Options", "Discuss length, width, color, flexibility, and curvature according to the product."],
      ["Structural Compatibility", "Suitable for coordinated use in corsetry, shapewear, and lingerie structures."],
      ["Batch Supply", "Suitable for repeat factory orders and batch purchasing requirements."],
    ],
    applications: "Lingerie, corsetry, shapewear, gowns, and structural positioning",
    customization: "Length, width, color, flexibility, curvature, and packing",
    uses: "Support, positioning, shaping, and garment structural components",
    processNote: "Send a sample image or specification so we can confirm length, flexibility, quantity, and packing.",
    faq: [
      ["Can the length and flexibility be customized?", "Yes. Length, width, and flexibility can be discussed against samples, images, and application positions."],
      ["What products use plastic boning?", "It is used in lingerie, corsetry, shapewear, gowns, and other structures requiring support or positioning."],
      ["Can I send only a product image?", "Yes. Send the product image, sample image, or specification through WeChat."],
      ["How is pricing confirmed?", "Pricing depends on specification, color, quantity, customization, and packing."],
    ],
  },
  {
    slug: "steel-strip",
    name: "Steel Boning",
    shortName: "Steel Boning",
    meta: "Steel boning for lingerie, corsetry, and shapewear support. Length, width, thickness, model, and packing can be discussed.",
    description: "For structural support in lingerie, corsetry, and shapewear. Length, width, thickness, model, form, and packing can be discussed according to the application.",
    tags: ["Structural Support", "Custom Options", "Sample Review", "Batch Purchasing"],
    featureTitle: "Structural support for lingerie and corsetry",
    featureIntro: "Discuss length, width, thickness, model, and form according to the garment structure and application.",
    features: [
      ["Structural Support", "Suitable for support positions in lingerie, corsetry, shapewear, and structured garments."],
      ["Specification Options", "Discuss length, width, thickness, model, and packing according to the requirement."],
      ["Batch Purchasing", "Suitable for repeat orders from lingerie factories, corsetry manufacturers, and sourcing teams."],
      ["Sample Confirmation", "Confirm the model and form with product images, dimension drawings, or physical samples."],
    ],
    applications: "Lingerie, corsetry, shapewear, waist trainers, and structural support",
    customization: "Length, width, thickness, model, form, and packing",
    uses: "Structural support, corsetry support, and garment components",
    processNote: "Send a sample image or specification so we can confirm length, thickness, quantity, and packing.",
    faq: [
      ["Can the length and thickness be customized?", "Yes. Length, width, thickness, and model can be discussed against samples or application positions."],
      ["What products use steel boning?", "It is suitable for lingerie, corsetry, shapewear, waist trainers, and other strongly supported structures."],
      ["Can I send only a product image?", "Yes. Send the image, sample, or specification through WeChat."],
      ["How is pricing confirmed?", "Pricing depends on specification, quantity, customization, and packing."],
    ],
  },
  {
    slug: "u-v-shaped-underwire",
    name: "U / V-Shaped Underwire",
    shortName: "U / V Underwire",
    meta: "U and V-shaped underwires for deep-V bras, push-up lingerie, special cup structures, and gown linings. Model, size, curvature, tips, and packing can be discussed.",
    description: "For special cup bras, push-up lingerie, deep-V styles, and gown linings. Model, size, curvature, tip treatment, and packing can be discussed against the pattern or sample.",
    tags: ["U / V Structure", "Custom Options", "Pattern Development", "Batch Supply"],
    featureTitle: "Support for special cup and deep-V structures",
    featureIntro: "Discuss model, size, curvature, and supporting requirements according to the pattern and application position.",
    features: [
      ["U / V Structure", "Suitable for special cup bras, push-up lingerie, deep-V styles, and gown-lining structures."],
      ["Model and Size Options", "Discuss model, dimensions, curvature, tips, and packing according to the sample."],
      ["Pattern Development", "Suitable for pattern development, sample confirmation, and subsequent batch purchasing."],
      ["Batch Supply", "Suitable for repeat orders and batch purchasing by lingerie factories and sourcing teams."],
    ],
    applications: "Special cup bras, push-up lingerie, deep-V styles, and gown linings",
    customization: "Model, size, curvature, tip treatment, and packing",
    uses: "Cup support, shaping, gathering, and lingerie structural support",
    processNote: "Send a sample image or specification so we can confirm model, size, curvature, quantity, and packing.",
    faq: [
      ["Can this be made against a sample?", "Yes. Model, dimensions, curvature, and application can be discussed against samples, images, or drawings."],
      ["What products use U / V-shaped underwires?", "They are used in special cup bras, push-up lingerie, deep-V styles, and gown-lining structures."],
      ["Can I send only a product image?", "Yes. Send the image and any known model or dimensions through WeChat."],
      ["How is pricing confirmed?", "Pricing depends on model, size, quantity, customization, and packing."],
    ],
  },
  {
    slug: "w-shaped-underwire",
    name: "W-Shaped Connected Underwire",
    shortName: "W-Shaped Underwire",
    meta: "W-shaped connected underwires for connected bras, push-up lingerie, and shapewear. Shape, size, curvature, tips, and packing can be discussed.",
    description: "For connected bras, push-up lingerie, and shapewear structures. Shape, size, curvature, tip treatment, and packing can be discussed against samples or application positions.",
    tags: ["Connected Structure", "Custom Options", "Pattern Development", "Batch Supply"],
    featureTitle: "Support for connected lingerie structures",
    featureIntro: "Discuss shape, size, curvature, and supporting requirements according to the pattern and application position.",
    features: [
      ["Connected Structure", "Suitable for connected bras, push-up lingerie, and shapewear support structures."],
      ["Specification Options", "Discuss shape, dimensions, curvature, tips, and packing according to the sample."],
      ["Pattern Development", "Suitable for pattern development, sample confirmation, and subsequent purchasing."],
      ["Batch Supply", "Suitable for repeat orders and batch purchasing by lingerie factories and sourcing teams."],
    ],
    applications: "Connected bras, push-up lingerie, shapewear, and structural support",
    customization: "Shape, size, curvature, tip treatment, and packing",
    uses: "Cup support, center connection, shaping, and lingerie structures",
    processNote: "Send a sample image or specification so we can confirm shape, size, curvature, quantity, and packing.",
    faq: [
      ["Can this be made against a sample?", "Yes. Shape, dimensions, curvature, and application can be discussed against samples, images, or drawings."],
      ["What products use W-shaped underwires?", "They are used in connected bras, push-up lingerie, shapewear, and other supported structures."],
      ["Can I send only a product image?", "Yes. Send the image and any known dimensions through WeChat."],
      ["How is pricing confirmed?", "Pricing depends on shape, size, quantity, customization, and packing."],
    ],
  },
  {
    slug: "eyelet",
    name: "Garment Eyelets",
    shortName: "Garment Eyelets",
    meta: "Metal garment eyelets for corsetry, shapewear, waist trainers, and bodices. Ring, barrel, size, finish, quantity, and packing can be discussed.",
    description: "For lacing holes in corsetry, shapewear, waist trainers, and bodices. Ring, barrel, size, structure, finish, quantity, and packing can be discussed against samples or application positions.",
    tags: ["Sample Review", "Multiple Sizes", "Lacing Structures", "Batch Purchasing"],
    featureTitle: "Eyelets for garment lacing structures",
    featureIntro: "Discuss the ring, barrel, dimensions, finish, and packing against the garment structure and application position.",
    features: [
      ["Ring and Barrel Set", "The ring and tubular barrel are used together and can be matched against the sample structure."],
      ["Multiple Sizes", "Different sizes and finishes can be discussed according to the sample and application position."],
      ["For Lacing Holes", "Suitable for corsetry, shapewear, waist trainers, bodices, and other lacing structures."],
      ["Batch Packing", "Specification sorting, quantities, batch packing, and supply arrangements can be discussed."],
    ],
    applications: "Corsetry, shapewear, waist trainers, bodices, and lacing holes",
    customization: "Ring, barrel, size, finish, quantity, and packing",
    uses: "Lacing holes, cord openings, and reinforcement points",
    processNote: "Send a sample image or application-position detail so we can confirm structure, size, quantity, and packing.",
    faq: [
      ["Can the size be confirmed against a sample?", "Yes. Send an eyelet sample, product image, or application-position image to discuss the corresponding structure and size."],
      ["What products use garment eyelets?", "They are used in corsetry, shapewear, waist trainers, bodices, and other lacing structures."],
      ["Can they be packed in batches?", "Yes. Specification sorting, quantity, and packing can be discussed according to the order."],
      ["How is pricing confirmed?", "Pricing depends on structure, specification, quantity, application, and packing."],
    ],
  },
];

const homeTranslations = [
  ["嘉鑫服装辅料有限公司 | 佛山内衣辅料工厂直营", "Jiaxin Garment Accessories | Lingerie Component Manufacturer"],
  ["嘉鑫服装辅料有限公司位于广东佛山南海盐步，主营文胸钢圈、钢排扣、包胶钢圈、胶骨、钢条、束身衣扣等女士内衣辅料配件，支持来样定制、打样开发和批量供货。", "Jiaxin Garment Accessories is based in Yanbu, Nanhai, Foshan, Guangdong, manufacturing bra underwires, hook and eye tape, coated underwires, plastic boning, steel boning, corset hooks, and other lingerie components. Sample-based development and batch supply are available."],
  ["嘉鑫服装辅料有限公司位于广东佛山南海盐步，主营女士内衣配件辅料，面向内衣厂、文胸厂、束身衣厂家及服装辅料采购商，提供来样定制、打样开发、批量供货服务。", "Based in Yanbu, Nanhai, Foshan, Jiaxin manufactures components for lingerie, bras, corsetry, and shapewear. We support sample-based development, specification discussion, and batch supply."],
  ["嘉鑫服装辅料有限公司主营服装辅料、内衣辅料配件生产，支持来样定制、打样开发和批量供货。", "Jiaxin Garment Accessories manufactures lingerie and garment components with sample-based development and batch supply."],
  ["钢圈 · 钢排扣 · 胶骨 · 束身衣扣 支持定制", "Underwires · Hook & Eye Tape · Boning · Corset Hooks"],
  ["佛山内衣辅料工厂直营", "DIRECT LINGERIE COMPONENT MANUFACTURER · FOSHAN"],
  ["来样定制", "Sample-Based Development"],
  ["打样开发", "Sample Development"],
  ["批量供货", "Batch Supply"],
  ["全国发货", "Shipping Available"],
  ["电话咨询", "Call Us"],
  ["微信咨询", "WeChat"],
  ["查看产品", "View Products"],
  ["电话 / 微信：13425969730", "Phone / WeChat: +86 13425969730"],
  ["主营内衣辅料产品", "Core Lingerie Component Products"],
  ["产品展示", "PRODUCTS"],
  ["面向内衣厂、文胸厂、束身衣厂和服装辅料采购商，支持按样品、规格、颜色和尺寸沟通定制。", "For lingerie, bra, corsetry, and shapewear manufacturers. Discuss customization against samples, specifications, colors, and dimensions."],
  ["用于文胸、塑身衣、宫廷瘦身衣、束腰、束身衣等产品的闭合与松紧调节。", "For secure closure and adjustment in bras, shapewear, corsetry, waist trainers, and related garments."],
  ["支持多排数、多长度、多颜色定制，扣合牢固，适合高拉力塑形类服装使用", "Multiple rows, lengths, and colors can be discussed for shaping garments requiring secure closure."],
  ["适用于文胸、调整型内衣、塑身内衣等产品的胸部支撑结构。", "For cup and structural support in bras, lingerie, and shapewear."],
  ["采用不锈钢材质，支撑稳定，不易变形，可按杯型、弧度、尺寸进行批量供应", "Stainless steel construction with size and curvature options for batch purchasing."],
  ["在钢圈外层增加包胶处理，提升亲肤感与安全性，常用于文胸、内衣、塑身衣等产品。", "A metal underwire with an outer coating for bra, lingerie, and shapewear structures."],
  ["可提供不同颜色包胶，兼顾支撑力、防护性和产品外观需求", "Coating colors can be discussed for support, protection, and appearance requirements."],
  ["用于塑身衣、束腰、内衣、礼服内衬等产品的支撑和定型。", "For support and shaping in shapewear, corsetry, lingerie, and gown linings."],
  ["材质轻便、有一定柔韧性，可辅助服装保持版型，减少卷边和变形", "Lightweight and flexible support that helps garments retain their structure."],
  ["适用于束腰、腰封、塑身衣、宫廷瘦身衣等强支撑产品。", "For strong structural support in corsetry, waist trainers, and shapewear."],
  ["具有较强定型与支撑作用，可根据客户需求提供不同长度、宽度和硬度规格", "Length, width, thickness, and model can be discussed for different support requirements."],
  ["常用于特殊杯型文胸、聚拢型内衣、深V内衣、礼服内衬等产品。", "For special cup bras, push-up lingerie, deep-V styles, and gown linings."],
  ["可根据版型需求提供 U 形、V 形等不同结构，帮助实现支撑、聚拢和定型效果", "U and V structures can be discussed for support, shaping, and deep-V applications."],
  ["适用于连体式文胸、聚拢型内衣、塑身内衣等产品结构。", "For connected bras, push-up lingerie, and shapewear structures."],
  ["W形设计可增强胸部承托与中间连接稳定性，适合对版型和支撑要求较高的内衣产品", "The connected W structure supports cup shaping and center stability in structured lingerie."],
  ["用于宫廷束身衣、塑身衣、束腰及胸衣等产品的系带孔位。", "For lacing holes in corsetry, shapewear, waist trainers, and bodices."],
  ["面圈与筒形底件配套，可根据样品和使用位置沟通规格及批量包装", "Ring and barrel specifications, finish, and batch packing can be discussed against samples."],
  ["查看详情", "View Details"],
  ["咨询此产品", "Ask About This Product"],
  ["为什么选择嘉鑫辅料？", "Why Work with Jiaxin?"],
  ["为什么选择", "Why Jiaxin"],
  ["工厂优势", "MANUFACTURING SUPPORT"],
  ["本地工厂、专注品类，支持来样定制与批量供货。", "A focused local manufacturer supporting sample development and batch supply."],
  ["佛山盐步本地工厂", "Foshan Yanbu Factory"],
  ["本地生产，方便看样沟通", "Direct discussion with the local production team"],
  ["主营品类集中", "Focused Product Range"],
  ["聚焦女士内衣辅料配件", "Focused on lingerie and garment components"],
  ["支持来样定制", "Sample-Based Development"],
  ["按样品、图片和规格沟通", "Discuss requirements with samples, images, or specifications"],
  ["支持批量供货", "Batch Supply"],
  ["承接常规补货与批量订单", "Repeat orders and batch purchasing supported"],
  ["工厂直接沟通", "Direct Factory Communication"],
  ["电话微信直接对接需求", "Discuss specifications directly by phone or WeChat"],
  ["支持全国发货", "Shipping Coordination"],
  ["按订单要求包装并发出", "Packing and dispatch according to order requirements"],
  ["来样定制流程", "Sample-Based Development Process"],
  ["定制流程", "PROCESS"],
  ["从发送样品到包装发货，六步完成定制。", "Six clear steps from requirement review to packing and dispatch."],
  ["发样询款", "Share Requirement"],
  ["样品、图片或规格", "Samples, images, or specifications"],
  ["确认细节", "Confirm Details"],
  ["尺寸、颜色与数量", "Dimensions, color, and quantity"],
  ["报价交期", "Price & Lead Time"],
  ["确认价格与周期", "Confirm pricing and schedule"],
  ["打样确认", "Sample Approval"],
  ["核对样品效果", "Review the sample against requirements"],
  ["批量生产", "Batch Production"],
  ["按确认要求生产", "Produce to approved specifications"],
  ["包装发货", "Packing & Dispatch"],
  ["分类包装并发出", "Sort, pack, and dispatch"],
  ["有样品图？直接发给我们确认。", "Have a sample image? Send it to us for review."],
  ["发送样品图咨询", "Send a Sample Image"],
  ["真实工厂与生产现场", "Real Factory and Production Environment"],
  ["工厂能力", "Factory"],
  ["实拍嘉鑫服装辅料生产车间，展示生产设备、加工工位、原材料储备及产品包装现场，为样品开发、常规生产和批量订单提供稳定支持。", "Real factory photographs show production equipment, workstations, material storage, and product packing for sample development and batch orders."],
  ["真实生产车间", "Production Workshop"],
  ["展示实际设备、生产工位与现场加工状态。", "A real view of equipment, workstations, and daily production."],
  ["生产设备与现场加工", "Equipment and Production"],
  ["生产人员根据订单规格开展设备操作、加工处理和工序衔接。", "Production work is arranged according to confirmed order specifications."],
  ["细节加工与产品整理", "Detail Processing and Sorting"],
  ["产品完成主要加工后，进行局部处理、分类整理及周转存放。", "Products are processed, sorted, and organized after the main production steps."],
  ["车间生产全景", "Workshop Overview"],
  ["从整体视角展示车间工位、加工人员、物料备放与现场协作情况。", "An overview of workstations, operators, materials, and production coordination."],
  ["原材料仓储区域", "Material Storage"],
  ["原材料按照类别集中存放，为样品制作、常规生产和批量订单提供备料支持。", "Materials are organized by category for sampling, regular production, and batch orders."],
  ["产品备货与包装", "Order Preparation and Packing"],
  ["不同规格产品进行分类放置、包装和装箱，便于订单核对及物流发货。", "Products are sorted, packed, and boxed by specification for order checking and dispatch."],
  ["多工位生产协作", "Multi-Station Production"],
  ["生产人员在不同设备与工位之间开展加工、整理和周转，保持各道工序顺畅衔接。", "Operators coordinate processing, sorting, and transfer across multiple workstations."],
  ["现场视频", "WORKSHOP VIDEO"],
  ["车间实拍视频", "Factory Workshop Video"],
  ["通过现场视频了解生产环境、设备运行及日常加工状态。", "See the production environment, equipment, and daily operations in a real workshop video."],
  ["当前浏览器不支持视频播放。", "Your browser does not support video playback."],
  ["常见问题", "Frequently Asked Questions"],
  ["如果您不确定产品规格，可以先通过微信发送样品图或需求说明，我们协助确认。", "If the specification is uncertain, send a sample image and application details through WeChat for review."],
  ["可以只发图片咨询吗？", "Can I send only a product image?"],
  ["可以。您可以通过微信发送产品图片、样品图或规格要求，我们协助确认产品类型、尺寸、颜色和数量需求。", "Yes. Send product or sample images through WeChat together with any known dimensions, colors, and quantity."],
  ["可以定制颜色和尺寸吗？", "Can color and dimensions be customized?"],
  ["支持。钢排扣、钢圈、胶骨、钢条等产品可根据颜色、尺寸、规格和使用场景沟通定制。", "Yes. Colors, dimensions, specifications, and application requirements can be discussed for our component range."],
  ["你们适合哪些客户采购？", "Who typically purchases from Jiaxin?"],
  ["适合内衣厂、文胸厂、束身衣厂家、塑身衣厂家、服装辅料采购商、辅料批发商和打版工作室等客户。", "Lingerie, bra, corsetry, and shapewear manufacturers, wholesalers, pattern studios, and sourcing teams."],
  ["可以到厂看样吗？", "Can I visit the factory?"],
  ["可以。公司位于广东省佛山市南海区盐步青龙大道南1号之1号，可提前电话或微信联系到厂沟通。", "Yes. Contact us by phone or WeChat before visiting our factory in Yanbu, Nanhai, Foshan, Guangdong."],
  ["可以打样吗？", "Is sampling available?"],
  ["可根据产品类型、规格和数量需求沟通打样方式，具体以实际产品要求为准。", "Sampling can be discussed according to product type, specification, quantity, and application requirements."],
  ["怎么报价？", "How is pricing confirmed?"],
  ["报价通常需要根据产品类型、规格、颜色、数量、定制要求和包装方式确认。建议先发送样品图或规格说明。", "Pricing depends on product type, specification, color, quantity, customization, and packing. A sample image or specification helps us review the requirement."],
  ["支持全国发货吗？", "Can you arrange shipping?"],
  ["支持国内客户采购对接，可根据客户需求沟通包装和物流发货方式。", "Packing and domestic logistics can be discussed according to order requirements."],
  ["微信和电话是同一个号码吗？", "Is the phone number also used for WeChat?"],
  ["电话 / 微信：13425969730。可直接电话咨询，也可以添加微信发送样品图沟通。", "Phone / WeChat: +86 13425969730. Call directly or add the number on WeChat to send sample images."],
  ["还有其他规格需求？欢迎电话 / 微信咨询。", "Have another specification? Contact us by phone or WeChat."],
  ["欢迎来电咨询或到厂沟通", "Contact Us or Arrange a Factory Visit"],
  ["联系位置", "CONTACT"],
  ["可通过高德地图搜索公司位置，或直接联系杨云琼沟通产品规格、定制需求与报价。", "Use Amap to view the factory location or contact our team to discuss specifications, customization, and pricing."],
  ["点击打开高德地图查看位置", "Open Amap to view the location"],
  ["公司名称", "Company"],
  ["联系人", "Contact"],
  ["杨小姐", "Ms. Yang"],
  ["邮箱", "Email"],
  ["电话 / 微信", "Phone / WeChat"],
  ["公司地址", "Address"],
  ["扫码添加微信，可发送样品图、规格、颜色、数量，协助确认产品与报价。", "Scan to add WeChat and send sample images, specifications, colors, and quantities for review."],
  ["立即拨打电话", "Call Now"],
  ["是否打开高德地图？", "Open Amap?"],
  ["将跳转到高德地图，并以嘉鑫服装辅料有限公司地址作为查看位置。", "You will leave this website and open the Jiaxin factory location in Amap."],
  ["继续打开", "Open Amap"],
  ["留在网站", "Stay on Website"],
  ["内衣配件辅料 · 工厂直营 · 支持定制", "Lingerie Components · Direct Manufacturer · Custom Options"],
  ["电脑端滚轮缩放 · 手机端双指缩放 · 拖动查看", "Mouse-wheel zoom · Pinch to zoom · Drag to pan"],
  ["工厂图片", "Factory Image"],
  ["扫码或复制微信号发送样品图", "Scan or add the number on WeChat to send sample images"],
  ["高德导航", "Amap"],
  ["到厂沟通", "Factory Visit"],
  ["微信同号", "Same Number"],
  ["嘉鑫服装辅料有限公司（嘉鑫辅料）", "Jiaxin Garment Accessories Co., Ltd."],
  ["嘉鑫服装辅料有限公司", "Jiaxin Garment Accessories Co., Ltd."],
  ['aria-label="网站导航"', 'aria-label="Website navigation"'],
  ['aria-label="嘉鑫辅料首页"', 'aria-label="Jiaxin Accessories home"'],
  ['aria-label="主要导航"', 'aria-label="Main navigation"'],
  ['aria-label="服务能力"', 'aria-label="Service capabilities"'],
  ['aria-label="快速联系"', 'aria-label="Quick contact"'],
  ['aria-label="来样定制流程步骤"', 'aria-label="Sample-based development process"'],
  ['aria-label="关闭预览"', 'aria-label="Close image viewer"'],
  ['aria-label="电脑端悬浮联系入口"', 'aria-label="Desktop contact shortcuts"'],
  ['aria-label="手机端快速联系"', 'aria-label="Mobile contact shortcuts"'],
  ['alt="微信二维码"', 'alt="WeChat QR code"'],
  ["嘉鑫服装辅料生产车间与设备实拍", "Jiaxin factory workshop and production equipment"],
  ["嘉鑫服装辅料生产设备及现场加工", "Jiaxin production equipment and processing"],
  ["服装辅料细节加工与产品整理工位", "Garment component detail processing and sorting workstation"],
  ["嘉鑫服装辅料车间生产与物料备放全景", "Jiaxin workshop, production, and material storage overview"],
  ["嘉鑫服装辅料原材料仓储区域", "Jiaxin material storage area"],
  ["服装辅料产品备货包装与分类存放", "Garment component order preparation, packing, and sorting"],
  ["嘉鑫服装辅料多工位生产协作现场", "Jiaxin multi-station production environment"],
  ["嘉鑫服装辅料透明胶骨产品全貌", "Jiaxin transparent plastic boning product overview"],
  ["嘉鑫服装辅料银色金属鸡眼产品全貌", "Jiaxin silver metal garment eyelets product overview"],
  ["查看真实生产车间大图", "View production workshop image"],
  ["查看生产设备与现场加工大图", "View production equipment image"],
  ["查看细节加工与产品整理大图", "View detail processing image"],
  ["查看车间生产全景大图", "View workshop overview image"],
  ["查看原材料仓储区域大图", "View material storage image"],
  ["查看产品备货与包装大图", "View order preparation and packing image"],
  ["查看多工位生产协作大图", "View multi-station production image"],
  ["盐步青龙大道南", "South Qinglong Avenue, Yanbu"],
  ["到厂位置", "Factory Location"],
  ["打开高德地图查看嘉鑫服装辅料有限公司位置", "Open Jiaxin factory location in Amap"],
  ["电话 / 微信咨询", "Call / WeChat"],
  ["产品全貌", " product overview"],
  ["嘉鑫辅料", "Jiaxin Accessories"],
  ["钢排扣", "Hook & Eye Tape"],
  ["不锈钢钢圈", "Stainless Underwire"],
  ["包胶钢圈", "Coated Underwire"],
  ["胶骨", "Plastic Boning"],
  ["钢条", "Steel Boning"],
  ["U/V形钢圈", "U / V-Shaped Underwire"],
  ["W形连体钢圈", "W-Shaped Connected Underwire"],
  ["鸡眼", "Garment Eyelets"],
  ["广东省佛山市南海区盐步青龙大道南1号之1号", "No. 1-1, South Qinglong Avenue, Yanbu, Nanhai District, Foshan, Guangdong, China"],
  ["佛山市", "Foshan"],
  ["广东省", "Guangdong"],
];

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function replaceAllPairs(html, pairs) {
  return [...pairs]
    .sort((a, b) => b[0].length - a[0].length)
    .reduce((output, [from, to]) => output.replaceAll(from, to), html);
}

function stripGeneratedHead(html) {
  return html
    .replace(/^[ \t]*<link rel="canonical"[^>]*data-bilingual>\n?/gm, "")
    .replace(/^[ \t]*<link rel="alternate"[^>]*data-bilingual>\n?/gm, "");
}

function stripLanguageSwitcher(html) {
  return html.replace(/\s*<details class="language-switcher"[\s\S]*?<\/details>/, "");
}

function bilingualHead(canonical, chinese, english, indent = "    ") {
  return `${indent}<link rel="canonical" href="${canonical}" data-bilingual>\n${indent}<link rel="alternate" hreflang="zh-CN" href="${chinese}" data-bilingual>\n${indent}<link rel="alternate" hreflang="en" href="${english}" data-bilingual>\n${indent}<link rel="alternate" hreflang="x-default" href="${chinese}" data-bilingual>\n`;
}

function languageSwitcher(chineseHref, englishHref, activeLanguage) {
  const chineseCurrent = activeLanguage === "zh" ? ' class="is-active" aria-current="page"' : "";
  const englishCurrent = activeLanguage === "en" ? ' class="is-active" aria-current="page"' : "";
  return `<details class="language-switcher"><summary>Language</summary><div class="language-menu"><a${chineseCurrent} href="${chineseHref}" lang="zh-CN">中文</a><a${englishCurrent} href="${englishHref}" lang="en">English</a></div></details>`;
}

function addChineseBilingualMarkup(source, slug = null) {
  let html = stripLanguageSwitcher(stripGeneratedHead(source));
  html = html.replace(
    /href="((?:\.\.\/)?styles\.css)\?v=[^"]+"/,
    'href="$1?v=20260721-bilingual"',
  );
  const chineseUrl = slug ? `https://jiaxinfuzhuang.com/products/${slug}.html` : "https://jiaxinfuzhuang.com/";
  const englishUrl = slug ? `https://jiaxinfuzhuang.com/en/products/${slug}.html` : "https://jiaxinfuzhuang.com/en/";
  const switcher = slug
    ? languageSwitcher(`${slug}.html`, `../en/products/${slug}.html`, "zh")
    : languageSwitcher("./", "en/", "zh");
  html = html.replace(/^([ \t]*)<link rel="stylesheet"/m, `${bilingualHead(chineseUrl, chineseUrl, englishUrl)}$1<link rel="stylesheet"`);
  html = html.replace(/(<nav class="nav-links"[\s\S]*?<\/nav>)/, `$1\n      ${switcher}`);
  return html;
}

function extractGallery(source) {
  const section = source.match(/<div class="detail-gallery">([\s\S]*?)<\/div>\s*<\/section>/)?.[1] ?? "";
  const figures = [...section.matchAll(/<figure class="detail-image-card([^\"]*)">([\s\S]*?)<\/figure>/g)];
  return figures.map((match) => {
    const classes = match[1].includes("placeholder-card") ? "detail-image-card placeholder-card" : "detail-image-card";
    const src = match[2].match(/<img[^>]*src="([^"]+)"/)?.[1] ?? null;
    return { classes, src };
  });
}

function extractHeroImage(source) {
  const figure = source.match(/<figure class="detail-hero-media">([\s\S]*?)<\/figure>/)?.[1] ?? "";
  return {
    src: figure.match(/<img[^>]*src="([^"]+)"/)?.[1] ?? "",
    contain: figure.includes("product-image-contain"),
  };
}

function englishProductPage(product, source) {
  const gallery = extractGallery(source);
  const hero = extractHeroImage(source);
  const labels = ["Product Overview", "Detail", "Specifications", "Options", "Batch Packing", "Application"];
  const galleryMarkup = gallery.map((item, index) => {
    const label = labels[index] ?? `Product Image ${index + 1}`;
    if (!item.src) {
      return `<figure class="${item.classes}"><div>Real product image pending</div><figcaption>${label}</figcaption></figure>`;
    }
    const src = item.src.replace("../assets/", "../../assets/");
    return `<figure class="${item.classes}"><img class="image-viewer-trigger${item.classes.includes("placeholder") ? "" : " product-image-contain"}" src="${src}" alt="${escapeHtml(product.shortName)} — ${label}" tabindex="0"><figcaption>${label}</figcaption></figure>`;
  }).join("\n          ");
  const heroSrc = hero.src.replace("../assets/", "../../assets/");
  const featureMarkup = product.features.map(([title, text], index) => `<article class="advantage-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  const faqMarkup = product.faq.map(([question, answer]) => `<article class="faq-card"><h3>${question}</h3><p>${answer}</p></article>`).join("");
  const mapUrl = "https://uri.amap.com/search?keyword=%E5%B9%BF%E4%B8%9C%E7%9C%81%E4%BD%9B%E5%B1%B1%E5%B8%82%E5%8D%97%E6%B5%B7%E5%8C%BA%E7%9B%90%E6%AD%A5%E9%9D%92%E9%BE%99%E5%A4%A7%E9%81%93%E5%8D%971%E5%8F%B7%E4%B9%8B1%E5%8F%B7";
  const englishUrl = `https://jiaxinfuzhuang.com/en/products/${product.slug}.html`;
  const chineseUrl = `https://jiaxinfuzhuang.com/products/${product.slug}.html`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(product.name)} Manufacturer | Jiaxin Garment Accessories</title>
    <meta name="description" content="${escapeHtml(product.meta)}">
${bilingualHead(englishUrl, chineseUrl, englishUrl)}    <link rel="stylesheet" href="../../styles.css?v=20260721-bilingual">
    <link rel="icon" href="../../assets/brand/logo.jpg">
    <script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.meta,
      image: heroSrc ? `https://jiaxinfuzhuang.com/${heroSrc.replace("../../", "")}` : undefined,
      brand: { "@type": "Brand", name: "Jiaxin Garment Accessories" },
      manufacturer: { "@type": "Organization", name: "Jiaxin Garment Accessories Co., Ltd.", telephone: "+86 13425969730" },
      category: "Garment Accessories",
    }, null, 2)}</script>
    <script src="../../script.js?v=20260721-bilingual" defer></script>
  </head>
  <body class="detail-page english-site">
    <header class="site-header" aria-label="Product page navigation">
      <a class="brand" href="../index.html"><img src="../../assets/brand/logo.jpg" alt="Jiaxin Garment Accessories logo"><span>Jiaxin Accessories</span></a>
      <nav class="nav-links" aria-label="Main navigation"><a href="../index.html">Home</a><a href="../index.html#products">Products</a><a href="#detail-contact">Contact</a></nav>
      ${languageSwitcher(`../../products/${product.slug}.html`, `${product.slug}.html`, "en")}
    </header>
    <main id="top">
      <section class="detail-hero section" aria-labelledby="detail-title">
        <div class="detail-hero-copy">
          <div class="section-kicker">PRODUCT DETAIL</div>
          <h1 id="detail-title">${product.name}</h1>
          <p>${product.description}</p>
          <div class="hero-tags detail-tags">${product.tags.map((tag) => `<span>${tag}</span>`).join("")}<span>MOQ: 2,000 pcs</span></div>
          <div class="hero-actions detail-actions"><a class="button primary" href="tel:+8613425969730">Call Us</a><a class="button map" href="#detail-wechat-consult">WeChat</a><a class="button map" href="../index.html#products">Back to Products</a></div>
        </div>
        <figure class="detail-hero-media"><img class="image-viewer-trigger${hero.contain ? " product-image-contain" : ""}" src="${heroSrc}" alt="${escapeHtml(product.name)} product overview" tabindex="0"><figcaption>Product overview</figcaption></figure>
      </section>
      <section class="section detail-gallery-section" aria-labelledby="gallery-title">
        <div class="section-heading"><div><div class="section-kicker">PRODUCT IMAGES</div><h2 id="gallery-title">${product.shortName} Gallery</h2></div><p>Real product images show the overview, details, specifications, options, packing, and application.</p></div>
        <div class="detail-gallery">
          ${galleryMarkup}
        </div>
      </section>
      <section class="section feature-section" aria-labelledby="features-title">
        <div class="section-heading"><div><div class="section-kicker">PRODUCT FEATURES</div><h2 id="features-title">${product.featureTitle}</h2></div><p>${product.featureIntro}</p></div>
        <div class="advantage-grid">${featureMarkup}</div>
      </section>
      <section class="section spec-section" aria-labelledby="spec-title">
        <div class="section-heading"><div><div class="section-kicker">SPECIFICATIONS</div><h2 id="spec-title">Product Specifications</h2></div><p>Final specifications are confirmed against samples, drawings, quantity, and packing requirements.</p></div>
        <div class="spec-table-wrap"><table class="spec-table"><tbody><tr><th scope="row">Product</th><td>${product.name}</td></tr><tr><th scope="row">Applications</th><td>${product.applications}</td></tr><tr><th scope="row">Custom Options</th><td>${product.customization}</td></tr><tr><th scope="row">Typical Uses</th><td>${product.uses}</td></tr><tr><th scope="row">Minimum Order</th><td>2,000 pcs</td></tr><tr><th scope="row">Contact</th><td>Phone / WeChat: +86 13425969730</td></tr></tbody></table></div>
      </section>
      <section class="section process-section detail-process" aria-labelledby="detail-process-title">
        <div class="section-heading"><div><div class="section-kicker">CUSTOM PROCESS</div><h2 id="detail-process-title">From Requirement to Delivery</h2></div><p>${product.processNote}</p></div>
        <div class="process-line"><span>Send Sample / Image / Specification</span><span>Confirm Dimensions, Color, and Quantity</span><span>Discuss Pricing and Lead Time</span><span>Approve Sample</span><span>Batch Production</span><span>Packing and Dispatch</span></div>
        <div class="section-cta"><p>Unsure about the specification? Send a sample image first.</p><a class="button primary" href="#detail-wechat-consult">Send a Sample Image</a></div>
      </section>
      <section class="section detail-faq-section" aria-labelledby="detail-faq-title">
        <div class="section-heading"><div><div class="section-kicker">FAQ</div><h2 id="detail-faq-title">${product.shortName} FAQ</h2></div><p>Specifications and pricing are confirmed against actual samples, quantity, and packing requirements.</p></div>
        <div class="faq-grid">${faqMarkup}</div>
      </section>
      <section class="section contact-section detail-contact-section" id="detail-contact" aria-labelledby="detail-contact-title">
        <div class="contact-panel"><div><div class="section-kicker">CONTACT</div><h2 id="detail-contact-title">Ask About ${product.shortName}</h2><p>Send sample images, specifications, dimensions, colors, and quantities by phone or WeChat for review.</p></div><div class="contact-route-card"><div class="route-tabs"><a href="tel:+8613425969730">Call Us</a><a href="${mapUrl}" target="_blank" rel="noreferrer">Amap</a></div><address class="contact-list"><p><strong>Phone / WeChat</strong><a href="tel:+8613425969730">+86 13425969730</a></p><p><strong>Email</strong><a href="mailto:13425969730@163.com">13425969730@163.com</a></p><p><strong>Address</strong><span>No. 1-1, South Qinglong Avenue, Yanbu, Nanhai District, Foshan, Guangdong, China</span></p></address><div class="wechat-card" id="detail-wechat-consult"><div><h3>WeChat</h3><p>Scan the QR code and send sample images, specifications, colors, and quantities.</p><strong>Phone / WeChat: +86 13425969730</strong></div><img class="wechat-qr-image" src="../../assets/contact/微信二维码.jpg" alt="Jiaxin WeChat QR code" loading="lazy" decoding="async"></div><div class="contact-actions"><a class="button primary" href="tel:+8613425969730">Call Us</a><a class="button map" href="#detail-wechat-consult">WeChat</a><a class="button map" href="${mapUrl}" target="_blank" rel="noreferrer">Amap</a></div></div></div>
      </section>
    </main>
    <footer class="site-footer"><span>Jiaxin Garment Accessories Co., Ltd.</span><span>${product.shortName} · Direct Manufacturer · Custom Options</span></footer>
    <aside class="floating-contact"><details class="floating-wechat"><summary>WeChat</summary><div class="floating-qr-card"><img class="wechat-qr-image small" src="../../assets/contact/微信二维码.jpg" alt="Jiaxin WeChat QR code" loading="lazy" decoding="async"><strong>Phone / WeChat: +86 13425969730</strong><span>Scan or add the number on WeChat to send sample images</span></div></details><a href="tel:+8613425969730">Call Us</a><a href="${mapUrl}" target="_blank" rel="noreferrer">Amap</a></aside>
    <nav class="mobile-contact-bar" aria-label="Mobile contact"><a href="tel:+8613425969730"><strong>Call</strong><span>+86 13425969730</span></a><a href="#detail-wechat-consult"><strong>WeChat</strong><span>Same Number</span></a><a href="mailto:13425969730@163.com"><strong>Email</strong><span>Send Inquiry</span></a></nav>
    <div class="image-viewer" data-image-viewer hidden role="dialog" aria-modal="true" aria-labelledby="viewer-title"><button class="image-viewer-backdrop" type="button" aria-label="Close image viewer" data-viewer-close></button><div class="image-viewer-panel"><div class="image-viewer-toolbar"><div class="image-viewer-heading"><strong id="viewer-title" data-viewer-title>Product Image</strong><span>Mouse-wheel zoom · Pinch to zoom · Drag to pan</span></div><div class="image-viewer-actions"><button type="button" aria-label="Close image viewer" data-viewer-close>×</button></div></div><div class="image-viewer-stage"><img data-viewer-image alt=""></div></div></div>
  </body>
</html>
`;
}

function englishHomePage(chineseSource) {
  let html = stripLanguageSwitcher(stripGeneratedHead(chineseSource));
  html = html.replace(
    '"url": "https://jiaxinfuzhuang.com/"',
    '"url": "https://jiaxinfuzhuang.com/en/"',
  );
  html = replaceAllPairs(html, homeTranslations);
  html = html.replace('<html lang="zh-CN">', '<html lang="en">');
  html = html.replace('<body>', '<body class="english-site">');
  html = html.replaceAll('href="styles.css', 'href="../styles.css');
  html = html.replaceAll('href="assets/', 'href="../assets/');
  html = html.replaceAll('src="assets/', 'src="../assets/');
  html = html.replaceAll('poster="assets/', 'poster="../assets/');
  html = html.replaceAll('data-viewer-src="assets/', 'data-viewer-src="../assets/');
  html = html.replaceAll('src="script.js', 'src="../script.js');
  html = html.replaceAll('tel:13425969730', 'tel:+8613425969730');
  html = html.replaceAll('>13425969730<', '>+86 13425969730<');
  html = html.replaceAll('"telephone": "13425969730"', '"telephone": "+86 13425969730"');
  html = html.replace(/^([ \t]*)<link rel="stylesheet"/m, `${bilingualHead("https://jiaxinfuzhuang.com/en/", "https://jiaxinfuzhuang.com/", "https://jiaxinfuzhuang.com/en/")}$1<link rel="stylesheet"`);
  html = html.replace(/(<nav class="nav-links"[\s\S]*?<\/nav>)/, `$1\n      ${languageSwitcher("../", "./", "en")}`);
  html = html.replaceAll(
    '<div class="product-actions">',
    '<p class="product-card-moq">MOQ: 2,000 pcs</p><div class="product-actions">',
  );
  html = html.replaceAll("产品中心", "Products");
  html = html.replaceAll("联系我们", "Contact");
  return html;
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

const chineseIndexPath = path.join(siteRoot, "index.html");
let chineseIndex = fs.readFileSync(chineseIndexPath, "utf8");
chineseIndex = addChineseBilingualMarkup(chineseIndex);
writeFile(chineseIndexPath, chineseIndex);
writeFile(path.join(englishRoot, "index.html"), englishHomePage(chineseIndex));

for (const product of products) {
  const chinesePath = path.join(productRoot, `${product.slug}.html`);
  let chineseSource = fs.readFileSync(chinesePath, "utf8");
  chineseSource = addChineseBilingualMarkup(chineseSource, product.slug);
  writeFile(chinesePath, chineseSource);
  writeFile(path.join(englishProductRoot, `${product.slug}.html`), englishProductPage(product, chineseSource));
}

const sitemapUrls = [
  "https://jiaxinfuzhuang.com/",
  ...products.map((product) => `https://jiaxinfuzhuang.com/products/${product.slug}.html`),
  "https://jiaxinfuzhuang.com/en/",
  ...products.map((product) => `https://jiaxinfuzhuang.com/en/products/${product.slug}.html`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${url.endsWith("/") ? "weekly" : "monthly"}</changefreq>\n    <priority>${url.endsWith("/") ? "1.0" : "0.8"}</priority>\n  </url>`).join("\n")}
</urlset>
`;
writeFile(path.join(siteRoot, "sitemap.xml"), sitemap);

console.log(`Generated English homepage and ${products.length} English product pages.`);
