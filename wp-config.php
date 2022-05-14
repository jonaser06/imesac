<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'imesacdb' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'L97273792f' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'J!qhw:dI2T%yd.$x2FBKiXYK!:,5=OPoV#`^)^R.OgGh|C!Af_Nxk@`X7OIXDdC1' );
define( 'SECURE_AUTH_KEY',  '`:@RhD#q-iX<Lag+l)An7`4B~dP~QCYVm1b;O.GcMaJZgUt!XEVxKi(;4v%g>1*w' );
define( 'LOGGED_IN_KEY',    '19yZ0u)p@Z6]<PCoP<R19cPc>$|(aK+H0f4,.2pN D#nE+C>%wj_j|ig-@qiIrb+' );
define( 'NONCE_KEY',        'zreHQR,M6EM{:lCSjAITVy!5&`p87@n:>UoE7-aDnwc9;[*7Bd1Uc{jdb[<<e;^W' );
define( 'AUTH_SALT',        'Kx!PU(xY!EC6O&yt-S/B|%F#`]L{^woS3AXpBudAL!=Y%lsdS.aJLlm4gxQGx2?E' );
define( 'SECURE_AUTH_SALT', 'Z|y0;.`I1xGw[Z$2G3AmBRcK{{DCoW*,ouA:mYv?;Si4(NqvNdMJkRzfv8_A0[)1' );
define( 'LOGGED_IN_SALT',   'Xn3d{Qhak/$~-sd-~F#<q~8]m*T$Ej#GDNJ+m;ycSWa#mMduQ=v*T_OJ3~[{^s$n' );
define( 'NONCE_SALT',       'b{vq{V9(|oKB[D_cw,kXH,G+(ixe0G6~_`;N/; I7[!4ro!0CDn<H*2/ROOFnC>m' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
