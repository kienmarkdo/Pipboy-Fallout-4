/* jQuery for the pip boy clone created by Kien Do. */

$(document).ready(function() {
    const weapons = [
        {
            "name": "44_pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99
        },
        {
            "name": "10mm_pistol",
            "damage": 18,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53
        },
        {
            "name": "assault_rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        },
    ]; // end of object


    $(".item-list a").on("click", function(e) {
        $(".item-list a").removeClass("active");
        $(e.currentTarget).addClass("active");
        let current_item = $(e.currentTarget).attr("class");

        let special = ["strength", "perception", "endurance", "charisma", "intelligence", "agility", "luck"];

        console.log(current_item);
        switch (current_item) {
            case "strength active":
                $("#special-image").attr("src", "images/vault-boy-strength.gif");
                $("#special-image-caption").html("Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.");
                break;
            case "perception active":
                $("#special-image").attr("src", "images/vault-boy-perception.png");
                $("#special-image-caption").html("Perception is your environmental awareness and \"sixth sense,\" and affects weapons accurancy in V.A.T.S.");
                break;
            case "endurance active":
                $("#special-image").attr("src", "images/vault-boy-endurance.gif");
                $("#special-image-caption").html("Endurance is a measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting.");
                break;
            case "charisma active":
                $("#special-image").attr("src", "images/vault-boy-charisma.gif");
                $("#special-image-caption").html("Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter.");
                break;
            case "intelligence active":
                $("#special-image").attr("src", "images/vault-boy-intelligence.gif");
                $("#special-image-caption").html("Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned.");
                break;
            case "agility active":
                $("#special-image").attr("src", "images/vault-boy-agility.png");
                $("#special-image-caption").html("Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.");
                break;
            case "luck active":
                $("#special-image").attr("src", "images/vault-boy-luck.gif");
                $("#special-image-caption").html("Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits.");
                break;
            
        }

    }); // end of $
    

    $(".item-list a").on("mouseenter", function(e) {
        let current_item = $(e.currentTarget).attr("class");
        // console.log(current_item);

        // TODO: Only run the for loop block below if current_item is in the weapons class, specifically as a value to "name"
        // if the current_item exists in weapons as a key value (name: value) or not
        // if (valueExists(weapons, current_item)) {
        for (item in weapons) {
            if (weapons[item].name === current_item) {
                console.log(weapons[item]);

                let container = $(".item-stats");
                container.find(".damage").html(weapons[item].damage);
                container.find(".fire_rate").html(weapons[item].fire_rate);
                container.find(".accuracy").html(weapons[item].accuracy);
                container.find(".range").html(weapons[item].range);
                container.find(".weight").html(weapons[item].weight);
                container.find(".value").html(weapons[item].value);
            }
        }
        // } // end of if

        
    }); // end of .itemlist target


});


const valueExists = (obj, value) => {
    console.log("in value exists");
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            
            return true;
        }
    }
    return false;
}
