<div align="center">

#  VibeQuest

###  Never wonder *"What should I do now?"* again.

A modern activity recommendation web application built with **Node.js**, **Express.js**, **EJS**, **Axios**, and a **Glassmorphism-inspired UI**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Discover fun activities based on category and number of participants.**

</div>

---

# See It in Action

<img width="1627" height="908" alt="image" src="https://github.com/user-attachments/assets/e32e7d8e-0d2d-451b-bd95-c72142ebc3a8" />
<img width="1596" height="906" alt="image" src="https://github.com/user-attachments/assets/782b9379-0463-4291-9fe4-1dbb986c98dc" />


---

# ◈ Features

<table>
<tr>

<td align="center">
<h3>🌐</h3>
<b>REST API</b><br>
Live activities fetched using Axios.
</td>

<td align="center">
<h3>⚡</h3>
<b>Fast Rendering</b><br>
Server-side rendering with EJS.
</td>

</tr>

<tr>

<td align="center">
<h3>🎯</h3>
<b>Smart Filters</b><br>
Category & participant based suggestions.
</td>

<td align="center">
<h3>💎</h3>
<b>Modern UI</b><br>
Glassmorphism + Gradient Animations.
</td>

</tr>

<tr>

<td align="center">
<h3>📱</h3>
<b>Responsive</b><br>
Works across all devices.
</td>

<td align="center">
<h3>🛡</h3>
<b>Error Handling</b><br>
Gracefully handles invalid responses.
</td>

</tr>

</table>

---

# ◈ Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| EJS | Server-side Templating |
| Axios | API Requests |
| HTML5 | Structure |
| CSS3 | Styling & Animations |

---

# ◈ Project Structure

```text
VibeQuest/
│
├── public/
│   └── styles/
│       └── main.css
│
├── views/
│   └── index.ejs
|
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

---

# ◈ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/VibeQuest.git
```

### Move into the project

```bash
cd VibeQuest
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node index.js
```

Visit

```
http://localhost:3000
```

---

# ◈ Core Concepts Implemented

##  Express Routing

Used GET and POST routes for rendering pages and handling user input.

```javascript
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  // Handle form submission
});
```

---

##  API Integration using Axios

Fetched activity data from a public REST API.

```javascript
const response = await axios.get(API_URL);
const result = response.data;
```

---

##  Async / Await

Implemented asynchronous API calls using async/await for cleaner code.

```javascript
const response = await axios.get(API_URL);
```

---

##  Form Handling

Collected user input using Express middleware.

```javascript
const type = req.body.type;
const participants = req.body.participants;
```

---

##  Dynamic Rendering with EJS

Rendered API data dynamically on the webpage.

```ejs
<h2><%= result.activity %></h2>
```

Conditional rendering:

```ejs
<% if(locals.result){ %>

<!-- Activity Card -->

<% } %>
```

---

##  Filtering API Data

Compared user selections with API response before displaying the activity.

```javascript
if (
    result.type === req.body.type &&
    result.participants == req.body.participants
) {
    res.render("index.ejs", { result });
}
```

---

##  Error Handling

Gracefully handled invalid requests.

```javascript
try {

    const response = await axios.get(API_URL);

} catch (err) {

    res.render("index.ejs", {
        error: "No activity found."
    });

}
```

---

##  Modern CSS

The UI includes:

- Glassmorphism Design
- Animated Gradient Background
- Hover Animations
- Responsive Layout
- CSS Grid
- Flexbox
- Media Queries
- Smooth Transitions

---

# ◈ Application Flow

```text
             User Opens Website
                     │
                     ▼
             GET Request (/)
                     │
                     ▼
           Render index.ejs Page
                     │
                     ▼
        User Selects Filters & Clicks Go
                     │
                     ▼
             POST Request (/)
                     │
                     ▼
            Read Data from req.body
                     │
                     ▼
          Axios Calls Public REST API
                     │
                     ▼
            Receive JSON Response
                     │
                     ▼
     Match Activity with User Selection
                     │
                     ▼
         Render Activity using EJS
                     │
                     ▼
          Beautiful Activity Card 
```

---

# ◈ Concepts Practiced

- Express.js
- Routing
- Middleware
- REST APIs
- Axios
- Async / Await
- Server Side Rendering
- EJS
- Form Handling
- Responsive Design
- CSS Animations
- Glassmorphism
- Error Handling

---

# ◈ Future Improvements

-  Dark Mode
-  Save Favorite Activities
-  Refresh Activity
-  Advanced Filters
-  User Authentication

---

# ◈ Contributing

Contributions are always welcome!

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a Pull Request.

---

# ◈ Support

If you found this project helpful,

please consider giving it a ⭐ on GitHub.

It motivates me to build more awesome projects.

---

<div align="center">

### 💻 Built with ❤️ by Prerna Sharma

**Node.js • Express.js • Axios • EJS • CSS**

⭐ Thank you for visiting this repository!

</div>
