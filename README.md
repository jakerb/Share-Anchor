#Share Anchor#
A social sharing plugin for Anchor CMS using javascript and CSS.

---
##Setting up##
In order to get Share Anchor working on your Anchor blog you will need to complete the following steps.

###1. Create a `plugins` folder in  the base of your Anchor blog###
*Create Upload the `share-anchor`, folder to the `plugins` folder*


###2. Edit the theme header found in /themes/default/header.php###
*Once in the header file, after you find this line of code:*

`<link rel="shortcut icon" href="<?php echo theme_url('img/favicon.png'); ?>">`

*add the following:*

<!-- Share Anchor plugin -->

`<link rel="stylesheet" type="text/css" href="/plugins/share-anchor/css/share-anchor.css">`
`<script type="text/javascript" src="/plugins/share-anchor/js/jquery.js"></script>`
`<script type="text/javascript" src="/plugins/share-anchor/js/share-anchor.js"></script>`

Once you have saved the file, you are ready!
