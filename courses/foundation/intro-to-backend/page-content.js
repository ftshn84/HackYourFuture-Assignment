export const user_count = "<h1>Total Users</h1>"+
"<p id=\"count\">Loading...</p>"+
"      <script>"+
"          fetch('/user-count')"+
"            .then(response => response.json())"+
"            .then(data => {"+
"              document.getElementById('count').textContent = data[0]['COUNT(*)'];"+
"            })"+
"      </script>"

