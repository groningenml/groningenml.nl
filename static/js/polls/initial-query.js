$(document).ready(function () {
    $("#form").alpaca({
        "schema": {
            "title": "Expectations of Groningen ML Meetup",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "Name",
                    "required": true
                },
                "meetup_id": {
                    "type": "string",
                    "title": "Meetup user page",
                    "required": true
                },
                "skills": {
                    "type": "object",
                    "title": "What are your skills on a scale of 0 - 5 regarding",
                    "properties": {
                        "python": {
                            "title": "Python (0-5)?",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 5,
                        },
                        "jupyter": {
                            "title": "Jupyter (0-5)?",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 5,
                        },
                    }
                },
                "feedback": {
                    "type": "string",
                    "title": "Feedback"
                },
            }
        },
        "options": {
            "form": {
                "description": "Hello",

                "buttons": {
                    "submit": {
                        "click": function () {
                            var value = this.getValue();
                            var str = JSON.stringify(value, null, "  ")
                            var b64 = btoa(str);
                            window.location.href = "mailto:clemens@build2be.nl?subject=Enquete%20GroningenML%20Skills&body=" + b64;
                        }
                    }
                }
            },
            "fields": {
                "name": {
                    "size": 20,
                    "helper": ""
                },
                "feedback": {
                    "type": "textarea",
                    "name": "your_feedback",
                    "rows": 5,
                    "cols": 40,
                    "helper": "Please enter your feedback."
                },
                "skills": {
                    "fields": {
                        "python": {
                            "type": "integer",
                            "slider": true,
                            "default": 0,
                            "helper": "See wikipedia for <a href=\"https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition\">Skill levels</a>",

                        },
                        "jupyter": {
                            "type": "integer",
                            "slider": true,
                            "default": 0,
                            "helper": "See wikipedia for <a href=\"https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition\">Skill levels</a>",
                        },

                    }
                },
            }
        },
        "view": "bootstrap-edit"
    });
});
