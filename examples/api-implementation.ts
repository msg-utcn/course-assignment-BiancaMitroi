class Nation {
    "ID Nation": string;
    Nation: string;
    "ID Year": number;
    Year: number;
    Population: number;
    "Slug Nation": string;
}

class Annotation {
    source_name: string;
    source_description: string;
    dataset_name: string;
    dataset_link: string;
    table_id: string;
    topic: string;
    subtopic: string;
}

class Source {
    measures: Array<string>;
    annotations: Annotation;
}

class Data {
    data: Array<Nation>;
    source: Array<Source>;
}
function request<TResponse>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse> {
    return fetch(url, config)
        .then((response) => response.json())
        .then((data) => data as TResponse);
}

function printData() {
    request<Data>("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((data) => {
            const output = document.getElementById("output");

            for(let i = 0; i < data.data.length; i++){
                const elem = document.createElement("div");
                elem.setAttribute("class", "class1");
                elem.innerHTML = "Nation " + i;

                const elemIDNation = document.createElement("li");
                elemIDNation.innerHTML = "ID Nation: " + data.data[i]["ID Nation"];
                elem.appendChild(elemIDNation);

                const elemNation = document.createElement("li");
                elemNation.innerHTML = "Nation: " + data.data[i].Nation;
                elem.appendChild(elemNation);

                const elemIDYear = document.createElement("li");
                elemIDYear.innerHTML = "ID Year: " + data.data[i]["ID Year"];
                elem.appendChild(elemIDYear);

                const elemYear = document.createElement("li");
                elemYear.innerHTML = "Year: " + data.data[i].Year;
                elem.appendChild(elemYear);

                const elemPopulation = document.createElement("li");
                elemPopulation.innerHTML = "Population: " + data.data[i].Population;
                elem.appendChild(elemPopulation);

                const elemSlugNation = document.createElement("li");
                elemSlugNation.innerHTML = "Slug Nation: " + data.data[i]["Slug Nation"];
                elem.appendChild(elemSlugNation);

                output.appendChild(elem);
            }

            for(let i = 0; i < data.source.length; i++){
                const elemMeasure = document.createElement("div");
                elemMeasure.setAttribute("class", "class1");

                elemMeasure.innerHTML = "Measures: ";
                for(let j = 0; j < data.source[i].measures.length; j++){
                    const measure = document.createElement("li");
                    measure.innerHTML = "measure " + j + ": " + data.source[i].measures[j];
                    elemMeasure.appendChild(measure);
                }
                output.appendChild(elemMeasure);

                const elemAnnotation = document.createElement("div");
                elemAnnotation.innerHTML = "Annotations: ";

                const elemSourceDescription = document.createElement("li");
                elemSourceDescription.innerHTML = "Source Description: " + data.source[i].annotations.source_description;
                elemAnnotation.appendChild(elemSourceDescription);

                const elemDataSetName = document.createElement("li");
                elemDataSetName.innerHTML = "Dataset Name: " + data.source[i].annotations.dataset_name;
                elemAnnotation.appendChild(elemDataSetName);

                const elemDataSetLink = document.createElement("li");
                elemDataSetLink.innerHTML = "Dataset Name: " + data.source[i].annotations.dataset_link;
                elemAnnotation.appendChild(elemDataSetLink);

                const elemTableID = document.createElement("li");
                elemTableID.innerHTML = "Table ID: " + data.source[i].annotations.table_id;
                elemAnnotation.appendChild(elemTableID);

                const elemTopic = document.createElement("li");
                elemTopic.innerHTML = "Topic: " + data.source[i].annotations.topic;
                elemAnnotation.appendChild(elemTopic);

                const elemSubTopic = document.createElement("li");
                elemSubTopic.innerHTML = "Subtopic: " + data.source[i].annotations.subtopic;
                elemAnnotation.appendChild(elemSubTopic);

                output.appendChild(elemAnnotation);
                const hr = document.createElement("hr");
                output.appendChild(hr);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

