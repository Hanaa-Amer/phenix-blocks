<?php
/**
 * Main Admin Page for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//====> Default Options <====//
if (!function_exists('pds_blocks_default_values')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    //===> Set default values here <===//
    function pds_blocks_default_values() {
        //===> Post Types <===//
        add_option('pds_types', array(
            array(
                'enable'=> true,
                "name"  => "post",
                "label" => "Blog Posts",
                "label_singular" => "Posts",
                "template" => "phenix/blog-example",
                "menu_icon" => "welcome-widgets-menus",
                "taxonomies" => array('post_tag','category')
            ),
            array(
                'enable'=> true,
                "name"  => "sliders",
                "label" => "Block Sliders",
                "singular" => "slider",
                "label_singular" => "Slider",
                "template" => "phenix/slide-hero",
                "menu_icon" => "cover-image",
                "taxonomies" => array()
            ),
        ));

        //===> Menu Locations <===//
        add_option('menu_locations', array('main-menu' => 'Main Menu'));

        //===> Taxonomies <===//
        add_option('pds_taxonomies', array());

        //===> Patterns <===//
        add_option('block_patterns', array(
            array(
                'name'    => "slide-hero",
                'title'    => "Hero Slide",
                'category' => array("phenix", "single", "sections"),
                'content'  => "<!-- wp:phenix/container {\"isFlexbox\":true,\"flexbox\":{\"align\":\"align-start-y align-center-x align-center-y\",\"nowrap\":\"\",\"flowCols\":\"flow-columns\",\"stacked\":\"\"},\"typography\":{\"color\":\"color-white\",\"align\":\"tx-align-center\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":\"bg-grade-45\",\"value\":\"bg-alpha-05\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"full-screen-wide hero-slide pdy-50 fluid\"} -->\n<div class=\"wp-block-phenix-container full-screen-wide hero-slide pdy-50 fluid bg-alpha-05 bg-grade-45 flexbox  align-start-y align-center-x align-center-y color-white tx-align-center\"><!-- wp:phenix/group {\"isFlexbox\":false,\"className\":\"container\"} -->\n<div class=\"wp-block-phenix-group container\"><!-- wp:heading {\"className\":\"weight-medium mb-10\"} -->\n<h2 class=\"weight-medium mb-10\">الشركة الرائدة في صناعة أعمدة الصلب وخدمة الجلفنة</h2>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"className\":\"h1-md display-lg-h5  mb-30\"} -->\n<h2 class=\"h1-md display-lg-h5 mb-30\">تقدم منتجات وخدمات عالية الجودة لرضا العملاء التام منذ عام 1980</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"خدماتنا\",\"url\":\"https://localhost/galvanco/services\",\"radius\":\"radius-md\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"className\":\"w-min-150 me-15\"} -->\n<a class=\"wp-block-phenix-button w-min-150 me-15 btn fs-14 primary normal normal radius-md\" href=\"https://localhost/galvanco/services\" rel=\"noopener\">خدماتنا</a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"تواصل معنا\",\"url\":\"https://localhost/galvanco/تواصل-معنا\",\"radius\":\"radius-md\",\"outline\":true,\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-secondary\"}},\"className\":\"w-min-150 me-15\"} -->\n<a class=\"wp-block-phenix-button w-min-150 me-15 btn fs-14 secondary normal normal radius-md outline\" href=\"https://localhost/galvanco/تواصل-معنا\" rel=\"noopener\">تواصل معنا</a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"منتجاتنا\",\"url\":\"https://localhost/galvanco/services\",\"radius\":\"radius-md\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"className\":\"w-min-150\"} -->\n<a class=\"wp-block-phenix-button w-min-150 btn fs-14 white normal normal radius-md\" href=\"https://localhost/galvanco/services\" rel=\"noopener\">منتجاتنا</a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/container -->"
            ),
            array(
                'name'    => "blog-example",
                'title'    => "Standard Blog",
                'category' => array("phenix", "single"),
                'content'  => "<!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"mb-30\"} -->\n<figure class=\"wp-block-image size-large mb-30\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading -->\n<h2>خدمات شاملة للشركات والأفراد الذين يبحثون عن مشورة الخبراء</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/theme-part {\"part_name\":\"post/info\",\"lock\":{\"move\":true,\"remove\":true}} /-->\n\n<!-- wp:paragraph -->\n<p>شركة رائدة تقدم خدمات شاملة للشركات والأفراد الذين يبحثون عن مشورة الخبراء في الأمور الاقتصادية. يتمتع فريقهم من المهنيين ذوي الخبرة بمعرفة عميقة بأحدث الاتجاهات الاقتصادية ويلتزمون بتقديم النتائج التي تلبي احتياجات عملائهم.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تقدم ABC مجموعة من الخدمات، بما في ذلك التحليل المالي والتنبؤ وأبحاث السوق وإعداد الميزانية وإدارة المخاطر. كما أنها تساعد في تطوير نماذج واستراتيجيات الأعمال الجديدة، فضلا عن الامتثال التنظيمي. فريقهم على دراية جيدة بلوائح الصناعة ويمكنه المساعدة في ضمان التزام الشركات بالقوانين الحالية.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تفخر الشركة بتقديم خدمات عالية الجودة ونصائح مصممة خصيصًا لكل عميل على حدة. تم تدريب فريقهم تدريباً عالياً في مختلف مجالات الاقتصاد، بما في ذلك الاقتصاد الكلي والاقتصاد الجزئي والتجارة الدولية والتمويل والتمويل العام والتنمية الاقتصادية والمزيد.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تدرك ABC أهمية البقاء في طليعة الاتجاهات الاقتصادية، وهذا هو السبب في أنها تقوم بإطلاع عملائها بانتظام على أحدث التطورات في هذا المجال. إنهم يسعون جاهدين لتقديم خدمات استشارية من الدرجة الأولى من شأنها أن تساعد عملائهم على النجاح في اقتصاد اليوم المتغير باستمرار.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>توظف ABC Consulting فريقًا من المهنيين المؤهلين تأهيلا عاليا</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>تشير كلمة Stoic عادة إلى شخص غير مبال بالألم أو اللذة أو الحزن أو اللذة. الاستخدام الحديث هو \"الشخص الذي يقمع المشاعر أو يتحملها بصبر\" ، وقد استخدم لأول مرة كاسم في عام 1579 وكصفة في عام 1596. على عكس مصطلح Epicurean ، فإن إدخال موسوعة ستانفورد للفلسفة على الرواقية ينص على أن \"معنى الصفة الإنجليزية \"الرواقية\" ليست مضللة بالكامل في أصلها الفلسفي \"</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية تحاول تحقيق حالة من السلام والهدوء</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>تعلم الرواقية أنه يمكن للمرء أن يحقق السعادة من خلال الانفصال الداخلي عن الأشياء المادية</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:paragraph -->\n<p>الرواقية هي مدرسة فلسفية نشأت في أوائل القرن الثالث قبل الميلاد. من اليونان القديمة وروما. إنها فلسفة الحياة التي تعظم المشاعر الإيجابية ، وتقلل من المشاعر السلبية ، وتساعد الأفراد على تطوير فضائلهم الشخصية.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>تقدم ABC مجموعة من الخدمات، بما في ذلك التحلي</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>تشتهر الفلسفة الرواقية بمجموعة أدواتها الخاصة بـ \"الممارسات الروحية\" المصممة لمساعدتك على التأقلم مع الحياة. لكن توصياته للعلاقات تبدو محدودة. يعتقد إبيكتيتوس (50-135 بعد الميلاد) ، الفيلسوف الروماني الرواقي الشهير ، أنه من أجل أن يكون المرء سعيدًا ، يجب على المرء أن يتجاوز نفسه ...</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://via.placeholder.com/780x500.webp\" alt=\"\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:heading {\"level\":4} -->\n<h4>يمكن أن يكون الجولف وسيلة جيدة لممارسة الرياضة</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">شركة خدمات الاستشارات الاقتصادية ABC هي شركة رائدة في تقديم خدمات الاستشارات الاقتصادية. إنهم يقدمون للعملاء مجموعة واسعة من الخدمات، من المشورة الإستراتيجية عالية المستوى إلى التحليل التفصيلي والدعم الفني.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية تحاول تحقيق حالة من السلام والهدوء</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>تعلم الرواقية أنه يمكن للمرء أن يحقق السعادة من خلال الانفصال الداخلي عن الأشياء المادية</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->"
            ),
            array(
                'name'    => "header-standard",
                'title'    => "Header Standard",
                'category' => array("phenix", "headers"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container-xl\",\"isSection\":true,\"isFlexbox\":true,\"flexbox\":{\"flow\":\"\",\"align\":\"align-center-y align-between \",\"nowrap\":\"\"},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"main-header bg-white pdy-15 bx-shadow-dp-1\"} -->\n<div class=\"wp-block-phenix-container main-header bg-white pdy-15 bx-shadow-dp-1\"><div class=\"flexbox container-xl align-center-y align-between \"><!-- wp:phenix/logo {\"site_title\":\"مميز\",\"logo\":\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/logo.svg\",\"size\":\"46px\",\"fevicon\":\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/favicon.svg\",\"responsive\":true,\"use_fevicon\":true,\"lock\":{\"move\":true,\"remove\":true}} -->\n<a class=\"wp-block-phenix-logo inline-block\" href=\"#none\" title=\"مميز\"><img src=\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/logo.svg\" class=\"hidden-md-down\" alt=\"مميز\" style=\"height:46px\"/><img src=\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/favicon.svg\" class=\"hidden-lg-up\" alt=\"مميز\" style=\"height:46px\"/></a>\n<!-- /wp:phenix/logo -->\n\n<!-- wp:phenix/group {\"flexbox\":{\"stacked\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"\"}},\"lock\":{\"move\":true,\"remove\":true}} -->\n<div class=\"wp-block-phenix-group flexbox\"><!-- wp:phenix/navigation {\"menu_id\":\"main-menu\",\"responsive\":true,\"mobile_mode\":\"custom\",\"effect\":\"fade\",\"direction\":\"flexbox\",\"hover\":true,\"lock\":{\"move\":true,\"remove\":true}} /-->\n\n<!-- wp:phenix/button {\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-md\",\"outline\":true,\"data_id\":\"main-menu\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"far fa-bars hidden-lg-up ms-10\"} -->\n<button class=\"wp-block-phenix-button far fa-bars hidden-lg-up ms-10 btn primary menu-toggle square small radius-md outline\" data-id=\"main-menu\"></button>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"حساب جديد\",\"type\":\"btn-icon\",\"size\":\"small\",\"radius\":\"radius-sm\",\"outline\":true,\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"fs-13 far fa-user-plus responsive-btn ms-10\"} -->\n<a class=\"wp-block-phenix-button fs-13 far fa-user-plus responsive-btn ms-10 btn primary btn-icon small radius-sm outline\" href=\"#none\" rel=\"noopener\">حساب جديد</a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"تسجيل الدخول\",\"type\":\"btn-icon\",\"size\":\"small\",\"radius\":\"radius-sm\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"fs-13 far fa-user ms-10\"} -->\n<a class=\"wp-block-phenix-button fs-13 far fa-user ms-10 btn primary btn-icon small radius-sm\" href=\"#none\" rel=\"noopener\">تسجيل الدخول</a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array(
                'name'    => "footer-standard",
                'title'    => "Footer Standard",
                'category' => array("phenix", "footers"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"typography\":{\"color\":\"color-white\"},\"style\":{\"background\":{\"type\":\"image\",\"rotate\":null,\"value\":\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/footer.jpg\"}},\"className\":\"pdt-40\"} -->\n<div class=\"wp-block-phenix-container pdt-40 px-media\" data-src=\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/footer.jpg\"><div class=\"container color-white\"><!-- wp:phenix/row {\"className\":\"gpy-30 gpy-fix\"} -->\n<div class=\"wp-block-phenix-row gpy-30 gpy-fix row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6 col-lg-4\",\"spacing_pd\":\"  pdb-30\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6 col-lg-4   pdb-30\"><!-- wp:heading {\"level\":5,\"className\":\"fs-17 mb-15\"} -->\n<h5 class=\"fs-17 mb-15\">من نحن</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">منصة تدريبية رقمية موحدة تـأسست بتاريخ 10 مايو 2022 تـقدم جـميع الخـدمـات التـدريبية التـأسيسية والتـأهيلية و التـطويـرية والـتخصصية من دورات وبـرامـج وورش عمـل وحـقائب تـدريبية عن طـريق ربـط الـراغبين بالـخدمـات التـدريـبية مـن طـلاب وخـريـجـيـن ومـوظفين بمقـدمي الـخدمات الـتدريبية المعتمدة في المملكة العربية السعودية وكذلك المدربين الاكفاء في شتى التخصصات</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-3 col-lg-2\",\"spacing_mg\":\"  mb-30\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-3 col-lg-2   mb-30\"><!-- wp:heading {\"level\":5,\"className\":\"fs-17 mb-15\"} -->\n<h5 class=\"fs-17 mb-15\">روابط سريعة</h5>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/navigation {\"menu_id\":\"footer-links\",\"className\":\"links-list\"} /--></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-3 col-lg-2\",\"spacing_mg\":\"  mb-30\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-3 col-lg-2   mb-30\"><!-- wp:heading {\"level\":5,\"className\":\"fs-17 mb-15\"} -->\n<h5 class=\"fs-17 mb-15\">خدماتنا</h5>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/navigation {\"menu_id\":\"footer-links-2\",\"className\":\"links-list mb-20\"} /--></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12  col-lg-4\",\"spacing_pd\":\"  pdb-30\"} -->\n<div class=\"wp-block-phenix-column col-12  col-lg-4   pdb-30\"><!-- wp:heading {\"level\":5,\"className\":\"fs-17 mb-15\"} -->\n<h5 class=\"fs-17 mb-15\">النشرة الاخبارية</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"fs-13\"} -->\n<p class=\"fs-13\">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:contact-form-7/contact-form-selector {\"id\":188,\"title\":\"النشرة الاخبارية\"} -->\n<div class=\"wp-block-contact-form-7-contact-form-selector\">[contact-form-7 id=\"188\" title=\"النشرة الاخبارية\"]</div>\n<!-- /wp:contact-form-7/contact-form-selector -->\n\n<!-- wp:phenix/group -->\n<div class=\"wp-block-phenix-group flexbox flow-columns\"><!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-dribbble\",\"color\":\"color-white\",\"className\":\"fs-16 fab fa-instagram me-10 bg-dribbble color-white\"} -->\n<a class=\"wp-block-phenix-button fs-16 fab fa-instagram me-10 bg-dribbble color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-flicker\",\"color\":\"color-white\",\"className\":\"fs-16 fab fa-linkedin-in me-10 bg-flicker color-white\"} -->\n<a class=\"wp-block-phenix-button fs-16 fab fa-linkedin-in me-10 bg-flicker color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-whatsapp\",\"color\":\"color-white\",\"className\":\"fs-18 fab fa-whatsapp ms-1 me-10 bg-whatsapp color-white\"} -->\n<a class=\"wp-block-phenix-button fs-18 fab fa-whatsapp ms-1 me-10 bg-whatsapp color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-twitter\",\"color\":\"color-white\",\"className\":\"fs-17 fab fa-twitter me-10 bg-twitter color-white\"} -->\n<a class=\"wp-block-phenix-button fs-17 fab fa-twitter me-10 bg-twitter color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-facebook\",\"color\":\"color-white\",\"className\":\"fs-17 fab fa-facebook-f pde-10 bg-facebook color-white\"} -->\n<a class=\"wp-block-phenix-button fs-17 fab fa-facebook-f pde-10 bg-facebook color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:phenix/column {\"size\":\"col-12\",\"spacing_pd\":\" comb-sm-pd  pdy-15\",\"className\":\"divider-t\"} -->\n<div class=\"wp-block-phenix-column divider-t col-12  comb-sm-pd  pdy-15\"><!-- wp:paragraph {\"className\":\"tx-align-center fs-13 lineheight-130\"} -->\n<p class=\"tx-align-center fs-13 lineheight-130\">جميع الحقوق محفوظة لمنصة مميز © 2023</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array(
                'name'    => "page-head",
                'title'    => "Page Head Standard",
                'category' => array("phenix", "section"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"typography\":{\"color\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-alpha-05\"}},\"className\":\"pdy-30\"} -->\n<div class=\"wp-block-phenix-container pdy-30 bg-alpha-05\"><div class=\"container\"><!-- wp:phenix/page-head /--></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array(
                'name'    => "error-404",
                'title'    => "Error 404 Standard",
                'category' => array("phenix", "section", "single"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"typography\":{\"color\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-alpha-05\"}},\"className\":\"pdy-30\"} -->\n<div class=\"wp-block-phenix-container pdy-30 bg-alpha-05\"><div class=\"container\"><!-- wp:phenix/page-head /--></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array(
                'name'    => "native-query",
                'title'    => "Native Query",
                'category' => array("phenix", "pages", "single"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"className\":\"pdy-50\"} -->\n<div class=\"wp-block-phenix-container pdy-50 bg-white\"><div class=\"container\"><!-- wp:phenix/query {\"template_part\":\"cards/blog\",\"pagination\":true,\"grid_mode\":true,\"grid\":{\"cols-md\":3,\"cols-lg\":4}} /--></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array(
                'name'    => "single-template",
                'title'    => "Single Template",
                'category' => array("phenix", "pages"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"className\":\"pd-20 pd-md-30 radius-lg border-1 border-solid border-alpha-15 my-30 my-md-50\"} -->\n<div class=\"wp-block-phenix-container pd-20 pd-md-30 radius-lg border-1 border-solid border-alpha-15 my-30 my-md-50 bg-white container\"><!-- wp:post-content {\"layout\":{\"inherit\":true}} /--></div>\n<!-- /wp:phenix/container -->"
            ),
        ));

        //===> Blocks settings <===//
        update_option('pds_admin_style', "on");
        update_option('container_block', "on");
        update_option('logo_block', "on");
        update_option('navigation_block', "on");
        update_option('button_block', "on");
        update_option('row_block', "on");
        update_option('column_block', "on");
        update_option('head_block', "on");
        update_option('query_block', "on");
        update_option('taxonomies_list_block', "on");
        update_option('taxonomies_block', "on");
        update_option('theme_part_block', "on");
        update_option('group_block', "on");
        update_option('inline_elements_block', "on");
        
        //===> Optimization settings <===//
        update_option('head_cleaner', "on");
        update_option('wpc7_cleaner', "on");
        update_option('adminbar_css', "on");
        update_option('comments_css', "on");
        update_option('wpc7_rm_styles', "on");
        update_option('wpc7_rm_scripts', "on");
        update_option('blocks_optimizer', "on");
    }

    add_action('init', 'pds_blocks_default_values');
endif;