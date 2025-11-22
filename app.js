$(document).ready(function () {

    const data = {
        "Xiaomi": {
            logo: "images/mi.png",
            models: {
                "MI Max/MI Max 2": "images/mimax.png",
                "MI Note 3": "images/minote3.png",
            }
        },

        "Nokia": {
            logo: "images/nokia.png",
            models: {
                "Nokia 3.2": "images/nokia32.png",
            }
        },

        "Oppo": {
            logo: "images/oppo.png",
            models: {
                "Oppo R15": "images/r15.png",
            }
        },

        "Huawei": {
            logo: "images/huawei.png",
            models: {
                "Y9 Prime": "images/y9prime.png",
                "Y9 2019": "images/y92019.png",
            }
        },

        "Vivo": {
            logo: "images/vivo.png",
            models: {
                "IQOO Neo 5 SE": "images/neo5se.png",
                "V3 Max": "images/v3max.png"
            }
        }
    };

    for (let b in data) {
        $("#brand-bar").append(`
            <div class="brand" data-brand="${b}">
                <img src="${data[b].logo}">
            </div>
        `);
    }

    $(document).on("click", ".brand", function () {
        const b = $(this).data("brand");
        const m = data[b].models;

        $("#model-list").html("").show();
        $("#preview").html("<span>Select a model for test point.</span>");

        for (let x in m) {
            $("#model-list").append(`
                <div class="model" data-img="${m[x]}">
                    ${x}
                </div>
            `);
        }
    });

    $(document).on("click", ".model", function () {
        const img = $(this).data("img");
        $("#preview").html(`<img src="${img}">`);
    });

});
