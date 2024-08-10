<?php
/*
Plugin Name: greeting 
Plugin URI: http://example.com/
Description: A simple plugin to add a [greeting] shortcode.
Version: 1.0
Author: Conlan Connor
Author URI: http://example.com/
License: GPL2
*/

// Function to output the greeting message
function greeting_shortcode() {
    return "Welcome to My Site!";
}

// Register the shortcode
function register_greeting_shortcode() {
    add_shortcode('greeting', 'greeting_shortcode');
}

// Hook into WordPress
add_action('init', 'register_greeting_shortcode');

//You would put this plugin into wordpress/wp-content/plugins/
//It displays "Welcome to My Site!". Tested locally