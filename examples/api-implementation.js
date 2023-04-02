var Nation = /** @class */ (function () {
    function Nation() {
    }
    return Nation;
}());
var Annotation = /** @class */ (function () {
    function Annotation() {
    }
    return Annotation;
}());
var Source = /** @class */ (function () {
    function Source() {
    }
    return Source;
}());
var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());
function request(url, config) {
    if (config === void 0) { config = {}; }
    return fetch(url, config)
        .then(function (response) { return response.json(); })
        .then(function (data) { return data; });
}
function printData() {
    request("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then(function (data) {
        var output = document.getElementById("output");
        for (var i = 0; i < data.data.length; i++) {
            var elem = document.createElement("div");
            elem.setAttribute("class", "class1");
            elem.innerHTML = "Nation " + i;
            var elemIDNation = document.createElement("li");
            elemIDNation.innerHTML = "ID Nation: " + data.data[i]["ID Nation"];
            elem.appendChild(elemIDNation);
            var elemNation = document.createElement("li");
            elemNation.innerHTML = "Nation: " + data.data[i].Nation;
            elem.appendChild(elemNation);
            var elemIDYear = document.createElement("li");
            elemIDYear.innerHTML = "ID Year: " + data.data[i]["ID Year"];
            elem.appendChild(elemIDYear);
            var elemYear = document.createElement("li");
            elemYear.innerHTML = "Year: " + data.data[i].Year;
            elem.appendChild(elemYear);
            var elemPopulation = document.createElement("li");
            elemPopulation.innerHTML = "Population: " + data.data[i].Population;
            elem.appendChild(elemPopulation);
            var elemSlugNation = document.createElement("li");
            elemSlugNation.innerHTML = "Slug Nation: " + data.data[i]["Slug Nation"];
            elem.appendChild(elemSlugNation);
            output.appendChild(elem);
        }
        for (var i = 0; i < data.source.length; i++) {
            var elemMeasure = document.createElement("div");
            elemMeasure.setAttribute("class", "class1");
            elemMeasure.innerHTML = "Measures: ";
            for (var j = 0; j < data.source[i].measures.length; j++) {
                var measure = document.createElement("li");
                measure.innerHTML = "measure " + j + ": " + data.source[i].measures[j];
                elemMeasure.appendChild(measure);
            }
            output.appendChild(elemMeasure);
            var elemAnnotation = document.createElement("div");
            elemAnnotation.innerHTML = "Annotations: ";
            var elemSourceDescription = document.createElement("li");
            elemSourceDescription.innerHTML = "Source Description: " + data.source[i].annotations.source_description;
            elemAnnotation.appendChild(elemSourceDescription);
            var elemDataSetName = document.createElement("li");
            elemDataSetName.innerHTML = "Dataset Name: " + data.source[i].annotations.dataset_name;
            elemAnnotation.appendChild(elemDataSetName);
            var elemDataSetLink = document.createElement("li");
            elemDataSetLink.innerHTML = "Dataset Name: " + data.source[i].annotations.dataset_link;
            elemAnnotation.appendChild(elemDataSetLink);
            var elemTableID = document.createElement("li");
            elemTableID.innerHTML = "Table ID: " + data.source[i].annotations.table_id;
            elemAnnotation.appendChild(elemTableID);
            var elemTopic = document.createElement("li");
            elemTopic.innerHTML = "Topic: " + data.source[i].annotations.topic;
            elemAnnotation.appendChild(elemTopic);
            var elemSubTopic = document.createElement("li");
            elemSubTopic.innerHTML = "Subtopic: " + data.source[i].annotations.subtopic;
            elemAnnotation.appendChild(elemSubTopic);
            output.appendChild(elemAnnotation);
            var hr = document.createElement("hr");
            output.appendChild(hr);
        }
    })
        .catch(function (error) {
        console.error(error);
    });
}
