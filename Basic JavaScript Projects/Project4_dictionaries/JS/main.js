function deleteEntry() {
    let dictionary = {
        "Apple": "A fruit that keeps the doctor away.",
        "JavaScript": "A programming language used for web development.",
        "Dictionary": "A collection of key-value pairs."
    };

    // delete the "Dictionary" key
    delete dictionary["Dictionary"];

    // display the deleted key ( undefined)
    document.getElementById("Dictionary").innerHTML = dictionary["Dictionary"];
}
