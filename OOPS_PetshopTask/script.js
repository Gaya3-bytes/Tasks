var allPets = [];
var requestPets =function () {
    function requestPets(ReqData) {
        this.Name = ReqData.name;
        this.Color = ReqData.color;
        this.Breed = ReqData.breed;
        this.Age = ReqData.age;
    }
    requestPets.prototype.petAvailability = function (name, quantity) {
        var count = 0;
        for (var i = 0; i < allPets.length; i++) {
            if (name.toLowerCase() === allPets[i].Name.toLowerCase()) {
                count += 1;
            }
        }
        if (count >= quantity) {
            return "Available";
        }
        else {
            return "Unavailable";
        }
    };
    return requestPets;
}();
var requestedPet = new requestPets({ name: "Dog", color: "Black&White", breed: "Mongrel", age: 2 });
var Cat1 = new requestPets({ name: "Cat", color: "Grey", breed: "Persian cat", age: 1 });
var Dog2 = new requestPets({ name: "Dog", color: "Brown", breed: "Doberman", age: 4 });
allPets.push(requestedPet, Cat1, Dog2);
var availabilePets =function () {
    function availabilePets() {
    }
    availabilePets.prototype.addpets = function (name, color, breed, age) {
        var newObj = { Name: name, Color: color, Breed: breed, Age: age };
        allPets.push(newObj);
    };
    availabilePets.prototype.getCounts = function (name) {
        var count = 0;
        for (var i = 0; i < allPets.length; i++) {
            if (name.toLowerCase() === allPets[i].Name.toLowerCase()) {
                count += 1;
            }
        }
        return count;
    };
    return availabilePets;
}();
var entirePets = new availabilePets();
function createInput() {
    var inputBox = document.createElement("input");
    inputBox.classList.add("form-control", "text-center");
    return inputBox;
}
var AddPetbtn = document.getElementById("AddPet");
var AddedResult = document.createElement("h3");
var AddDiv = document.getElementById("AddDiv");
var PetName = createInput();
PetName.setAttribute("placeholder", "Enter Pet Type");
var PetColor = createInput();
PetColor.setAttribute("placeholder", "Enter Pet Color");
var PetBreed = createInput();
PetBreed.setAttribute("placeholder", "Enter Pet Breed");
var PetAge = createInput();
PetAge.setAttribute("placeholder", "Enter Pet Age");
var submitbutton = document.createElement("button");
submitbutton.innerText = "Add";
submitbutton.classList.add("btn", "query");
AddPetbtn.addEventListener("click", function () {
    CountDiv.innerHTML = "";
    QuantityDiv.innerHTML = "";
    AddedResult.innerHTML = "";
    AddedResult.classList.remove("alert", "alert-success");
    AddDiv.appendChild(PetName);
    AddDiv.appendChild(PetColor);
    AddDiv.appendChild(PetBreed);
    AddDiv.appendChild(PetAge);
    AddDiv.appendChild(submitbutton);
});
submitbutton.addEventListener("click", function () {
    AddDiv.innerHTML = "";
    AddedResult.classList.remove("alert", "alert-success");
    if (PetName.value && PetColor.value && PetBreed.value) {
        entirePets.addpets(PetName.value, PetColor.value, PetBreed.value, parseInt(PetAge.value));
        AddedResult.classList.add("alert", "alert-success");
        AddedResult.innerText = "Added Successfully";
        AddDiv.appendChild(AddedResult);
    }
    else {
        AddedResult.innerText = "Please fill all the details";
        AddDiv.appendChild(AddedResult);
    }
});

var CheckQuantitybtn = document.getElementById("Quantity");
var QuantityDiv = document.getElementById("AvailDiv");
var Result = document.createElement("h3");
var Quantity = createInput();
Quantity.setAttribute("placeholder", "Enter Quantity");
var Quantitybtn = document.createElement("button");
Quantitybtn.innerText = "Check Quantity";
Quantitybtn.classList.add("btn", "query");
CheckQuantitybtn.addEventListener("click", function () {
    CountDiv.innerHTML = "";
    AddDiv.innerHTML = "";
    QuantityDiv.appendChild(PetName);
    QuantityDiv.appendChild(Quantity);
    QuantityDiv.appendChild(Quantitybtn);
});
Quantitybtn.addEventListener("click", function () {
    QuantityDiv.innerHTML = "";
    Result.classList.remove("alert", "alert-success");
    var AvailResult = requestedPet.petAvailability(PetName.value, parseInt(Quantity.value));
    if (AvailResult === "Available") {
        Result.innerText = "The requested quantity is available.";
        Result.classList.add("alert", "alert-success");
        QuantityDiv.appendChild(Result);
    }
    else {
        Result.innerText = "Sorry, the requested quantity is not available.";
        QuantityDiv.appendChild(Result);
    }
});

var checkCount = document.getElementById("Count");
var CountDiv = document.getElementById("CountDiv");
var CountBtn = document.createElement("button");
CountBtn.innerText = "Check Count";
CountBtn.classList.add("btn", "query");
var CountResult = document.createElement("h3");
checkCount.addEventListener("click", function () {
    QuantityDiv.innerHTML = "";
    AddDiv.innerHTML = "";
    CountResult.innerHTML = "";
    CountResult.classList.remove("alert", "alert-success");
    CountDiv.appendChild(PetName);
    CountDiv.appendChild(CountBtn);
});
CountBtn.addEventListener("click", function () {
    CountResult.innerHTML = "";
    CountDiv.innerHTML = "";
    CountResult.classList.remove("alert", "alert-info");
    if (PetName.value) {
        entirePets.getCounts(PetName.value);
        CountResult.innerText = "Total number of " + PetName.value + "s available: " + String(entirePets.getCounts(PetName.value));
        CountResult.classList.add("alert", "alert-success");
        CountDiv.appendChild(CountResult);
    }
    else {
        CountResult.innerHTML = "Enter Pet Type";
        CountDiv.appendChild(CountResult);
    }
});
