function insert_old_values(){
    return document.getElementById("old_values").innerText;
}

function display_old_values(so) {
    document.getElementById("old_values").innerText = so;
}


function insert_result() {
    return document.getElementById("export_value").innerText;
}
function display_result(so) {
    if(so=="") {
        document.getElementById("export_value").innerText = so;
    } else {
        document.getElementById("export_value").innerText = format_number(so);
    }
 
}
function format_number(so) {
    if(so == "-") {
        return "";
    }
    var n = Number(so);
    var gia_tri = n.toLocaleString("en");
    return gia_tri;
}

function delete_format_number(so) {
    return Number(so.replace(/,/g, ''))
} 


var system = document.getElementsByClassName('system');
for(var i=0; i < system.length; i++) {
    system[i].addEventListener('click', function() {
        if(this.id == "AC") {
            display_result("");
            display_old_values("");
        } 
        else if(this.id == "DEL") {
            let result = delete_format_number(insert_result()).toString();
            if(result) {
                result = result.substr(0, result.length -1)
                display_result(result)
            }
        } 
        else {
            var result = insert_result();
            var old_results = insert_old_values();
            if(result != "") {
                result = delete_format_number(result);
                old_results =old_results + result;
                if(this.id == "=") {
                    var result_final = eval(old_results);
                    display_result(result_final)
                    display_old_values("")
                } else {
                    old_results = old_results + this.id;
                    display_old_values(old_results)
                    display_result("")
                }
            }
        }
    })
}

var number = document.getElementsByClassName('number');
for(var i=0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var result = delete_format_number(insert_result())
        if(result != NaN) {
            result = result + this.id;
            display_result(result)
        }
    })
}