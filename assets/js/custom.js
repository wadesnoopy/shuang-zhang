/*************************************************
 *  Academic
 *  force cv to open in external link
 *

 **************************************************/

jQuery(document).ready(function($){
    $("ul.network-icon li a[href*='_CV_']").attr({
    	"target": "_blank",
    	"rel": "noopener"
    })
});
