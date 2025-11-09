const events = [
  // --- Window ---
  { 
    name: "onload", 
    category: "Window", 
    description: "Fires when the page has fully loaded.", 
    tags: "&lt;body&gt;, &lt;img&gt;", 
    link: "https://www.w3schools.com/jsref/event_onload.asp" 
  },
  { 
    name: "onresize", 
    category: "Window", 
    description: "Fires when the browser window is resized.", 
    tags: "&lt;body&gt;, &lt;window&gt;", 
    link: "https://www.w3schools.com/jsref/event_onresize.asp" 
  },

  // --- Mouse ---
  { 
    name: "onclick", 
    category: "Mouse", 
    description: "Triggered when an element is clicked.", 
    tags: "&lt;button&gt;, &lt;div&gt;, &lt;a&gt;", 
    link: "https://www.w3schools.com/jsref/event_onclick.asp" 
  },
  { 
    name: "onmouseover", 
    category: "Mouse", 
    description: "Triggered when the pointer hovers over an element.", 
    tags: "All visible elements", 
    link: "https://www.w3schools.com/jsref/event_onmouseover.asp" 
  },

  // --- Keyboard ---
  { 
    name: "onkeydown", 
    category: "Keyboard", 
    description: "Occurs when a key is pressed down.", 
    tags: "&lt;input&gt;, &lt;textarea&gt;", 
    link: "https://www.w3schools.com/jsref/event_onkeydown.asp" 
  },
  { 
    name: "onkeyup", 
    category: "Keyboard", 
    description: "Occurs when a key is released after pressing.", 
    tags: "&lt;input&gt;, &lt;textarea&gt;", 
    link: "https://www.w3schools.com/jsref/event_onkeyup.asp" 
  },

  // --- Form ---
  { 
    name: "onsubmit", 
    category: "Form", 
    description: "Occurs when a form is submitted.", 
    tags: "&lt;form&gt;", 
    link: "https://www.w3schools.com/jsref/event_onsubmit.asp" 
  },
  { 
    name: "onchange", 
    category: "Form", 
    description: "Occurs when a form element value changes.", 
    tags: "&lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;", 
    link: "https://www.w3schools.com/jsref/event_onchange.asp" 
  },

  // --- Clipboard ---
  { 
    name: "oncopy", 
    category: "Clipboard", 
    description: "Triggered when content is copied.", 
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;div&gt;", 
    link: "https://www.w3schools.com/jsref/event_oncopy.asp" 
  },
  { 
    name: "onpaste", 
    category: "Clipboard", 
    description: "Triggered when content is pasted.", 
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;div&gt;", 
    link: "https://www.w3schools.com/jsref/event_onpaste.asp" 
  },

  // --- Drag & Drop ---
  { 
    name: "ondragstart", 
    category: "Drag & Drop", 
    description: "Fires when dragging starts.", 
    tags: "All draggable elements", 
    link: "https://www.w3schools.com/jsref/event_ondragstart.asp" 
  },
  { 
    name: "ondrop", 
    category: "Drag & Drop", 
    description: "Occurs when dragged data is dropped.", 
    tags: "&lt;div&gt;, &lt;section&gt;, &lt;img&gt;", 
    link: "https://www.w3schools.com/jsref/event_ondrop.asp" 
  },

  // --- Touch ---
  { 
    name: "ontouchstart", 
    category: "Touch", 
    description: "Triggered when a touch point is placed on the touch surface.", 
    tags: "All elements", 
    link: "https://www.w3schools.com/jsref/event_ontouchstart.asp" 
  },
  { 
    name: "ontouchend", 
    category: "Touch", 
    description: "Triggered when a touch point is removed.", 
    tags: "All elements", 
    link: "https://www.w3schools.com/jsref/event_ontouchend.asp" 
  },

  // --- Pointer ---
  { 
    name: "onpointerdown", 
    category: "Pointer", 
    description: "Occurs when a pointer (mouse, pen, touch) is pressed down.", 
    tags: "All elements", 
    link: "https://www.w3schools.com/jsref/event_onpointerdown.asp" 
  },
  { 
    name: "onpointermove", 
    category: "Pointer", 
    description: "Occurs when a pointer moves over an element.", 
    tags: "All elements", 
    link: "https://www.w3schools.com/jsref/event_onpointermove.asp" 
  },

  // --- Media ---
  { 
    name: "onplay", 
    category: "Media", 
    description: "Fires when media starts playing.", 
    tags: "&lt;audio&gt;, &lt;video&gt;", 
    link: "https://www.w3schools.com/jsref/event_onplay.asp" 
  },
  { 
    name: "onpause", 
    category: "Media", 
    description: "Fires when media is paused.", 
    tags: "&lt;audio&gt;, &lt;video&gt;", 
    link: "https://www.w3schools.com/jsref/event_onpause.asp" 
  },

  // --- Animation / Transition ---
  { 
    name: "onanimationstart", 
    category: "Animation/Transition", 
    description: "Triggered when a CSS animation starts.", 
    tags: "All elements", 
    link: "https://www.w3schools.com/jsref/event_animationstart.asp" 
  },
  { 
    name: "ontransitionend", 
    category: "Animation/Transition", 
    description: "Triggered when a CSS transition finishes.", 
    tags: "All elements", 
    link: "https://www.w3schools.com/jsref/event_transitionend.asp" 
  },

  // --- DOM ---
  { 
    name: "onDOMContentLoaded", 
    category: "DOM", 
    description: "Occurs when the HTML document has been completely loaded and parsed.", 
    tags: "&lt;document&gt;", 
    link: "https://www.w3schools.com/jsref/event_domcontentloaded.asp" 
  },
  { 
    name: "oninput", 
    category: "DOM", 
    description: "Occurs when an element gets user input.", 
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;", 
    link: "https://www.w3schools.com/jsref/event_oninput.asp" 
  },

  // --- Focus ---
  { 
    name: "onfocus", 
    category: "Focus", 
    description: "Occurs when an element gains focus.", 
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;button&gt;", 
    link: "https://www.w3schools.com/jsref/event_onfocus.asp" 
  },
  { 
    name: "onblur", 
    category: "Focus", 
    description: "Occurs when an element loses focus.", 
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;button&gt;", 
    link: "https://www.w3schools.com/jsref/event_onblur.asp" 
  }
];


function displayEvents(filter = "") {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";

  events
    .filter(evt =>
      evt.name.toLowerCase().includes(filter.toLowerCase()) ||
      evt.category.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach(evt => {
      const card = document.createElement("article");
      card.className = "event-card";
      card.innerHTML = `
        <h2>${evt.name}</h2>
        <p class="category"><strong>Category:</strong> ${evt.category}</p>
        <p>${evt.description}</p>
        <p class="tags"><strong>Supported Tags:</strong> ${evt.tags}</p>
        <a href="${evt.link}" target="_blank" class="learn-more">Learn more →</a>
      `;
      container.appendChild(card);
    });
}

document.getElementById("searchBox").addEventListener("input", e => {
  displayEvents(e.target.value);
});

displayEvents();
