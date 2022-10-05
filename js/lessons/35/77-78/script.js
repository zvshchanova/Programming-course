function upload() {

    var file = document.getElementById('file')

    // set date from today + 5 days
    let date = new Date();
    date.setDate(date.getDate() + 5)
    let expires = date.toISOString().slice(0, 10)

    var data = new FormData()
    data.append('file', file.files[0])
    data.append('expires', expires)
    data.append('maxDownloads', 1)
    data.append('autoDelete', true)


    let url = 'https://file.io/';
    fetch(url, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer F3WBRZN.F8WSGY3-CFM47NE-PY0BSTC-67XDRJJ',
            },
            body: data
        })

        .then((response) => response.json())
        .then((data) => {
            alert("File added successfully")
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });

    // Add new file to list vith timeout
    setTimeout(view, 2000)
}

function view() {
    let url = 'https://file.io/';
    fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer F3WBRZN.F8WSGY3-CFM47NE-PY0BSTC-67XDRJJ',
            }
        })

        .then((response) => response.json())
        .then((data) => {
            let arr = data.nodes
            console.log(arr)

            // Сlear info 
            function clearBox(p) {
                document.getElementById('p').innerHTML = "";
            };
            clearBox();

            // View info whith download  
            for (let i = 0; i < arr.length; i++) {
                document.getElementById('p').innerHTML += 'File name: ' + arr[i].name + ' <a href="'+arr[i].link+'" target="blank"> Download </a>' + '<br>' + "File key: " + arr[i]
                    .key + '; Auto deleted at: ' + arr[i].expires.slice(0, 10) + '<br><br>';
            }
        })
        .catch((error) => {
            console.log('Error:', error)
            alert('Error:', error);
        });

}

function put() {

var file = document.getElementById('file')

// set date from today + 5 days
let date = new Date();
date.setDate(date.getDate() + 5)
let expires = date.toISOString().slice(0, 10)

var data = new FormData()
data.append('file', file.files[0])
data.append('expires', expires)
data.append('maxDownloads', 1)
data.append('autoDelete', true)

let fileId = document.getElementById('fileId').value;

let url = new URL(fileId, 'https://file.io/');
console.log(url)
fetch(url, {
    method: "PUT",
    headers: {
        'Authorization': 'Bearer F3WBRZN.F8WSGY3-CFM47NE-PY0BSTC-67XDRJJ',
    },
    body: data
})

.then((response) => response.json())
.then((data) => {
    alert("File change successfully")
    console.log('Success:', data);
})
.catch((error) => {
    console.log('Error:', error);
});

// Add new file to list vith timeout
setTimeout(view, 2000)
}


    // show list of files
view()