console.log("Hello");

    // document.querySelector("#categoryList").addEventListener("click", function(e){
    //     console.log(e.target.id);
    //     if (e.target.tagName === "LI") {
    //         window.location.href = "/" + e.target.id
    //     }
    // });

    document.querySelector("#form").addEventListener("keyup", function(e){
        // console.log(e.target.dataset.uppercase);
        if (e.target.dataset.uppercase != undefined) {
            e.target.value = e.target.value.toUpperCase();
        }
        console.log(e.target.value);
    });