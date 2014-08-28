(function(window) {
    // Initialize the editor with a JSON schema
    var editor = new JSONEditor(document.getElementById('editor_holder'), {
        schema: {
            type: "object",
            title: "Human",
            properties: {
                "name.first": {
                    type: "string",
                    title: "First Name"
                },
                "name.last": {
                    type: "string",
                    title: "Last Name",
                    minLength: 1
                },
                gender: {
                    type: "string",
                    title: "Gender",
                    enum: [
                        "Male",
                        "Female"
                    ]
                },
                birthDate: {
                    title: "Birth Date",
                    type: "string",
                    format: "date"
                },
                hoobies: {
                    type: "array",
                    format: "table",
                    title: "Hoobies",
                    items: {
                        type: "object",
                        properties: {
                            title: {
                                type: "string",
                                title: "Title"
                            }
                        }
                    }
                }
            }
        },
        disable_edit_json: true,
        disable_collapse: true,
        disable_properties: true,
        show_errors: "change",
        theme: 'bootstrap3'
    });

    // Hook up the submit button to log to the console
    document.getElementById('submit').addEventListener('click', function() {
        // Get the value from the editor
        console.log(editor.getValue());

    });
})(window);
