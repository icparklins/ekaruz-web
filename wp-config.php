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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ekaruzdb');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'i-w=z(ju^===`Alx4G(&LW3L3V@3 &t3rJOvb*h;@#>LfqG;)I.#Q^+mXcy06F(6');
define('SECURE_AUTH_KEY',  'B^/.NsxK54RUJ8UgDB!gzOz3K/hw*Rkkb2OV<nHIL]7)}t^f*limLSW4{n8#|!E3');
define('LOGGED_IN_KEY',    'j|xu{P$QFK7+xe1k<TF()ySXVcVGFC(Y#yA _v&w%&P18H;2tLd?K(VH*TUSfTiO');
define('NONCE_KEY',        's8l#20)T$Lw3V0uw)a1D}FCkb%fLPy_~Klo+:+HSU(vn~K#&ou)3RH%n!{nP~]96');
define('AUTH_SALT',        'D,kY??IQzsae-HF{/mV{q8&12+!4lB29_?qTGu7/B`xYLB=`r(=tpiGTjdD$0M.!');
define('SECURE_AUTH_SALT', '_-: *%02}Es/er4J|>tlIy(1/R<Qm>.OD#:1ffr*/#O`4*F;,2L+9d9hfJ{MUvSC');
define('LOGGED_IN_SALT',   '8 Aq^4_Q#kaE-Ov[}`5h5Oa-ph9g4fR;2o{L:#d]Dwww;#oTjaRi81),r06)]yq^');
define('NONCE_SALT',       'm!nkU;`sYnz_{LUmybH5<;CnPg@Jm*4aY}C+b=hiS(yU4nzGXI.B97(kc<R0G8~q');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
