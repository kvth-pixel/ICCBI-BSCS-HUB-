const resources = [
      "HTML Basics",
        "CSS Guide",
          "JavaScript Tutorial",
            "Project Templates"
            ];

            // Get the <ul> element
            const list = document.getElementById("resource-list");

            // Loop through the resources and add them to the list
            resources.forEach(item => {
              const li = document.createElement("li");
                li.textContent = item;
                  list.appendChild(li);
                  });l
                  
