<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/', 'assets/img/blocks/core/', $assets_url);

    //===> Types Panel <===//
    if (!function_exists('pds_types_panel')) {
        function pds_types_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/post-types.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Taxonomies Panel <===//
    if (!function_exists('pds_taxonomies_panel')) {
        function pds_taxonomies_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/taxonomies.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Locations Panel <===//
    if (!function_exists('pds_menus_locations_panel')) {
        function pds_menus_locations_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/locations.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Metaboxes Panel <===//
    if (!function_exists('pds_metabox_panel')) {
        function pds_metabox_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/metabox.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Patterns Panel <===//
    if (!function_exists('pds_patterns_panel')) {
        function pds_patterns_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/block-patterns.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //====> Create Page <====//
    if (function_exists('pds_add_admin_page')) :
        //===> Create New Page <===//
        echo pds_add_admin_page(
            //==> Page Title <==//
            'Custom Data Collection',
            //==> Page Description <==//
            'here you can add and remove Dynamic Custom Data like Post Types, Taxonomies, Menu Locations, Metaboxes for your data.',
            //==> Options Form Slug <==//
            'pds-data-collection',
            //==> Tabs List <==//
            array(
                //==> Locations Panel <==//
                array(
                    "title" => "Menu Locations",
                    "slug"  => "pds-locations",
                    "icon"  => "far fa-list",
                    "content" => 'pds_menus_locations_panel',
                ),
                //==> Types Panel <==//
                array(
                    "title" => "Post Types",
                    "slug"  => "pds-types",
                    "icon"  => "far fa-cube",
                    "content" => 'pds_types_panel',
                ),
                //==> Taxonomies Panel <==//
                array(
                    "title" => "Taxonomies",
                    "slug"  => "pds-taxonomy",
                    "icon"  => "far fa-boxes",
                    "content" => 'pds_taxonomies_panel',
                ),
                //==> Meta Boxes Panel <==//
                // array(
                //     "title" => "Metaboxes",
                //     "slug"  => "pds-metabox",
                //     "icon"  => "far fa-layer-group",
                //     "content" => 'pds_metabox_panel',
                // ),
                //==> Patterns Panel <==//
                array(
                    "title" => "Block Patterns",
                    "slug"  => "pds-patterns",
                    "icon"  => "far fa-file-alt",
                    "content" => 'pds_patterns_panel',
                ),
            ),
            //==> Hide Submit Button <==//
            false
        );
    endif;
?>
<!-- Form Script -->
<script defer>
    document.addEventListener('DOMContentLoaded', ready => {
        //===> Get Options Method <===//
        async function get_options() {
            //===> Connect to the API <===//
            const response = await fetch(`${PDS_WP_KEY.root}options`, {
                method : 'GET', //===> [GET, POST, PUT, DELETE].
                headers: {      //===> WP Cookies Auth
                    "Content-Type": "application/json",
                    "X-WP-Nonce": PDS_WP_KEY.nonce
                },
                credentials: "same-origin",
            });

            //===> Return Data <===//
            return response.json();
        }

        //===> Update Options Method <===//
        async function update_options(options) {
            //===> Get Data <===//
            let data = {...options};

            //===> Connect to the API <===//
            const response = await fetch(`${PDS_WP_KEY.root}options`, {
                method : 'POST', //===> [GET, POST, PUT, DELETE].
                headers: {       //===> WP Cookies Auth
                    "X-WP-Nonce"   : PDS_WP_KEY.nonce,
                    "Content-Type" : "application/json",
                },
                credentials: "same-origin",
                body : JSON.stringify(data)
            });

            //===> Return Response <===//
            return await response;
        }

        //===> Data Templates <===//
        const location_template = (key, value) => {
            return (`<li class="flexbox divider-b align-center-y ${key !== "main-menu" ? 'pdy-5' : 'pdy-10'} pds-15 pde-10 mb-0">
                <!-- Location Title -->
                <span class="tx-icon fas fa-list col-5 item-title">${value}</span>

                <!-- Location Name -->
                <span class="tx-icon fas fa-location col-5 item-name">${key}</span>

                <!-- Action Buttons -->
                ${key !== "main-menu" ? `<div class="col-auto ms-auto flexbox">
                    <button type="button" class="remove-item btn light tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
                </div>` : ""}
            </li>`)
        },

        type_template = (type) => {
            return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
                <!-- Label -->
                <span class="tx-icon dashicons-before dashicons-${type.menu_icon ? type.menu_icon : "category"} col-4 item-label">${type.label}</span>

                <!-- Name -->
                <span class="tx-icon far fa-link col-3 item-name">${type.name}</span>

                <!-- Singular -->
                <span class="tx-icon far fa-link col-2 item-singular">${type.singular ? type.singular : type.name}</span>

                <!-- Buttons -->
                <div class="col-auto ms-auto flexbox align-center-y">
                    <!-- Status -->
                    <label class="small option-control me-5" data-type="switch">
                        <input type="checkbox" name="item-status" ${type.enable ? 'checked' : null}><span class="switch"></span>
                    </label>
                    <!-- Edit -->
                    <button type="button" class="edit-item me-5 btn bg-transparent tiny square color-primary far fa-pencil fs-18" data-target="li"></button>
                    <!-- Remove -->
                    <button type="button" class="remove-item btn bg-transparent tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
                </div>
            </li>`);
        },

        taxonomy_template = (taxonomy) => {
            return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
                <!-- Label -->
                <span class="tx-icon far fa-boxes col-4 item-label">${taxonomy.label}</span>

                <!-- Name -->
                <span class="tx-icon far fa-link col-3 item-name">${taxonomy.name}</span>

                <!-- Types -->
                <span class="tx-icon far fa-link col-2 item-types tx-nowrap">${taxonomy.post_types ? taxonomy.post_types : taxonomy.post_types}</span>

                <!-- Buttons -->
                <div class="col-auto ms-auto flexbox align-center-y">
                    <!-- Status -->
                    <label class="small option-control me-5" data-type="switch">
                        <input type="checkbox" name="item-status" ${taxonomy.enable ? 'checked' : null}><span class="switch"></span>
                    </label>
                    <!-- Edit -->
                    <button type="button" class="edit-item me-5 btn bg-transparent tiny square color-primary far fa-pencil fs-18" data-target="li"></button>
                    <!-- Remove -->
                    <button type="button" class="remove-item btn bg-transparent tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
                </div>
            </li>`);
        },

        pattern_template = (pattern) => {
            return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
                <!-- Label -->
                <span class="tx-icon far fa-boxes col-4 item-label">${pattern.title}</span>

                <!-- Name -->
                <span class="tx-icon far fa-link col-3 item-name">${pattern.name}</span>

                <!-- Buttons -->
                <div class="col-auto ms-auto flexbox align-center-y">
                    <!-- Edit -->
                    <button type="button" class="edit-item me-5 btn bg-transparent tiny square color-primary far fa-pencil fs-18" data-target="li"></button>
                    <!-- Remove -->
                    <button type="button" class="remove-item btn bg-transparent tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
                </div>
            </li>`);
        },

        //===> Success Notification <===//
        data_success = (message) => {
            Phenix(document).notifications({
                type     : "success",
                message  : message,
                position : ["bottom", "end"],
            });
        },

        //===> Update List Method <===//
        update_list = (type, list, template) => {
            //===> Get Data from Rest-API <===//
            get_options().then(options => {
                //===> Define Data <===//
                let current = options,
                    theData = current[type];
                    dataList = document.querySelector(list);
    
                //===> Clear Current Data List <===//
                dataList?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());
    
                //===> Create New List <===//
                if (type === "menu_locations") {
                    for (const [key, value] of Object.entries(theData)) Phenix(dataList).insert('append', template(key, value));
                } else {
                    theData.forEach(item => Phenix(dataList).insert('append', template(item)));
                }

                //===> Activate Edit Method <===//
                Phenix(`${list} .edit-item`).on('click', event => edit_item(event.target));
                
                //===> Activate Remove Method <===//
                Phenix(`${list} .remove-item`).on('click', event => remove_item(event.target));

                //===> Activate Toggle Method <===//
                Phenix(`${list} input[name="item-status"]`).on('change', event => toggle_item(event.target));
                
            }).then(response => {}).catch(error => {error.message});
        },

        //===> Add Items Method <===//
        add_item = (trigger) => {
            //===> Get Elements <===//
            let data_form = Phenix(trigger).ancestor(".collection-form"),
                data_type = data_form.getAttribute('data-type'),
                form_Controls = data_form.querySelectorAll("input, select, textarea");

            //===> Define Data <===//
            let new_type = {},
                new_pattern = {},
                new_taxonomy = {},
                new_location = {};

            //===> Validate Controls <===//
            Phenix(...form_Controls).validation();

            //===> if the Controls is valid <===//
            if (!data_form.querySelector('.error')) {
                //===> Controls Handle <===//
                form_Controls.forEach(control => {
                    //===> Define Data <===//
                    let control_name = control.getAttribute('name');
                    
                    //===> Check the Control <===//
                    if (control_name) {
                        //===> Correct Locations <===//
                        if (data_type === "menu-locations") {
                            //===> Validate the Location Name <===//
                            if (control_name === 'name' && !control.value) {
                                //===> if "name" not exist get it from the Title <===//
                                let location_name = Phenix('[name="title"]')[0].value.toLowerCase().replaceAll(' ','-');
                                new_location[control_name] = location_name.toLowerCase().replaceAll(' ','-');
                            }
    
                            //===> Add the new Location Title <===//
                            else new_location[control_name] = control.value;
                        }

                        //===> Post Types <===//
                        else if (data_type === "post-types") {
                            //===> Check Name <===//
                            if (!control.value && control_name === "name") new_type[control_name] = new_type["label"].toLowerCase().replaceAll(' ','-');
                            
                            //===> Check Status <===//
                            else if (control_name === "enable") new_type[control_name] = control.checked;

                            //===> Check for Array <===//
                            else if (control.tagName === "SELECT" && control.getAttribute('multiple') !== null) {
                                //===> Get Multiple Value <===//
                                let values = Phenix(control).ancestor('.px-select').getAttribute('data-value').split(','),
                                    array_val = [];

                                //===> Get Current Values <===//
                                values.forEach(val => val !== "" ? array_val.push(val) : null);

                                //===> Set Array Value <===//
                                new_type[control_name] = array_val;
                            }

                            //===> Set the Value <===//
                            else if (control.value && control.value.length > 0) new_type[control_name] = control.value;
                        }

                        //===> Taxonomies <===//
                        else if (data_type === "taxonomies") {
                            //===> Check Name <===//
                            if (!control.value && control_name === "name") new_taxonomy[control_name] = new_taxonomy["label"].toLowerCase().replaceAll(' ','-');

                            //===> Check Status <===//
                            else if (control_name === "enable") new_taxonomy[control_name] = control.checked;

                            //===> Check for Array <===//
                            else if (control.tagName === "SELECT" && control.getAttribute('multiple') !== null) {
                                //===> Get Multiple Value <===//
                                let values = Phenix(control).ancestor('.px-select').getAttribute('data-value').split(','),
                                    array_val = [];

                                //===> Get Current Values <===//
                                values.forEach(val => val !== "" ? array_val.push(val) : null);

                                //===> Set Array Value <===//
                                new_taxonomy[control_name] = array_val;
                            }

                            //===> Set the Value <===//
                            else if (control.value && control.value.length > 0) new_taxonomy[control_name] = control.value;
                        }

                        //===> Patterns <===//
                        else if (data_type === "block-pattern") {
                            //===> Check Name <===//
                            if (!control.value && control_name === "name") new_pattern[control_name] = new_pattern["title"].toLowerCase().replaceAll(' ','-');

                            //===> Check for Array <===//
                            else if (control.tagName === "SELECT" && control.getAttribute('multiple') !== null) {
                                //===> Get Multiple Value <===//
                                let values = Phenix(control).ancestor('.px-select').getAttribute('data-value').split(','),
                                    array_val = [];

                                //===> Get Current Values <===//
                                values.forEach(val => val !== "" ? array_val.push(val) : null);

                                //===> Set Array Value <===//
                                new_pattern[control_name] = array_val;
                            }

                            //===> Set the Value <===//
                            else if (control.value && control.value.length > 0) {
                                if (control_name === 'content') new_pattern[control_name] = control.value;
                                else new_pattern[control_name] = control.value;
                            }
                        }
                    }
                });
                
                //===> Set Loading Mode <===//
                trigger.classList.add('px-loading-inline');

                //===> Update Data List <===//
                get_options().then(options => {
                    //===> Define Data <===//
                    let current = options;

                    //===> Set Locations <===//
                    if (new_location['name']) {
                        current.menu_locations[new_location['name']] = new_location['title'];
                    }

                    //===> Set Types <===//
                    else if (new_type['name']) {
                        //===> Check for Existing <===//
                        let alreadyExist = false;

                        current.pds_types.forEach(type => {
                            //===> Set New Type <===//
                            type['name'] === new_type['name'] ? alreadyExist = true : null;

                            //===> if found convert to update <===//
                            if (alreadyExist) {
                                //===> Define Data <===//
                                let new_data = [];
                                
                                //===> Remove the old Type <===//
                                current.pds_types.forEach((type) => type.name !== new_type.name ? new_data.push(type) : null);

                                //===> Reset Existing <===//
                                current.pds_types = new_data;
                                alreadyExist = false;
                            }
                        });

                        //===> Add Type <===//
                        if (!alreadyExist) { current.pds_types.push(new_type); }
                    }

                    //===> Set Taxonomies <===//
                    else if (new_taxonomy['name']) {
                        //===> Check for Existing <===//
                        let alreadyExist = false;

                        current.pds_taxonomies.forEach(taxonomy => {
                            //===> Set New Type <===//
                            taxonomy['name'] === new_taxonomy['name'] ? alreadyExist = true : null;

                            //===> if found convert to update <===//
                            if (alreadyExist) {
                                //===> Define Data <===//
                                let new_data = [];
                                
                                //===> Remove the old Type <===//
                                current.pds_taxonomies.forEach((taxonomy) => taxonomy.name !== new_taxonomy.name ? new_data.push(taxonomy) : null);

                                //===> Reset Existing <===//
                                current.pds_taxonomies = new_data;
                                alreadyExist = false;
                            }
                        });

                        //===> Add Type <===//
                        if (!alreadyExist) { current.pds_taxonomies.push(new_taxonomy); }
                    }

                    //===> Set Patterns <===//
                    else if (new_pattern['name']) {
                        //===> Check for Existing <===//
                        let alreadyExist = false;

                        current.block_patterns.forEach(pattern => {
                            //===> Set New Type <===//
                            pattern['name'] === new_pattern['name'] ? alreadyExist = true : null;

                            //===> if found convert to update <===//
                            if (alreadyExist) {
                                //===> Define Data <===//
                                let new_data = [];
                                
                                //===> Remove the old Type <===//
                                current.block_patterns.forEach((pattern) => pattern.name !== new_pattern.name ? new_data.push(pattern) : null);

                                //===> Reset Existing <===//
                                current.block_patterns = new_data;
                                alreadyExist = false;
                            }
                        });

                        //===> Add Type <===//
                        if (!alreadyExist) { current.block_patterns.push(new_pattern); }
                    }

                    //===> Update Options <===//
                    update_options(current).then(response => {
                        //===> Remove Loading Mode <===//
                        trigger.classList.remove('px-loading-inline');
    
                        //====> Show Notifications <====//
                        data_success("Success : the Data has been Updated.");

                        //===> Update Types <===//
                        if (new_type['name']) {
                            !new_type['enable'] ? update_list("pds_types", ".types-list", type_template) : location.reload();
                        }

                        //===> Update Types <===//
                        else if (new_taxonomy['name']) {
                            !new_taxonomy['enable'] ? update_list("pds_taxonomies", ".taxonomies-list", taxonomy_template) : location.reload();
                        }

                        //===> Update Locations <===//
                        else if (new_location['name']) {
                            update_list("menu_locations", ".locations-list", location_template);
                        }

                        //===> Update Patterns <===//
                        else if (new_pattern['name']) {
                            update_list("block_patterns", ".patterns-list", pattern_template);
                        }
                    });
                }).catch(error => {error.message});
            }
        },

        //===> Remove Item Method <===//
        remove_item = (trigger) => {
            //===> Define Elements <===//
            let menu_item = Phenix(trigger).ancestor('li'),
                menu_element = Phenix(menu_item).ancestor('ul'),
                item_stats = menu_item.querySelector(`[name="item-status"]`)?.checked,
                item_name = Phenix(trigger).ancestor('li').querySelector('.item-name')?.textContent;

            //===> Set Loading Mode <===//
            menu_item.classList.add('px-loading-inline');

            //===> Get Data from Rest-API <===//
            get_options().then(options => {
                //===> Define Data <===//
                let list_classes = menu_element.classList;
                    current = options;

                //===> for Locations <===//
                if (list_classes.contains('locations-list')) {
                    delete current.menu_locations[`${item_name}`];
                }

                //===> for [Types, Taxonomies, Metaboxes, Patterns] <===//
                else {
                    //===> Define Data <===//
                    let new_data = []
                        data_type = 'pds_types';

                    //===> Check for Taxonomies <===//
                    if (list_classes.contains('taxonomies-list')) data_type = 'pds_taxonomies';
                    if (list_classes.contains('patterns-list')) data_type = 'block_patterns';

                    //===> Find the item and Excluded from the new List <===//
                    current[data_type].forEach((type) => type.name !== item_name ? new_data.push(type) : null);

                    //===> Set the New List <===//
                    current[data_type] = new_data;
                }

                //===> Update Options <===//
                update_options(current).then(succuss => {
                    //===> Show Notification <===//
                    data_success("the Item has been Deleted.");

                    //===> Update Types <===//
                    if (list_classes.contains('types-list')) {
                        item_stats ? location.reload() : update_list("pds_types", ".types-list", type_template);
                    }

                    //===> Update Taxonomies <===//
                    else if (list_classes.contains('taxonomies-list')) {
                        update_list("pds_taxonomies", ".taxonomies-list", taxonomy_template);
                    }

                    //===> Update Locations <===//
                    else if (list_classes.contains('locations-list')) {
                        update_list("menu_locations", ".locations-list", location_template);
                    }

                    //===> Update Patterns <===//
                    else if (list_classes.contains('patterns-list')) {
                        update_list("block_patterns", ".patterns-list", pattern_template);
                    }
                }).catch(error => {error.message});
            });
        },

        //===> Toggle Item Method <===//
        toggle_item = (trigger) => {
            //===> Define Elements <===//
            let item_stats = trigger.checked,
                menu_item = Phenix(trigger).ancestor('li'),
                menu_element = Phenix(menu_item).ancestor('ul'),
                listClasses = menu_element.classList,
                item_name = Phenix(trigger).ancestor('li').querySelector('.item-name')?.textContent;

            //===> Set Loading Mode <===//
            menu_item.classList.add('px-loading-inline');

            //===> Get Data from Rest-API <===//
            get_options().then(options => {
                //===> Define Data <===//
                let current = options,
                    dataTarget = [];

                //===> Correct Data Target <===//
                if (listClasses.contains('types-list')) dataTarget = current.pds_types;
                else if (listClasses.contains('metabox-list')) dataTarget = current.pds_metabox;
                else if (listClasses.contains('patterns-list')) dataTarget = current.block_patterns;
                else if (listClasses.contains('taxonomies-list')) dataTarget = current.pds_taxonomies;

                //===> Find the item and change its status <===//
                if (dataTarget.length > 0) dataTarget.forEach((item) => item.name === item_name ? item.enable = item_stats : null);

                //===> Update Options <===//
                update_options(current).then(succuss => {
                    //===> Show Notification <===//
                    data_success("the Item has been Disabled.");

                    //===> Reload Page <===//
                    location.reload();
                }).catch(error => {error.message});
            });
        },

        //===> Edit Item Method <===//
        edit_item = (trigger) => {
            //===> Define Elements <===//
            let menu_item = Phenix(trigger).ancestor('li'),
                menu_element = Phenix(menu_item).ancestor('ul'),
                listClasses = menu_element.classList,
                item_stats = menu_item.querySelector(`[name="item-status"]`)?.checked,
                item_name = Phenix(trigger).ancestor('li').querySelector('.item-name')?.textContent;

            //===> Set Selected Mode <===//
            menu_element.querySelector('.bg-offwhite-primary')?.classList.remove('bg-offwhite-primary');
            menu_item.classList.add('bg-offwhite-primary');

            //===> Define Data <===//
            let dataItem,
                FormElement = document.querySelector(".tab-panel.active .collection-form"),
                dataType = FormElement?.getAttribute('data-type'),
                FormControls = FormElement.querySelectorAll('input, select, textarea');

            //===> Highlight Form <===//
            FormElement.classList.add('form-highlight');
            setTimeout(() => FormElement.classList.remove('form-highlight'), 1500);

            //===> Reset Controls <===//
            FormControls.forEach(control => {
                //===> Define Data <===//
                let control_tag = control.tagName;

                //===> Reset Value <===//
                if (control_tag === 'SELECT') {
                    //===> Check for PDS <===//
                    let pds_select = Phenix(control).ancestor('.px-select');

                    //===> Unselect the Options <===//
                    control.querySelectorAll('option[selected]').forEach(option => option.removeAttribute('selected'));

                    //===> Reset Value <===//
                    if (pds_select) {
                        control.value = "";
                        pds_select.setAttribute('data-value', "");
                        control.dispatchEvent(new Event('update'));
                    } else control.value = "";
                } 

                //===> Textarea Controls <===//
                else if (control_tag === 'TEXTAREA') {
                    control.value = "";
                    control.textContent = "";
                }

                //===> Other Controls <===//
                else control.getAttribute('type') === 'checkbox' ?  control.checked = false : control.value = "";
            });

            //===> Get Data from Rest-API <===//
            get_options().then(options => {
                //===> Define Data <===//
                let current = options,
                    dataTarget = [];

                //===> Correct Data Target <===//
                if (listClasses.contains('types-list')) dataTarget = current.pds_types;
                else if (listClasses.contains('metabox-list')) dataTarget = current.pds_metabox;
                else if (listClasses.contains('patterns-list')) dataTarget = current.block_patterns;
                else if (listClasses.contains('taxonomies-list')) dataTarget = current.pds_taxonomies;

                //===> Get the Required Item <===//
                dataTarget.forEach(item => item.name === item_name ? dataItem = item : null);
 
                //===> Check for Data Item <===//
                if (dataItem) {
                    //===> Update Controls <===//
                    FormControls.forEach(control => {
                        //===> Define Data <===//
                        let control_name = control.getAttribute('name'),
                            control_tag  = control.tagName,
                            control_type = control.getAttribute('type');
    
                        //===> Check for Data <===//
                        if (control_name && dataItem[control_name]) {
                            //===> Select Controls <===//
                            if (control_tag === 'SELECT') {
                                //===> Define Data <===//
                                let pds_select = Phenix(control).ancestor('.px-select'),
                                    data_value = typeof(dataItem[control_name]) === 'string' ? dataItem[control_name].split(' ') : dataItem[control_name];
    
                                //===> Select the Options <===//
                                control.querySelectorAll('option').forEach(option => {
                                    //===> Check for Value <===//
                                    if (option.value.length > 0) data_value.forEach(val => option.value === val ? option.setAttribute('selected', true) : null);
                                });
    
                                //===> Set the Value <===//
                                control.value = dataItem[control_name];
                                
                                //===> Update PDS : Select <===//
                                if (pds_select) {
                                    pds_select.setAttribute('data-value', dataItem[control_name]);
                                    control.dispatchEvent(new Event('update'));
                                }
                            }
                            //===> Textarea Controls <===//
                            else if (control_tag === 'TEXTAREA') {
                                control.value = dataItem[control_name];
                                control.textContent = dataItem[control_name];
                            }
                            //===> Normal Controls <===//
                            else {
                                //===> Checkbox Controls <===//
                                if(control_type === 'checkbox') control.checked = dataItem[control_name];
                                //===> Normal Inputs <===//
                                else {control.value = dataItem[control_name];}
                            }
                        }
                    });
                }
            });
        };

        //===> Initial Data <===//
        update_list("pds_types", ".types-list", type_template);
        update_list("menu_locations", ".locations-list", location_template);
        update_list("pds_taxonomies", ".taxonomies-list", taxonomy_template);
        update_list("block_patterns", ".patterns-list", pattern_template);

        //===> Add Item Trigger <===//
        Phenix('.collection-form .add-item').on('click', event => add_item(event.target));
    });
</script>
<!-- Phenix Script -->
<?php include(dirname(__FILE__) . '/modules/scripts.php'); ?>