
(function(){
    "use strict";

    var ignores = [
        "#Events",
        "#Tags",
        "#Reports",
        "#Limits",
        "#SpotInstances",
        "#ReservedInstances",
        "#BundleTasks",
        "#Addresses",
        "#PlacementGroups",
        "#LoadBalancers",
        "#NIC",
        "#LaunchConfigurations",
        "#AutoScalingGroups",
        "#SecurityGroups"
    ];


    setTimeout(function(){
        var $root = $("div#aws-console-rootlayout");
        $root.find("div.LH").hide();
        $root.find("div.KG").hide();
        $root.find("div.NH").hide();
        var $left = $root.find("div.HLD");
        $left.find("a.gwt-Anchor").each(function(){
            var $a = $(this);

            var href = $a.prop("href");
            $.each(ignores, function(i, ignore){
                if(href.indexOf(ignore) !== -1){
                    $a.hide();
                    return false;
                }
            });
        });
    }, 2000);

})();