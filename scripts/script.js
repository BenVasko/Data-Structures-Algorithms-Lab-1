"use strict";
$(document).ready(() => {

// building the initial list
    let bugList = [{
        title: `Bug 1`,
        description: "it sucks dude",
        fixed: false
    },{
        title: `Bug 2`,
        description: "this application has tooooooooo many o's in it",
        fixed: false
    },{
        title: `Bug 3`,
        description: "it's just too complex to use, man",
        fixed: false
    },{
        title: `Bug 4`,
        description: "have you tried a , instead of a .?",
        fixed: false
    }];

//declaring functions we will be using a lot
    let show = () => {
        $(".bug-box").append(`<section class='title'>${bugList[0].title}</section><section class='description'>${bugList[0].description}</section><section class='buttons'><button class='fixed' type='button'><i class="material-icons">done</i></button><button class='not-fixed' type='button'><i class="material-icons">clear</i></button></section>`);
    }

    let clear = () => {
        $(".bug-box").html(null);
        bugList.shift();
    }

    let next = () => {
        clear();
        show();
    }

//start the page
    show();


// these buttons determine whether the bug will go back in the queue or not
    $("body").on("click", ".fixed", (e) => {
        bugList[0].fixed = true;
        $(".not-fixed").css("background", "white");
        $(".fixed").css("background", "green");
    });

    $("body").on("click", ".not-fixed", (e) => {
        $(".fixed").css("background", "white");
        $(".not-fixed").css("background", "red");
        bugList[0].fixed = false;
    });


// when the coral button is pressed, it will either delete the bug from the que or put in back at the end depending on whether the bug is fixed or not
    $("body").on("click", ".next", (e) => {
        if (bugList[0].fixed === true) {
            next();
        } else if (bugList[0].fixed === false) {
            bugList.push({
                title: $(".title").text(),
                description: $(".description").text()
            });
            next();
        } else {
        }
    });
});