<?php
/**
 * Phenix Blocks Assets
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage pds-blocks
 * @since Phenix Blocks 1.0
 * 
 * ========> Reference by Comments <=======
 ** 01 - Phenix Core
 ** 02 - Phenix Assets
 ** 03 - Phenix Admin CSS
*/

//====> Phenix Core <====//
if (!function_exists('phenix_core')) :
	/**
	 * Setup Core Phenix Design Assets
	 * @since Phenix Blocks 1.0
	 * @return void
	*/

    //=====> Phenix Assets [Head] <=====//
    function phenix_core () {
        //====> define props <====//
        $assets_path = plugin_dir_path(__DIR__);
        $assets_url  = plugin_dir_url(__DIR__)."assets/";

        //====> Phenix CSS <====//
        if (!is_rtl()) :
            //====> Phenix LTR <====//
            wp_enqueue_style('phenix', $assets_url. 'css/phenix.css');
        else :
            //====> Phenix RTL <====//
            wp_enqueue_style('phenix', $assets_url. 'css/phenix-rtl.css');
        endif;
    
        //====> Enqueue Phenix JS <====//
        wp_enqueue_script('phenix', $assets_url.'js/phenix.js', false , NULL , true);
    }

    add_action('wp_enqueue_scripts', 'phenix_core');
    add_action('enqueue_block_editor_assets', 'phenix_core');
endif;

//=====> Phenix Assets [Footer] <=====//
if (!function_exists('phenix_assets')) :
	/**
	 * Setup Phenix Design Fonts and Third-Party
	 * @since Phenix WP 1.0
	 * @return void
	*/

    function phenix_assets () {
        //====> define props <====//
        $assets_path = plugin_dir_path(__DIR__);
        $assets_url  = plugin_dir_url(__DIR__)."assets/";

        //====> Font-Awesome <====//
        wp_enqueue_style('fontawesome', $assets_url. 'css/fontawsome.5.css');

        //====> Google Fonts <====//
        wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
        // if (!is_rtl()) :
        // else :
        //     wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap');
        // endif;
    }

    add_action('wp_enqueue_scripts', 'phenix_assets');
    add_action('enqueue_block_editor_assets', 'phenix_assets');
endif;

//=====> Phenix Admin CSS <=====//
if (!function_exists('pds_admin_style')) :
    /**
     * Setup WP Phenix Design Assets
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_admin_style($hook) {
        //===> Global for Admin <===//
        wp_enqueue_style('pds-admin', plugin_dir_url(__DIR__).'assets/css/admin.css');
    }

    //===> Include Phenix Core in the Plguin Page <===//
    if (isset($_GET["page"]) && $_GET["page"] == 'pds-admin') {
        add_action('admin_enqueue_scripts', 'pds_admin_style');
        add_action('admin_enqueue_scripts', 'phenix_core');
        add_action('admin_enqueue_scripts', 'phenix_assets');

    } elseif (get_option('pds_admin_style')) {
        add_action('admin_enqueue_scripts', 'pds_admin_style');
        add_action('admin_enqueue_scripts', 'phenix_core');
        add_action('admin_enqueue_scripts', 'phenix_assets');
    }
endif;

//=====> Phenix Scripts <=====//
if (!function_exists('pds_blocks_script')) :
    /**
     * Activate the Javascript Plugins of Phenix
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_blocks_script() {
        include(dirname(__FILE__) . '/pds-scripts.php');
    }

    //===> Include Phenix Core in the Plguin Page <===//
    add_action('wp_enqueue_scripts', 'pds_blocks_script');
endif;

//=====> Phenix Styles <=====//
if (!function_exists('pds_blocks_styles')) :
    /**
     * Include Third-Party Stylesheets of Phenix
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_blocks_styles() {
        include(dirname(__FILE__) . '/pds-styles.php');
    }

    //===> Include Phenix Core in the Plguin Page <===//
    add_action('wp_enqueue_scripts', 'pds_blocks_styles');
endif;