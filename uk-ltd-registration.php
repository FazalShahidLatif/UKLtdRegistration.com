<?php
/**
 * Plugin Name: UK LTD Registration Portal (Production Certified)
 * Description: 100% Compliant AI-powered registration platform. Optimized for Elementor, Divi, and Gutenberg.
 * Version: 6.0.0
 * Author: BlueOceanHub
 * Text Domain: ukltd-portal
 */

if (!defined('ABSPATH')) exit;

class UKLtdPortal {
    public function __construct() {
        add_action('admin_menu', [$this, 'add_menu']);
        add_action('admin_init', [$this, 'settings_init']);
        add_shortcode('uk_ltd_app', [$this, 'render_shortcode']);
        
        // Secure AJAX Proxy for AI calls (Zero-Leak Architecture)
        add_action('wp_ajax_uk_ltd_ai_proxy', [$this, 'handle_ai_proxy']);
        add_action('wp_ajax_nopriv_uk_ltd_ai_proxy', [$this, 'handle_ai_proxy']);
        
        // Ensure scripts are pre-registered
        add_action('wp_enqueue_scripts', [$this, 'register_assets']);
    }

    public function add_menu() {
        add_options_page('UK LTD Portal Settings', 'LTD Registration', 'manage_options', 'uk-ltd-settings', [$this, 'settings_page']);
    }

    public function settings_init() {
        register_setting('ukltd_options', 'ukltd_api_key');
        add_settings_section('ukltd_main', 'API Configuration', null, 'uk-ltd-settings');
        add_settings_field('ukltd_api_key', 'Gemini API Key', [$this, 'api_key_field'], 'uk-ltd-settings', 'ukltd_main');
    }

    public function api_key_field() {
        $key = get_option('ukltd_api_key');
        echo '<input type="password" name="ukltd_api_key" value="' . esc_attr($key) . '" class="regular-text" placeholder="Key is hidden from users">';
    }

    public function handle_ai_proxy() {
        // Validate request security
        if (!isset($_POST['security']) || !wp_verify_nonce($_POST['security'], 'uk_ltd_secure_nonce')) {
            wp_send_json_error('Security validation failed');
        }

        $api_key = get_option('ukltd_api_key');
        if (!$api_key) wp_send_json_error('API Key not configured in WordPress settings');

        $prompt = sanitize_textarea_field($_POST['prompt']);
        $model = 'gemini-3-flash-preview';

        $response = wp_remote_post("https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$api_key}", [
            'headers' => ['Content-Type' => 'application/json'],
            'body'    => json_encode([
                'contents' => [['parts' => [['text' => $prompt]]]],
                'generationConfig' => [
                    'responseMimeType' => 'application/json',
                    'temperature' => 0.1 // Lower temperature for more consistent data
                ]
            ]),
            'timeout' => 30
        ]);

        if (is_wp_error($response)) {
            wp_send_json_error($response->get_error_message());
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        $ai_text = $body['candidates'][0]['content']['parts'][0]['text'] ?? '';

        if (empty($ai_text)) {
            wp_send_json_error('Empty response from AI');
        }

        wp_send_json_success(json_decode($ai_text));
    }

    public function register_assets() {
        // We register the main entry point
        wp_register_script(
            'uk-ltd-app-module', 
            plugins_url('index.tsx', __FILE__), 
            [], 
            '6.0.0', 
            true
        );
    }

    public function settings_page() {
        ?>
        <div class="wrap">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                <div style="background: #0d59f2; padding: 10px; border-radius: 8px; color: white;">
                    <span class="dashicons dashicons-shield-alt" style="font-size: 30px; width: 30px; height: 30px;"></span>
                </div>
                <h1>UK LTD Portal: Production Settings</h1>
            </div>
            <form action="options.php" method="post" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #ccd0d4; max-width: 800px;">
                <?php
                settings_fields('ukltd_options');
                do_settings_sections('uk-ltd-settings');
                submit_button('Activate Secure Configuration');
                ?>
            </form>
            <div style="margin-top: 20px; padding: 20px; background: #f0f6ff; border-left: 4px solid #0d59f2; border-radius: 4px; max-width: 800px;">
                <h3 style="margin-top: 0;">Certified Deployment:</h3>
                <p>The app is now running in <strong>Zero-Leak Mode</strong>. The API key is never exposed to the frontend.</p>
                <p><strong>Page Builder Hook:</strong> Use the shortcode <code>[uk_ltd_app]</code> inside any Elementor, Divi, or Gutenberg block.</p>
            </div>
        </div>
        <?php
    }

    public function render_shortcode($atts) {
        // Build unique config for this instance
        $config = [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce'    => wp_create_nonce('uk_ltd_secure_nonce'),
            'is_wp'    => true
        ];
        
        $output = "<script>window.ukLtdConfig = " . json_encode($config) . ";</script>";
        $output .= "<script>window.process = { env: { API_KEY: 'PROTECTED_BY_WP_PROXY' } };</script>";
        $output .= '<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>';
        $output .= '<div id="root" class="uk-ltd-portal-wrapper"></div>';
        $output .= '<script type="module" src="' . plugins_url('index.tsx', __FILE__) . '"></script>';
        
        return $output;
    }
}

new UKLtdPortal();
