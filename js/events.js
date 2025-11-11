const events = [
  // --- Window & Document ---
  {
    name: "onload",
    category: "Window",
    description: "Fires when the page or resource has fully loaded.",
    tags: "&lt;body&gt;, &lt;img&gt;, &lt;iframe&gt;",
    link: "https://www.w3schools.com/jsref/event_onload.asp"
  },
  {
    name: "onbeforeunload",
    category: "Window",
    description: "Triggered before the document is unloaded.",
    tags: "&lt;window&gt;, &lt;body&gt;",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"
  },
  {
    name: "onunload",
    category: "Window",
    description: "Fires when the page is unloaded or the browser window is closed.",
    tags: "&lt;body&gt;, &lt;window&gt;",
    link: "https://www.w3schools.com/jsref/event_onunload.asp"
  },
  {
    name: "onresize",
    category: "Window",
    description: "Triggered when the browser window is resized.",
    tags: "&lt;body&gt;, &lt;window&gt;",
    link: "https://www.w3schools.com/jsref/event_onresize.asp"
  },
  {
    name: "onscroll",
    category: "Window",
    description: "Occurs when an element or the window is scrolled.",
    tags: "All scrollable elements",
    link: "https://www.w3schools.com/jsref/event_onscroll.asp"
  },
  {
    name: "onhashchange",
    category: "Window",
    description: "Fires when the URL hash changes.",
    tags: "&lt;window&gt;",
    link: "https://www.w3schools.com/jsref/event_onhashchange.asp"
  },
  {
    name: "onerror",
    category: "Window",
    description: "Triggered when an error occurs in loading an image, script, or document.",
    tags: "Global",
    link: "https://www.w3schools.com/jsref/event_onerror.asp"
  },
  {
    name: "ononline",
    category: "Window",
    description: "Occurs when the browser goes online.",
    tags: "&lt;window&gt;",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event"
  },
  {
    name: "onoffline",
    category: "Window",
    description: "Occurs when the browser goes offline.",
    tags: "&lt;window&gt;",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event"
  },
  {
    name: "onDOMContentLoaded",
    category: "DOM",
    description: "Fires when the HTML has been completely loaded and parsed.",
    tags: "&lt;document&gt;",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event"
  },

  // --- Mouse ---
  {
    name: "onclick",
    category: "Mouse",
    description: "Triggered when an element is clicked.",
    tags: "All visible elements",
    link: "https://www.w3schools.com/jsref/event_onclick.asp"
  },
  {
    name: "ondblclick",
    category: "Mouse",
    description: "Occurs when an element is double-clicked.",
    tags: "All visible elements",
    link: "https://www.w3schools.com/jsref/event_ondblclick.asp"
  },
  {
    name: "onmousedown",
    category: "Mouse",
    description: "Occurs when a mouse button is pressed down on an element.",
    tags: "All visible elements",
    link: "https://www.w3schools.com/jsref/event_onmousedown.asp"
  },
  {
    name: "onmouseup",
    category: "Mouse",
    description: "Occurs when a mouse button is released over an element.",
    tags: "All visible elements",
    link: "https://www.w3schools.com/jsref/event_onmouseup.asp"
  },
  {
    name: "onmousemove",
    category: "Mouse",
    description: "Occurs when the pointer is moved within an element.",
    tags: "All visible elements",
    link: "https://www.w3schools.com/jsref/event_onmousemove.asp"
  },
  {
    name: "onmouseover",
    category: "Mouse",
    description: "Occurs when the pointer is moved onto an element.",
    tags: "All visible elements",
    link: "https://www.w3schools.com/jsref/event_onmouseover.asp"
  },
  {
    name: "onmouseout",
    category: "Mouse",
    description: "Occurs when the pointer is moved out of an element.",
    tags: "All visible elements",
    link: "https://www.w3schools.com/jsref/event_onmouseout.asp"
  },
  {
    name: "onmouseenter",
    category: "Mouse",
    description: "Occurs when the pointer enters the element (no bubbling).",
    tags: "All visible elements",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event"
  },
  {
    name: "onmouseleave",
    category: "Mouse",
    description: "Occurs when the pointer leaves the element (no bubbling).",
    tags: "All visible elements",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event"
  },
  {
    name: "oncontextmenu",
    category: "Mouse",
    description: "Triggered when the right mouse button is clicked (context menu).",
    tags: "All visible elements",
    link: "https://www.w3schools.com/jsref/event_oncontextmenu.asp"
  },

  // --- Keyboard ---
  {
    name: "onkeydown",
    category: "Keyboard",
    description: "Occurs when a key is pressed down.",
    tags: "&lt;input&gt;, &lt;textarea&gt;, document",
    link: "https://www.w3schools.com/jsref/event_onkeydown.asp"
  },
  {
    name: "onkeypress",
    category: "Keyboard",
    description: "Occurs when a key that produces a character value is pressed down.",
    tags: "&lt;input&gt;, &lt;textarea&gt;",
    link: "https://www.w3schools.com/jsref/event_onkeypress.asp"
  },
  {
    name: "onkeyup",
    category: "Keyboard",
    description: "Occurs when a key is released.",
    tags: "&lt;input&gt;, &lt;textarea&gt;, document",
    link: "https://www.w3schools.com/jsref/event_onkeyup.asp"
  },

  // --- Form ---
  {
    name: "onchange",
    category: "Form",
    description: "Fires when a form element value changes and loses focus.",
    tags: "&lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;",
    link: "https://www.w3schools.com/jsref/event_onchange.asp"
  },
  {
    name: "oninput",
    category: "Form",
    description: "Occurs when an element receives user input.",
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;",
    link: "https://www.w3schools.com/jsref/event_oninput.asp"
  },
  {
    name: "onsubmit",
    category: "Form",
    description: "Occurs when a form is submitted.",
    tags: "&lt;form&gt;",
    link: "https://www.w3schools.com/jsref/event_onsubmit.asp"
  },
  {
    name: "onreset",
    category: "Form",
    description: "Occurs when a form is reset.",
    tags: "&lt;form&gt;",
    link: "https://www.w3schools.com/jsref/event_onreset.asp"
  },
  {
    name: "onfocus",
    category: "Form",
    description: "Fires when an element gets focus.",
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;button&gt;",
    link: "https://www.w3schools.com/jsref/event_onfocus.asp"
  },
  {
    name: "onblur",
    category: "Form",
    description: "Fires when an element loses focus.",
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;button&gt;",
    link: "https://www.w3schools.com/jsref/event_onblur.asp"
  },
  {
    name: "oninvalid",
    category: "Form",
    description: "Occurs when a form element fails validation.",
    tags: "&lt;input&gt;, &lt;form&gt;",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event"
  },
  {
    name: "onselect",
    category: "Form",
    description: "Occurs when text inside an input or textarea is selected.",
    tags: "&lt;input&gt;, &lt;textarea&gt;",
    link: "https://www.w3schools.com/jsref/event_onselect.asp"
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
    name: "oncut",
    category: "Clipboard",
    description: "Triggered when content is cut.",
    tags: "&lt;input&gt;, &lt;textarea&gt;, &lt;div&gt;",
    link: "https://www.w3schools.com/jsref/event_oncut.asp"
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
    name: "ondrag",
    category: "Drag & Drop",
    description: "Occurs while an element is being dragged.",
    tags: "All draggable elements",
    link: "https://www.w3schools.com/jsref/event_ondrag.asp"
  },
  {
    name: "ondragenter",
    category: "Drag & Drop",
    description: "Triggered when a dragged item enters a drop target.",
    tags: "All drop targets",
    link: "https://www.w3schools.com/jsref/event_ondragenter.asp"
  },
  {
    name: "ondragover",
    category: "Drag & Drop",
    description: "Occurs when a dragged item is over a valid drop target.",
    tags: "All drop targets",
    link: "https://www.w3schools.com/jsref/event_ondragover.asp"
  },
  {
    name: "ondragleave",
    category: "Drag & Drop",
    description: "Occurs when a dragged item leaves a valid drop target.",
    tags: "All drop targets",
    link: "https://www.w3schools.com/jsref/event_ondragleave.asp"
  },
  {
    name: "ondrop",
    category: "Drag & Drop",
    description: "Occurs when a dragged item is dropped on a valid target.",
    tags: "All drop targets",
    link: "https://www.w3schools.com/jsref/event_ondrop.asp"
  },
  {
    name: "ondragend",
    category: "Drag & Drop",
    description: "Occurs when a drag operation ends.",
    tags: "All draggable elements",
    link: "https://www.w3schools.com/jsref/event_ondragend.asp"
  },

  // --- Touch & Pointer ---
  {
    name: "ontouchstart",
    category: "Touch",
    description: "Triggered when a touch point is placed on the touch surface.",
    tags: "All elements",
    link: "https://www.w3schools.com/jsref/event_ontouchstart.asp"
  },
  {
    name: "ontouchmove",
    category: "Touch",
    description: "Triggered when a touch point is moved along the touch surface.",
    tags: "All elements",
    link: "https://www.w3schools.com/jsref/event_ontouchmove.asp"
  },
  {
    name: "ontouchend",
    category: "Touch",
    description: "Triggered when a touch point is removed.",
    tags: "All elements",
    link: "https://www.w3schools.com/jsref/event_ontouchend.asp"
  },
  {
    name: "onpointerdown",
    category: "Pointer",
    description: "Occurs when a pointer is pressed down.",
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
  {
    name: "onpointerup",
    category: "Pointer",
    description: "Occurs when a pointer is released.",
    tags: "All elements",
    link: "https://www.w3schools.com/jsref/event_onpointerup.asp"
  },
  {
    name: "onpointercancel",
    category: "Pointer",
    description: "Occurs when a pointer event is canceled.",
    tags: "All elements",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event"
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
  {
    name: "onended",
    category: "Media",
    description: "Occurs when playback has stopped because the end of the media was reached.",
    tags: "&lt;audio&gt;, &lt;video&gt;",
    link: "https://www.w3schools.com/jsref/event_onended.asp"
  },
  {
    name: "ontimeupdate",
    category: "Media",
    description: "Occurs when the current playback position has changed.",
    tags: "&lt;audio&gt;, &lt;video&gt;",
    link: "https://www.w3schools.com/jsref/event_ontimeupdate.asp"
  },
  {
    name: "onvolumechange",
    category: "Media",
    description: "Occurs when the volume is changed.",
    tags: "&lt;audio&gt;, &lt;video&gt;",
    link: "https://www.w3schools.com/jsref/event_onvolumechange.asp"
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
    name: "onanimationend",
    category: "Animation/Transition",
    description: "Triggered when a CSS animation ends.",
    tags: "All elements",
    link: "https://www.w3schools.com/jsref/event_animationend.asp"
  },
  {
    name: "onanimationiteration",
    category: "Animation/Transition",
    description: "Triggered when a CSS animation repeats.",
    tags: "All elements",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/animationiteration_event"
  },
  {
    name: "ontransitionend",
    category: "Animation/Transition",
    description: "Triggered when a CSS transition finishes.",
    tags: "All elements",
    link: "https://www.w3schools.com/jsref/event_transitionend.asp"
  },

  // --- Misc ---
  {
    name: "onwheel",
    category: "Misc",
    description: "Occurs when the mouse wheel is rolled up or down over an element.",
    tags: "All elements",
    link: "https://www.w3schools.com/jsref/event_onwheel.asp"
  },
  {
    name: "onanimationcancel",
    category: "Misc",
    description: "Occurs when a CSS animation is canceled before finishing.",
    tags: "All elements",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/animationcancel_event"
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
